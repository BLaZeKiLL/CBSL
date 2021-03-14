using System;
using System.Collections.Generic;

namespace CBSL.Core.Collections.Compressed {

    public class CompressedLinkedList<T> : ICompressedArray<T, LinkedList<CompressedLinkedList<T>.Node>> {

        public DataState State { get; private set; }
        
        public int Length { get; }

        private object _data;

        public CompressedLinkedList(T[] data) {
            _data = data;
            Length = data.Length;
        }

        public CompressedLinkedList(LinkedList<Node> data, int originalLength) {
            _data = data;
            Length = originalLength;
        }

        public void Compress() {
            _data = InternalCompress(GetDecompressedData());
            State = DataState.COMPRESSED;
        }

        public void Decompress() {
            _data = InternalDecompress(GetCompressedData());
            State = DataState.DECOMPRESSED;
        }

        public T GetAt(int index) => State switch {
            DataState.COMPRESSED => InternalGetAt(index),
            DataState.DECOMPRESSED => GetDecompressedData()[index],
            _ => throw new ArgumentOutOfRangeException()
        };

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

        public LinkedList<Node> GetCompressed() => InternalCompress(GetDecompressedData());
        
        public T[] GetDecompressedData() {
            if (State != DataState.DECOMPRESSED) throw new InvalidOperationException("Data not decompressed");

            return (T[]) _data;
        }

        public LinkedList<Node> GetCompressedData() {
            if (State != DataState.COMPRESSED) throw new InvalidOperationException("Data not compressed");

            return (LinkedList<Node>) _data;
        }

        private LinkedList<Node> InternalCompress(T[] data) {
            var compressed = new LinkedList<Node>();
            var cdata = data[0];
            var index = 0;

            for (int i = 1; i < Length; i++) {
                
                if (!data[i].Equals(cdata)) {
                    compressed.AddLast(new Node {
                        Count = index,
                        Object = cdata
                    });

                    cdata = data[i];
                }
                
                index++;
            }

            return compressed;
        }

        private T[] InternalDecompress(LinkedList<Node> data) {
            var decompressed = new T[Length];
            var index = 0;

            foreach (var node in data) {
                for (int i = index; i < node.Count; i++) {
                    decompressed[index] = node.Object;
                }
            }

            return decompressed;
        }

        private T InternalGetAt(int index) {
            var data = GetCompressedData();

            var node = data.First;

            while (node.Next != null) {
                if (node.Value.Count == index) return node.Value.Object;
                if (node.Value.Count < index && node.Previous?.Value.Count >= index) return node.Previous.Value.Object;
            }

            throw new IndexOutOfRangeException($"{index} is out of range for the given data");
        }

        public struct Node {

            public int Count { get; set; }
            public T Object { get; set; }

        }

    }

}