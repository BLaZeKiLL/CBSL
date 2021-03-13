using System.Collections;
using System.Linq;

using CBSL.Manager.Tests.Runtime.TestBed;

using NUnit.Framework;

using UnityEditor.SceneManagement;

using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

namespace CBSL.Manager.Tests.Runtime {

    public class AsyncManagerTest {

        [OneTimeSetUp]
        public void Setup() {
            EditorSceneManager.LoadSceneInPlayMode("Packages/io.codeblaze.cbsl/Manager/Tests/Runtime/Scene/Test_AsyncManager.unity", new LoadSceneParameters(LoadSceneMode.Single));
        }
        
        [UnityTest]
        public IEnumerator TestManagerShouldExist() {
            Assert.That(TestManager.Current, Is.Not.Null);
            Assert.That(SceneManager.GetActiveScene().GetRootGameObjects().ToList().Select(go => go.name), Contains.Item(nameof(TestManager)));

            yield return null;
        }

        [UnityTest]
        public IEnumerator TestLazyManagerShouldExist() {
            Assert.That(TestLazyManager.Current, Is.Not.Null);
            Assert.That(SceneManager.GetActiveScene().GetRootGameObjects().ToList().Select(go => go.name), Contains.Item(nameof(TestLazyManager)));

            yield return null;
        }

    }

}