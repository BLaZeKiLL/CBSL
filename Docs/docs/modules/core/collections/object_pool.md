---
title: Object Pool
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Video from '@site/src/components/video';

<Tabs
  defaultValue="overview"
  values={[
    {label: 'Overview', value: 'overview'},
    {label: 'API', value: 'api'},
    {label: 'Example', value: 'example'},
  ]}>
<TabItem value="overview">

Objects Pool's provide an efficient alternative to contineously instantiating and destroying objects.
instead objects are reused as per demand from the pool.

<Video src="https://www.youtube.com/embed/dmpDMDe2Wdk"/>

CBSL provides 2 general purpose object pools :-
- ObjectPool - Fixed size pool which creates objects at time of pool initialization
- LazyObjectPool - Fixed size pool which creates objects on demand (if the pool is empty)

other than this CBSL provides a `IObjectPool`, it's a simple interface that you can use to implement your own object pool

## Initialization

You can provide an IEnumerable to ObjectPool in constructor but ideally you would want to use the builder func constructor

```csharp title="Object Pool"
public ObjectPool(int size, Func<int, T> builder, Action<T> onClaim = null, Action<T> onReclaim = null) { }
```

```csharp title="Lazy Object Pool"
public LazyObjectPool(int size, Func<int, T> builder, Action<T> onClaim = null, Action<T> onReclaim = null) { }
```

using the func you can define how each item in the pool can be created

## Claim & Reclaim Hooks

As you can see in the above, both constructor's have `onClaim` & `onReclaim` Actions as optional parameters where you can define
custom login to be run on the item be claim and re-claimed. for e.g you can use these hooks to enable & disable game objects for 
a game object pool

```csharp
public ObjectPool(
    5, 
    index => new GameObject(), 
    go => go.SetActive(true), 
    go => go.SetActive(false)
) { }
```

</TabItem>
<TabItem value="api">

working on a tool to auto-generate api docs.

</TabItem>
<TabItem value="example">

Using the object pool to reuse chunks in a voxel engine

```csharp
new ObjectPool<ChunkBehaviour>(
    Size,
    index => {
        var go = new GameObject("Chunk", typeof(ChunkBehaviour));
        go.transform.parent = transform;
        go.SetActive(false);

        var chunkBehaviour = go.GetComponent<ChunkBehaviour>();
        chunkBehaviour.SetRenderSettings(VoxelProvider<B>.Current.Settings.Renderer);

        return chunkBehaviour;
    },
    chunkRenderer => chunkRenderer.gameObject.SetActive(true),
    chunkRenderer => chunkRenderer.gameObject.SetActive(false)
);
```

</TabItem>
</Tabs>