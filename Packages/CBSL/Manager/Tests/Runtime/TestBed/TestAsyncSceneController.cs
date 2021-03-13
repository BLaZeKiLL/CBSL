using System.Collections;

using CBSL.ManagerFramework.Scene;

namespace CBSL.Manager.Tests.Runtime.TestBed {

    public class TestAsyncSceneController : AsyncSceneController {

        protected override IEnumerator Bootstrap() {
            TestManager.Initialize();

            yield return null;
        }

    }

}