using System;
using System.Collections.Generic;
using System.Linq;

using UnityEngine;

namespace CBSL.Extension.UniTask.Threading {

    public class Batch<I> {

        public I[] Input { get; }

        public Batch(I[] input) {
            Input = input;
        }

        public static Batch<I>[] CreateBatches(IEnumerable<I> jobs, int size) {
            var job_list = jobs.ToList();
            var batches = new Batch<I>[Mathf.CeilToInt((float) job_list.Count / size)];
            var index = 0;
            for (int i = 0; i < job_list.Count; i += size) {
                batches[index++] = new Batch<I>(job_list.GetRange(i, Math.Min(size, job_list.Count - i)).ToArray());
            }

            return batches;
        }

        public O[] ForEach<O>(Func<I, O> func) {
            var result = new O[Input.Length];
                
            for (int i = 0; i < Input.Length; i++) {
                result[i] = func(Input[i]);
            }

            return result;
        }

        public void ForEach(Action<I> action) {
            foreach (var t in Input) {
                action(t);
            }
        }

    }

}