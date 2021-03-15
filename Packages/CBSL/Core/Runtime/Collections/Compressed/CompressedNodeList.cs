using System;
using System.Collections.Generic;

namespace CBSL.Core.Collections.Compressed {

    public class CompressedNodeList<T> : ICompressedArray<T, List<CompressedNodeList<T>.Node>> {

        public DataState State { get; private set; }
        public int Length { get; }

        private object _data;

        public CompressedNodeList(T[] data) {
            _data = data;
            Length = data.Length;
            State = DataState.DECOMPRESSED;
        }

        public CompressedNodeList(List<Node> data, int originalLength) {
            _data = data;
            Length = originalLength;
            State = DataState.COMPRESSED;
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
            switch (State) {
                case DataState.COMPRESSED:
                    throw new NotImplementedException("Set at for compressed data not implemented");
                case DataState.DECOMPRESSED:
                    GetDecompressedData()[index] = obj;
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
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

        public readonly struct Node {

            public int Count { get; }
            public T Object { get; }

            public Node(int count, T obj) {
                Count = count;
                Object = obj;
            }

        }

    }

}