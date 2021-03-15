using System.Collections.Generic;

namespace CBSL.Core.Collections.Compressed {

    public interface ICompressedArray<T, C> {

        public void Compress();

        public void Decompress();

        public T GetAt(int index);

        public void SetAt(int index, T obj);

        public T[] GetDecompressed();

        public C GetCompressed();

        public T[] GetDecompressedData();

        public C GetCompressedData();

    }

}