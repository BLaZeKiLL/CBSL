﻿namespace CBSL.Core.Collections.Pools {

    public interface IObjectPool<T> {

        int Size { get; }
        
        T Claim();

        void Reclaim(T item);

    }
    
}