using CBSL.ManagerFramework.Scene;

namespace CBSL.Manager.Tests.Runtime.TestBed {

    public class TestSceneController : SceneController {

        protected override void Bootstrap() {
            TestManager.Initialize();
        }

    }

}