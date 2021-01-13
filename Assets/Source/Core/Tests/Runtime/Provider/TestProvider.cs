using CBSL.Core.Source.Core.Runtime.Provider;

namespace CBSL.Core.Test.Runtime.Provider {

    public interface ITestComponent {

        int Power();

    }

    public class TestComponent : ITestComponent {

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

        public virtual ITestComponent CreateComponent() => new TestComponent(Settings.Health);

    }

}