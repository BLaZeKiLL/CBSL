﻿using System;
using System.Collections.Generic;

using UnityEngine;

namespace CBSL.Core.Collections.Compressed {

    public abstract class CompressedArray<T> {
        
        public DataState State { get; private set; }
        public int Length { get; private set; }
        public int DataSize { get; }
        
        private object _data;

        public CompressedArray(T[] data, int dataSize) {
            _data = data;
            Length = data.Length;
            DataSize = dataSize;
            State = DataState.DECOMPRESSED;
        }

        public CompressedArray(List<byte> bytes, int length, int dataSize) {
            _data = bytes;
            Length = length;
            DataSize = dataSize;
            State = DataState.COMPRESSED;
        }

        protected abstract T FromBytes(byte[] bytes);

        protected abstract byte[] GetBytes(T obj);

        public T GetAt(int index) {
            return State switch {
                DataState.COMPRESSED => GetInCompressed(index),
                DataState.DECOMPRESSED => GetDeCompressedData()[index],
                _ => throw new ArgumentOutOfRangeException()
            };
        }

        public void SetAt(int index, T obj) {
            switch (State) {
                case DataState.COMPRESSED:
                    throw new NotImplementedException("Set at for compressed data not implemented");
                case DataState.DECOMPRESSED:
                    GetDeCompressedData()[index] = obj;
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        public List<byte> GetCompressedData() {
            if (State != DataState.COMPRESSED) throw new InvalidOperationException("Data not compressed");

            return (List<byte>) _data;
        }

        public T[] GetDeCompressedData() {
            if (State != DataState.DECOMPRESSED) throw new InvalidOperationException("Data not decompressed");

            return (T[]) _data;
        }
        
        public void Compress() {
            var data = GetDeCompressedData();
            var bytes = new List<byte>();
            var cdata = data[0];
            var index = 0;
            
            bytes.AddRange(GetBytes(cdata));

            for (int i = 1; i < data.Length; i++) {
                index++;

                if (data[i].Equals(cdata)) continue;
                
                bytes.AddRange(BitConverter.GetBytes(index));
                cdata = data[i];
                bytes.AddRange(GetBytes(cdata));
            }

            bytes.AddRange(BitConverter.GetBytes(++index));

            _data = bytes;
            State = DataState.COMPRESSED;
        }

        public void DeCompress() {
            var bytes = GetCompressedData();
            var data = new T[Length];
            var step = DataSize + sizeof(int);
            var bindex = 0;

            for (int i = 0; i < bytes.Count; i += step) {
                var obj = FromBytes(bytes.GetRange(i, DataSize).ToArray());
                var count = BitConverter.ToInt32(bytes.GetRange(i + DataSize, sizeof(int)).ToArray(), 0);

                for (int j = bindex; j < count; j++) {
                    data[j] = obj;
                }

                bindex = count;
            }

            _data = data;
            State = DataState.DECOMPRESSED;
        }

        private T GetInCompressed(int index) {
            var data = GetCompressedData();
            var min = 0;
            var max = Mathf.CeilToInt((float) data.Count / (DataSize + sizeof(int)));

            while (min <= max) {
                var mid = (max + min) / 2;
                var val = BitConverter.ToInt32(data.GetRange(mid * (DataSize + sizeof(int)) + DataSize, sizeof(int)).ToArray(), 0);

                if (index == val) return FromBytes(data.GetRange((mid + 1) * (DataSize + sizeof(int)), DataSize).ToArray());

                if (index < val) max = mid - 1;
                else min = mid + 1;
            }
            
            return FromBytes(data.GetRange(min * (DataSize + sizeof(int)), DataSize).ToArray());
        }

        public enum DataState {

            COMPRESSED,
            DECOMPRESSED

        }
        
        

    }

}