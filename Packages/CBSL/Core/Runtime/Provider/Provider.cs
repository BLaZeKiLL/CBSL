using System;

namespace CBSL.Core.Source.Core.Runtime.Provider {

    public abstract class Provider<P> where P : Provider<P>, new() {

        public static P Current { get; private set; }
        
        public static void Initialize(P provider, Action<P> Initializer) {
            Current = provider;
            Initializer(Current);
        }
        
        public static void Initialize(Action<P> Initializer) {
            Current = new P();
            Initializer(Current);
        }
        
    }

}