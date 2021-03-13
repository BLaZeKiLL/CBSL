using System;

using UnityEngine;

namespace CBSL.ManagerFramework.Scene {

    [DefaultExecutionOrder(-1200)]
    public abstract class SceneController : MonoBehaviour {

        public static event EventHandler PostBootstrap; 
        
        protected abstract void Bootstrap();

        private void Start() {
            Bootstrap();
            PostBootstrap?.Invoke(this, EventArgs.Empty);
        }

    }

}