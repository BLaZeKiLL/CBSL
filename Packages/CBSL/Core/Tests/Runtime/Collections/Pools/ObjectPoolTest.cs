using CBSL.Core.Collections.Pools;

using NUnit.Framework;

namespace CBSL.Core.Test.Runtime.Collections.Pools {

    public class ObjectPoolTest {

        [Test]
        public void ShouldReturnObjectsInFiFoOrderAndInvokeCallbacks() {
            int claimCount = 0, reclaimCount = 0;
            var pool = new ObjectPool<string>(
                5, 
                index => $"Hello {index}",
                item => claimCount++,
                item => reclaimCount++);

            for (int i = 0; i < pool.Size; i++) {
                var item = pool.Claim();
                Assert.That(item, Is.EqualTo($"Hello {i}"));
                pool.Reclaim(item);
            }
            
            Assert.That(claimCount, Is.EqualTo(pool.Size));
            Assert.That(reclaimCount, Is.EqualTo(pool.Size));
        }

    }

}