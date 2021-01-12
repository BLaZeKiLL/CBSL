using System;

namespace CBSL.Core.Source.Core.Runtime.Provider {

    public abstract class Provider<P, S> where P : Provider<P, S> where S : new() {

        public static P Current { get; private set; }

        public S Settings { get; set; }

        public static void Initialize(Func<P> provider, S settings) {
            Current = provider();
            Current.Settings = settings;
        }

    }

}