using System;
using System.Collections.Generic;

using CBSL.Core.Collections.Compressed;

using NUnit.Framework;

namespace CBSL.Core.Test.Runtime.Collections.Compressed {

    public class CompressedNodeArrayTest {

        [Test]
        public void ShouldCompressData() {
            var data = new int[4096];

            var actual = new CompressedNodeArray<int>(data);
            
            actual.Compress();

            var expected = new List<CompressedNodeArray<int>.Node> { new CompressedNodeArray<int>.Node(4096, 0) };

            Assert.That(actual.CompressedLength, Is.EqualTo(1));
            Assert.That(actual.GetCompressedData(), Is.EquivalentTo(expected));
        }

        [Test]
        public void ShouldCreateCompressedData() {
            var actual = new CompressedNodeArray<int>(4096);

            for (int i = 0; i < 2048; i++) {
                actual.Add(0);
            }
            
            for (int i = 2048; i < 4096; i++) {
                actual.Add(1);
            }

            var expected = new List<CompressedNodeArray<int>.Node> {
                new CompressedNodeArray<int>.Node(2048, 0),
                new CompressedNodeArray<int>.Node(4096, 1)
            };

            Assert.That(actual.CompressedLength, Is.EqualTo(2));
            Assert.That(actual.GetCompressedData(), Is.EquivalentTo(expected));
        }

        [Test]
        public void ShouldDecompressData() {
            var data = new List<CompressedNodeArray<int>.Node> {new CompressedNodeArray<int>.Node(4096, 0)};

            var actual = new CompressedNodeArray<int>(data, 4096);
            
            actual.Decompress();

            var expected = new int[4096];
            
            Assert.That(actual.GetDecompressedData(), Is.EquivalentTo(expected));
        }
        
        [Test]
        public void RandomDataCompression() {
            var data = new int[4096];

            for (int i = 0; i < 32; i++) {
                for (int j = 0; j < 128; j++) {
                    data[i * 128 + j] = i;
                }
            }

            var compressedNodeArray = new CompressedNodeArray<int>(data);
            
            compressedNodeArray.Compress();
            
            compressedNodeArray.Decompress();

            var actual = compressedNodeArray.GetDecompressedData();

            Assert.That(actual, Is.EquivalentTo(data));
        }

        [Test]
        public void RandomDataAccess() {
            var data = new int[4096];

            for (int i = 0; i < 32; i++) {
                for (int j = 0; j < 128; j++) {
                    data[i * 128 + j] = i;
                }
            }
            
            var compressedNodeArray = new CompressedNodeArray<int>(data);
            
            compressedNodeArray.Compress();

            var actual = new int[4096];

            for (int i = 0; i < 4096; i++) {
                actual[i] = compressedNodeArray.GetAt(i);
            }

            Assert.That(actual, Is.EquivalentTo(data));
        }

    }

}