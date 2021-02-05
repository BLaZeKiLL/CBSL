using System.Collections;

using NUnit.Framework;

using UnityEngine.TestTools;

namespace CBSL.Core.Test.Runtime.Provider {

    public class ProviderTest {

        private TestSettings _settings;
        
        [SetUp]
        public void Setup() {
            _settings = new TestSettings {Health = 100};
            TestProvider.Initialize(provider => {
                provider.Settings = _settings;
            });
        }
        
        [Test]
        public void ShouldReturnCurrentSettings() {
            Assert.That(TestProvider.Current.Settings, Is.EqualTo(_settings));
        }

        [Test]
        public void TestComponentShouldComputePower() {
            var component = TestProvider.Current.CreateComponent();
            Assert.That(component, Is.TypeOf<TestComponent>());
            Assert.That(component.Power(), Is.EqualTo(_settings.Health * 2));
        }

    }

}