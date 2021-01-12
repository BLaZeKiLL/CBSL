using CBSL.Core.Source.Core.Runtime.Provider;

namespace CBSL.Core.Test.Runtime.Provider {

    public class TestComponent {

        private int _health;

        public TestComponent(int health) {
            _health = health;
        }

        public int Power() => 2 * _health;

    }
    
    public class TestSettings {

        public int Health { get; set; }

    }
    
    public class TestProvider : Provider<TestProvider, TestSettings> {

        public virtual TestComponent CreateComponent() => new TestComponent(Settings.Health);

    }

}