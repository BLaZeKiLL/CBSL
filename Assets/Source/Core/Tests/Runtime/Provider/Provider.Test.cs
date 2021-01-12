using System.Collections;

using NUnit.Framework;

using UnityEngine.TestTools;

namespace CBSL.Core.Test.Runtime.Provider {

    public class Provider {

        private TestSettings _settings;
        
        [SetUp]
        public void Setup() {
            _settings = new TestSettings {Health = 100};
            TestProvider.Initialize(() => new TestProvider(), _settings);
        }
        
        [Test]
        public void Provider_Should_Return_Current_Settings() {
            Assert.That(TestProvider.Current.Settings, Is.EqualTo(_settings));
        }

        [Test]
        public void Provider_TestComponent_Should_Compute_Power() {
            var component = TestProvider.Current.CreateComponent();
            Assert.That(component, Is.TypeOf<TestComponent>());
            Assert.That(component.Power(), Is.EqualTo(_settings.Health * 2));
        }

    }

}