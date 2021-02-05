using NUnit.Framework;

using UnityEngine;

namespace CBSL.Core.Test.Runtime.Behaviour {

    public class SingletonTest {

        private GameObject _go;
        
        [SetUp]
        public void Setup() {
            _go = new GameObject("TestObject", typeof(TestSingletonBehaviour));
        }

        [TearDown]
        public void TearDown() {
            Object.Destroy(_go);
        }

        [Test]
        public void TestSingletonBehaviourShouldNotBeNull() {
            Assert.That(TestSingletonBehaviour.Current, Is.Not.Null);
        }

    }

}