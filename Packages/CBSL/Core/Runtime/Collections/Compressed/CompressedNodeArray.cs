using System;
using System.Collections.Generic;
using System.Linq;

namespace CBSL.Core.Collections.Compressed {

    public class CompressedNodeArray<T> : ICompressedArray<T, List<CompressedNodeArray<T>.Node>> {

        public DataState State { get; private set; }
        public int Length { get; }

        private object _data;

        public readonly struct Node {

            public int Count { get; }
            public T Object { get; }

            public Node(int count, T obj) {
                Count = count;
                Object = obj;
            }

        }
        
        public CompressedNodeArray(IReadOnlyCollection<T> data) {
            _data = data;
            Length = data.Count;
            State = DataState.DECOMPRESSED;
        }

        public CompressedNodeArray(List<Node> data, int size) {
            _data = data;
            Length = size;
            State = DataState.COMPRESSED;
        }

        /// <summary>
        /// Use it to create an empty compressed array
        /// </summary>
        /// <param name="size">size of the uncompressed array</param>
        public CompressedNodeArray(int size) {
            _data = new List<Node>();
            Length = size;
            State = DataState.COMPRESSED;
        }

        /// <summary>
        /// Use it to add obj's to empty compressed array
        /// </summary>
        /// <param name="obj">object to add</param>
        public void Add(T obj) {
            var data = GetCompressedData();

            if (data.Count == 0) {
                data.Add(new Node(1, obj));
            } else {
                var last = data.Last();
                if (obj.Equals(last.Object)) data[data.Count - 1] = new Node(last.Count + 1, obj);
                else data.Add(new Node(last.Count + 1, obj));
            }
        }

        public void Compress() {
            _data = InternalCompress(GetDecompressedData());
            State = DataState.COMPRESSED;
        }

        public void Decompress() {
            _data = InternalDecompress(GetCompressedData());
            State = DataState.DECOMPRESSED;
        }

        public T GetAt(int index) {
            if (index >= Length) throw new IndexOutOfRangeException($"{index} is out of range for the given data");
            return State switch {
                DataState.COMPRESSED => InternalGetAt(index),
                DataState.DECOMPRESSED => GetDecompressedData()[index],
                _ => throw new ArgumentOutOfRangeException()
            };
        }

        public void SetAt(int index, T obj) {
            GetDecompressedData()[index] = State switch {
                DataState.COMPRESSED => throw new NotImplementedException("Set at for compressed data not implemented"),
                DataState.DECOMPRESSED => obj,
                _ => throw new ArgumentOutOfRangeException()
            };
        }

        public T[] GetDecompressed() => InternalDecompress(GetCompressedData());

        public List<Node> GetCompressed() => InternalCompress(GetDecompressedData());
        
        public T[] GetDecompressedData() {
            if (State != DataState.DECOMPRESSED) throw new InvalidOperationException("Data not decompressed");

            return (T[]) _data;
        }

        public List<Node> GetCompressedData() {
            if (State != DataState.COMPRESSED) throw new InvalidOperationException("Data not compressed");

            return (List<Node>) _data;
        }

        #region Internal

        private List<Node> InternalCompress(T[] data) {
            var compressed = new List<Node>();
            var cdata = data[0];
            var index = 0;

            for (int i = 1; i < Length; i++) {
                index++;

                if (data[i].Equals(cdata)) continue;

                compressed.Add(new Node(index, cdata));

                cdata = data[i];
            }

            compressed.Add(new Node(++index, cdata));
            
            return compressed;
        }

        private T[] InternalDecompress(List<Node> data) {
            var decompressed = new T[Length];
            var index = 0;

            foreach (var node in data) {
                for (int i = index; i < node.Count; i++) {
                    decompressed[i] = node.Object;
                }

                index = node.Count;
            }

            return decompressed;
        }

        private T InternalGetAt(int index) {
            var data = GetCompressedData();
            var min = 0;
            var max = data.Count;

            while (min <= max) {
                var mid = (max + min) / 2;
                var count = data[mid].Count;

                if (index == count) return data[mid + 1].Object;

                if (index < count) max = mid - 1;
                else min = mid + 1;
            }

            return data[min].Object;
        }

        #endregion
    }

}