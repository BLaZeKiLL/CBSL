using System;
using System.Collections.Generic;

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
            var index = 1;
            
            bytes.AddRange(GetBytes(cdata));

            for (int i = 1; i < data.Length; i++) {
                if (data[i].Equals(cdata)) {
                    index++;
                } else {
                    bytes.AddRange(BitConverter.GetBytes(index));
                    index = 1;
                    cdata = data[i];
                    bytes.AddRange(GetBytes(cdata));
                }
            }

            bytes.AddRange(BitConverter.GetBytes(index));

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

                for (int j = bindex; j < count + bindex; j++) {
                    data[j] = obj;
                }

                bindex += count;
            }

            _data = data;
            State = DataState.DECOMPRESSED;
        }
        
        public enum DataState {

            COMPRESSED,
            DECOMPRESSED

        }

    }

}