﻿using CBSL.Core.Provider;

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
    
    public class TestProvider : Provider<TestProvider> {

        public TestSettings Settings { get; set; }
        
        public virtual ITestComponent CreateComponent() => new TestComponent(Settings.Health);

    }

}