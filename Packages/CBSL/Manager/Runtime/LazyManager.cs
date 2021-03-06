﻿using System;
using System.Collections;

using CBSL.ManagerFramework.Behaviour;

using UnityEngine;

namespace CBSL.ManagerFramework {

    public class LazyManager<T> where T : LazyManager<T>, new() {

        private static T _current;

        public static T Current {
            get {
                if (_current == null) Initialize();

                return _current;
            }
        }

        private InternalBehaviour _Behaviour { get; }

        protected LazyManager() {
            _Behaviour = InternalBehaviour.Create(typeof(T).Name);
            _Behaviour.OnUpdateAction = OnUpdate;
            _Behaviour.OnLateUpdateAction = OnLateUpdate;
            _Behaviour.OnDrawGizmosAction = OnDrawGizmos;
            _Behaviour.OnDestroyAction = () => {
                OnDestroy();
                _current = default;
            };
        }
        
        private static void Initialize() {
            if (_current != null) throw new InvalidOperationException("Instance of this manager is already presented in the scene.");
            _current = new T();
            _current.OnInitialize();
        }
        
        protected virtual void OnInitialize() {}
        
        protected virtual void OnDestroy() {}
        
        protected virtual void OnUpdate() {}
        
        protected virtual void OnLateUpdate() {}
        
        protected virtual void OnDrawGizmos() {}
        
        protected TChild InstantiateChild<TChild>(TChild original) where TChild : UnityEngine.Object =>
            UnityEngine.Object.Instantiate(original, _Behaviour.transform);

        protected Coroutine StartCoroutine(IEnumerator routine) => _Behaviour.StartCoroutine(routine);

        protected void StopCoroutine(IEnumerator routine) => _Behaviour.StopCoroutine(routine);

        protected void StopCoroutine(Coroutine routine) => _Behaviour.StopCoroutine(routine);
        
    }

}