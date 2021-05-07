using System;
using System.Collections.Generic;

using CBSL.Core.Collections.Compressed;

using NUnit.Framework;

namespace CBSL.Core.Test.Runtime.Collections.Compressed {

    public class CompressedNodeArrayTest {

        [Test]
        public void ShouldCompressData() {
            var data = new int[4096];

            var compressedNodeList = new CompressedNodeArray<int>(data);
            
            compressedNodeList.Compress();

            var actual = compressedNodeList.GetCompressedData();

            var expected = new List<CompressedNodeArray<int>.Node> { new CompressedNodeArray<int>.Node(4096, 0) };

            Assert.That(actual, Is.EquivalentTo(expected));
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

            Assert.That(actual.GetCompressedData(), Is.EquivalentTo(expected));
        }

        [Test]
        public void ShouldDecompressData() {
            var data = new List<CompressedNodeArray<int>.Node> {new CompressedNodeArray<int>.Node(4096, 0)};

            var compressedNodeList = new CompressedNodeArray<int>(data, 4096);
            
            compressedNodeList.Decompress();

            var actual = compressedNodeList.GetDecompressedData();
            
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

            var compressedNodeList = new CompressedNodeArray<int>(data);
            
            compressedNodeList.Compress();
            
            compressedNodeList.Decompress();

            var actual = compressedNodeList.GetDecompressedData();

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
            
            var compressedNodeList = new CompressedNodeArray<int>(data);
            
            compressedNodeList.Compress();

            var actual = new int[4096];

            for (int i = 0; i < 4096; i++) {
                actual[i] = compressedNodeList.GetAt(i);
            }

            Assert.That(actual, Is.EquivalentTo(data));
        }

    }

}