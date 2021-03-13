using System;
using System.Collections;

using UnityEngine;

namespace CBSL.ManagerFramework.Scene {

    [DefaultExecutionOrder(-1200)]
    public abstract class AsyncSceneController : MonoBehaviour {

        public static event EventHandler PostBootstrap; 
        
        protected abstract IEnumerator Bootstrap();

        private IEnumerator Start() {
            yield return Bootstrap();
            PostBootstrap?.Invoke(this, EventArgs.Empty);
        }

    }

}