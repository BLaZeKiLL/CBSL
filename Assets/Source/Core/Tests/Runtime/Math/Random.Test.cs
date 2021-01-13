using System.Collections;

using CBSL.Core.Math;

using NUnit.Framework;

using UnityEngine.TestTools;

namespace CBSL.Core.Test.Runtime.Math {

    public class Random {

        [Test]
        public void Random_Should_Return_Random_Value_In_Range() {
            var value = Core.Math.Random.Ranges(new Range {Min = -5, Max = -2}, new Range {Min = 2, Max = 5});
            Assert.That(value, Is.LessThanOrEqualTo(5).Or.LessThanOrEqualTo(-2));
            Assert.That(value, Is.GreaterThanOrEqualTo(-5).Or.GreaterThanOrEqualTo(2));
        }

    }

}