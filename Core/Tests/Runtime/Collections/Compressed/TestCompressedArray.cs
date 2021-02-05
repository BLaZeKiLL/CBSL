using System;
using System.Collections.Generic;

using CBSL.Core.Collections.Compressed;

namespace CBSL.Core.Test.Runtime.Collections.Compressed {

    public class TestCompressedArray : CompressedArray<int> {

        public TestCompressedArray(int[] data, int dataSize) : base(data, dataSize) { }

        public TestCompressedArray(List<byte> bytes, int length, int dataSize) : base(bytes, length, dataSize) { }

        protected override int FromBytes(byte[] bytes) => BitConverter.ToInt32(bytes, 0);

        protected override byte[] GetBytes(int obj) => BitConverter.GetBytes(obj);

    }

}