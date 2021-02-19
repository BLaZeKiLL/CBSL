using System;
using System.Collections.Generic;
using System.Linq;

using Cysharp.Threading.Tasks;

namespace CBSL.Extension.UniTask.Threading {

    public static class BatchScheduler {

        public static async UniTaskVoid Process<I>(IEnumerable<I> input, int size, Action<I> process, Action<Batch<I>>? preProcess, Action<Batch<I>>? postProcess) {
            var batches = Batch<I>.CreateBatches(input, size);
            var tasks = new Cysharp.Threading.Tasks.UniTask[batches.Length];

            for (var index = 0; index < batches.Length; index++) {
                tasks[index] = InternalProcess(batches[index], process, preProcess, postProcess);
            }

            await Cysharp.Threading.Tasks.UniTask.WhenAll(tasks);
        }
        
        public static async UniTask<IEnumerable<O>> Process<I, O>(IEnumerable<I> input, int size, Func<I, O> process, Action<Batch<I>>? preProcess, Action<Batch<I>, O[]>? postProcess) {
            var batches = Batch<I>.CreateBatches(input, size);
            var tasks = new UniTask<O[]>[batches.Length];

            for (var index = 0; index < batches.Length; index++) {
                tasks[index] = InternalProcess(batches[index], process, preProcess, postProcess);
            }

            return (await Cysharp.Threading.Tasks.UniTask.WhenAll(tasks)).SelectMany(x =>x);
        }

        private static async UniTask<O[]> InternalProcess<I, O>(Batch<I> batch, Func<I, O> process, Action<Batch<I>>? preProcess, Action<Batch<I>, O[]>? postProcess) {
            preProcess?.Invoke(batch);
            var	result = await Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(() => batch.ForEach(process));
            postProcess?.Invoke(batch, result);
            return result;
        }
        
        private static async Cysharp.Threading.Tasks.UniTask InternalProcess<I>(Batch<I> batch, Action<I> process, Action<Batch<I>>? preProcess, Action<Batch<I>>? postProcess) {
            preProcess?.Invoke(batch);
            await Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(() => batch.ForEach(process));
            postProcess?.Invoke(batch);
        }

    }

}