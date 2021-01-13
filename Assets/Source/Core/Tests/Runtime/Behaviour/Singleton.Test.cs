using NUnit.Framework;

using UnityEngine;

namespace CBSL.Core.Test.Runtime.Behaviour {

    public class Singleton {

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
        public void Singleton_TestSingletonBehaviour_Should_Not_Be_Null() {
            Assert.That(TestSingletonBehaviour.Current, Is.Not.Null);
        }

    }

}