using System;
using System.Collections.Generic;

using UnityEngine;

namespace CBSL.Core.Collections.Compressed {

    public class CompressedByteList<T> : ICompressedArray<T, List<byte>> {
        
        public DataState State { get; private set; }
        public int Length { get; }
        public int DataSize { get; }

        private Func<byte[], T> _fromBytes;
        private Func<T, byte[]> _getBytes;
        
        private object _data;

        public CompressedByteList(T[] data, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) {
            _data = data;
            Length = data.Length;
            DataSize = dataSize;
            _fromBytes = fromBytes;
            _getBytes = getBytes;
            State = DataState.DECOMPRESSED;
        }

        public CompressedByteList(List<byte> bytes, int length, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) {
            _data = bytes;
            Length = length;
            DataSize = dataSize;
            _fromBytes = fromBytes;
            _getBytes = getBytes;
            State = DataState.COMPRESSED;
        }

        public T GetAt(int index) {
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

        public List<byte> GetCompressedData() {
            if (State != DataState.COMPRESSED) throw new InvalidOperationException("Data not compressed");

            return (List<byte>) _data;
        }

        public T[] GetDecompressedData() {
            if (State != DataState.DECOMPRESSED) throw new InvalidOperationException("Data not decompressed");

            return (T[]) _data;
        }
        
        public void Compress() {
            _data = InternalCompress(GetDecompressedData());
            State = DataState.COMPRESSED;
        }

        public void Decompress() {
            _data = InternalDecompress(GetCompressedData());
            State = DataState.DECOMPRESSED;
        }

        public T[] GetDecompressed() => InternalDecompress(GetCompressedData());

        public List<byte> GetCompressed() => InternalCompress(GetDecompressedData());

        private List<byte> InternalCompress(T[] data) {
            var compressed = new List<byte>();
            var cdata = data[0];
            var index = 0;
            
            compressed.AddRange(_getBytes(cdata));

            for (int i = 1; i < data.Length; i++) {
                index++;

                if (data[i].Equals(cdata)) continue;
                
                compressed.AddRange(BitConverter.GetBytes(index));
                cdata = data[i];
                compressed.AddRange(_getBytes(cdata));
            }

            compressed.AddRange(BitConverter.GetBytes(++index));

            return compressed;
        }

        private T[] InternalDecompress(List<byte> data) {
            var decompressed = new T[Length];
            var step = DataSize + sizeof(int);
            var index = 0;

            for (int i = 0; i < data.Count; i += step) {
                var obj = _fromBytes(data.GetRange(i, DataSize).ToArray());
                var count = BitConverter.ToInt32(data.GetRange(i + DataSize, sizeof(int)).ToArray(), 0);

                for (int j = index; j < count; j++) {
                    decompressed[j] = obj;
                }

                index = count;
            }

            return decompressed;
        }

        private T InternalGetAt(int index) {
            var data = GetCompressedData();
            var min = 0;
            var max = Mathf.CeilToInt((float) data.Count / (DataSize + sizeof(int)));

            while (min <= max) {
                var mid = (max + min) / 2;
                var val = BitConverter.ToInt32(data.GetRange(mid * (DataSize + sizeof(int)) + DataSize, sizeof(int)).ToArray(), 0);

                if (index == val) return _fromBytes(data.GetRange((mid + 1) * (DataSize + sizeof(int)), DataSize).ToArray());

                if (index < val) max = mid - 1;
                else min = mid + 1;
            }
            
            return _fromBytes(data.GetRange(min * (DataSize + sizeof(int)), DataSize).ToArray());
        }

    }

}