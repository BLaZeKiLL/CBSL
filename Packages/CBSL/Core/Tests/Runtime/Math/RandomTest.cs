using CBSL.Core.Math;

using NUnit.Framework;

namespace CBSL.Core.Test.Runtime.Math {

    public class RandomTest {

        [Test]
        public void ShouldReturnRandomValueInRange() {
            var value = Random.Ranges(new Range {Min = -5, Max = -2}, new Range {Min = 2, Max = 5});
            Assert.That(value, Is.LessThanOrEqualTo(5).Or.LessThanOrEqualTo(-2));
            Assert.That(value, Is.GreaterThanOrEqualTo(-5).Or.GreaterThanOrEqualTo(2));
        }

    }

}