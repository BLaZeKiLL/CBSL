using System.Collections.Generic;

using CBSL.Core.Collections.Random;

using NUnit.Framework;


namespace CBSL.Core.Test.Runtime.Collections.Random {

    public class RandomBag {

        [Test]
        public void RandomBag_Should_Return_Random_Items_From_Bag() {
            var elements = new List<string> {"a", "b", "c", "d"};
            var bag = new RandomBag<string>(elements);

            for (int i = 0; i < elements.Count; i++) {
                var item = bag.GetItem();
                Assert.That(elements, Contains.Item(item));
                elements.Remove(item);
            }
        }

    }

}