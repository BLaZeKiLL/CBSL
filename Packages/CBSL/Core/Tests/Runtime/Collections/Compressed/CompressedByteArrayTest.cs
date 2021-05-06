using System;
using System.Collections.Generic;

using CBSL.Core.Collections.Compressed;

using NUnit.Framework;

namespace CBSL.Core.Test.Runtime.Collections.Compressed {

    public class CompressedByteArrayTest {

        [Test]
        public void ShouldCompressData() {
            var data = new int[4096];

            var compressedByteList = new CompressedByteArray<int>(data, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            compressedByteList.Compress();

            var actual = compressedByteList.GetCompressedData();

            var expected = new List<byte>();
            expected.AddRange(BitConverter.GetBytes(0));
            expected.AddRange(BitConverter.GetBytes(4096));

            Assert.That(actual, Is.EquivalentTo(expected));
        }

        [Test]
        public void ShouldDecompressData() {
            var data = new List<byte>();
            data.AddRange(BitConverter.GetBytes(0));
            data.AddRange(BitConverter.GetBytes(4096));

            var compressedByteList = new CompressedByteArray<int>(data, 4096, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            compressedByteList.Decompress();

            var actual = compressedByteList.GetDecompressedData();
            
            var expected = new int[4096];
            
            Assert.That(actual, Is.EquivalentTo(expected));
        }

        [Test]
        public void RandomDataCompression() {
            var data = new int[4096];

            for (int i = 0; i < 32; i++) {
                for (int j = 0; j < 128; j++) {
                    data[i * 128 + j] = i;
                }
            }

            var compressedByteList = new CompressedByteArray<int>(data, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            compressedByteList.Compress();
            
            compressedByteList.Decompress();

            var actual = compressedByteList.GetDecompressedData();

            Assert.That(actual, Is.EquivalentTo(data));
        }

        [Test]
        public void RandomDataAccess() {
            var expected = new int[4096];

            for (int i = 0; i < 32; i++) {
                for (int j = 0; j < 128; j++) {
                    expected[i * 128 + j] = i;
                }
            }
            
            var compressedByteList = new CompressedByteArray<int>(expected, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            compressedByteList.Compress();

            var actual = new int[4096];

            for (int i = 0; i < 4096; i++) {
                actual[i] = compressedByteList.GetAt(i);
            }

            Assert.That(actual, Is.EquivalentTo(expected));
        }

        private Func<byte[], int> _fromBytes = bytes => BitConverter.ToInt32(bytes, 0);

    }

}