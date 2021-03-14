---
title: Scene Controller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="overview"
  values={[
    {label: 'Overview', value: 'overview'},
    {label: 'API', value: 'api'},
    {label: 'Example', value: 'example'},
  ]}>
<TabItem value="overview">

To get started with manager framework, the first thing you do is extend from either
- SceneController - uses synchronus bootstraping
- AsyncSceneController - uses async bootstrapping (IEnumerator)

both these base classes are abstract with just one member `Bootstrap()`

:::note
Script execution order for Scene Controller is `-1200`
:::

SceneController also has a `PosBootstrap` event which is fired when all managers have been initialized.

</TabItem>
<TabItem value="api">
working on a tool to auto-generate api docs.
</TabItem>
<TabItem value="example">

```csharp title="SceneController"
public class TestSceneController : SceneController {

    protected override void Bootstrap() {
        TestManager.Initialize();
    }

}
```

Notice the `IEnumerator` in Bootstrap, in case of async

```csharp title="AsyncSceneController"
public class TestAsyncSceneController : AsyncSceneController {

    protected override IEnumerator Bootstrap() {
        TestManager.Initialize();

        yield return null;
    }

}
```

</TabItem>
</Tabs>