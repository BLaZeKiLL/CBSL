using System;
using System.Collections.Generic;

using CBSL.Core.Collections.Compressed;

using NUnit.Framework;

namespace CBSL.Core.Test.Runtime.Collections.Compressed {

    public class CompressedArrayTest {

        [Test]
        public void ShouldCompressData() {
            var data = new int[4096];

            var array = new CompressedArray<int>(data, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            array.Compress();

            var actual = array.GetCompressedData();

            var expected = new List<byte>();
            expected.AddRange(BitConverter.GetBytes(0));
            expected.AddRange(BitConverter.GetBytes(4096));

            Assert.That(actual, Is.EquivalentTo(expected));
        }

        [Test]
        public void ShouldDeCompressData() {
            var bytes = new List<byte>();
            bytes.AddRange(BitConverter.GetBytes(0));
            bytes.AddRange(BitConverter.GetBytes(4096));

            var array = new CompressedArray<int>(bytes, 4096, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            array.DeCompress();

            var actual = array.GetDeCompressedData();
            
            var expected = new int[4096];
            
            Assert.That(actual, Is.EquivalentTo(expected));
        }

        [Test]
        public void RandomDataCompression() {
            var expected = new int[4096];

            for (int i = 0; i < 32; i++) {
                for (int j = 0; j < 128; j++) {
                    expected[i * 128 + j] = i;
                }
            }

            var array = new CompressedArray<int>(expected, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            array.Compress();
            
            array.DeCompress();

            var actual = array.GetDeCompressedData();

            Assert.That(actual, Is.EquivalentTo(expected));
        }

        [Test]
        public void RandomDataAccess() {
            var expected = new int[4096];

            for (int i = 0; i < 32; i++) {
                for (int j = 0; j < 128; j++) {
                    expected[i * 128 + j] = i;
                }
            }
            
            var array = new CompressedArray<int>(expected, sizeof(int), _fromBytes, BitConverter.GetBytes);
            
            array.Compress();

            var actual = new int[4096];

            for (int i = 0; i < 4096; i++) {
                actual[i] = array.GetAt(i);
            }

            Assert.That(actual, Is.EquivalentTo(expected));
        }

        private Func<byte[], int> _fromBytes = bytes => BitConverter.ToInt32(bytes, 0);

    }

}