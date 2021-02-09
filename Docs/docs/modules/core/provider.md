---
title: Provider
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

Provider base class allows you to create simple IOC containers. Ideally your provider should have
virtuals methods which return interface types that can be overriding in concrete providers (runtime provider & testing provider). Main goal of this pattern is to decouple dependencies and easy testing.


## Implementation

```csharp title="Simple provider implementation"
public class SimpleProvider : Provider<SimpleProvider> {

    public SimpleSettings Settings { get; set; }
    
    public virtual ISimpleComponent CreateComponent() => new SimpleComponent(Settings.Health);

}
```

:::info Singletons

Can be created by storing the objects in member variables

:::

---

## Initialization

Providers need to be initialized once before use and this can be done by calling the initialize method.

```csharp title="Provider Initialization"
Provider<SimpleProvider>.Initialize(new TestSimpleProvider(), provider => {
    provider.Settings = _settings;
});
```

Initialize has 2 overloads :-
- `Initialize(provider, initializer)` :-
  - provider - it's the concrete instance of your provider, usefull when you are overiding your provider
  and want to use differnt provider depending upon config
  - initializer - it's a callback that is called just after the provider is initialized, you can set      singleton member variables here for eager initialization
- `Initialize(initializer)` - same as above just that provider is created according to the generic type,
can't use different implementation's of provider in this case

---

## Usage

Objects can be requested in the following manner.

```csharp title="Provider usage"
var component = Provider<TestProvider>.Current.CreateComponent();
```

</TabItem>
<TabItem value="api">
working on a tool to auto-generate api docs.
</TabItem>
<TabItem value="example">

#### Below example shows how a provider is being used in a voxel terrain generation system.

```csharp title="Voxel Provider"
public class VoxelProvider<B> : Provider<VoxelProvider<B>> where B : IBlock {

    public VoxelSettings Settings { get; set; }

    public virtual Chunk<B> CreateChunk(Vector3Int position) => new Chunk<B>(position);

    public virtual ChunkStore<B> ChunkStore(INoiseProfile<B> noiseProfile) => new ChunkStore<B>(noiseProfile, Settings.Chunk);

    public virtual IChunkData<B> ChunkData(B[] blocks) => null;
    
    public virtual INoiseProfile<B> NoiseProfile() => null;

    public virtual ChunkBehaviourPool<B> ChunkPool(Transform transform) => new ChunkBehaviourPool<B>(transform);

    public virtual IMeshBuilder<B> MeshBuilder() => new GreedyMeshBuilder<B>(Settings.Chunk.ChunkSize);
    
    public virtual MeshBuildCoordinator<B> MeshBuildCoordinator(ChunkBehaviourPool<B> chunkBehaviourPool) => new UniTaskMultiThreadedMeshBuildCoordinator<B>(chunkBehaviourPool, Settings.Schedular.BatchSize);

}
```

---

#### This base class is extended by 2 classes :-
- `ColoredVoxelProvider` - used at runtime for colored voxel terrain generation system
  ```csharp
  public class ColoredVoxelProvider : VoxelProvider<ColoredBlock> {
      
      public override IMeshBuilder<ColoredBlock> MeshBuilder() => new ColoredGreedyMeshBuilder(Settings.Chunk.ChunkSize);

      public override INoiseProfile<ColoredBlock> NoiseProfile() => new ColoredNoiseProfile2D(Settings.NoiseSettings as NoiseSettings2D, Settings.Chunk);

      public override IChunkData<ColoredBlock> ChunkData(ColoredBlock[] blocks) {
          var data = new ColoredChunkData(blocks, 4, Settings.Chunk.ChunkSize);
          data.Compress();

          return data;
      }

      public override MeshBuildCoordinator<ColoredBlock> MeshBuildCoordinator(ChunkBehaviourPool<ColoredBlock> chunkBehaviourPool) => new ColoredMeshBuildCoordinator(chunkBehaviourPool, Settings.Schedular.BatchSize);

  }
  ```
- `TestVoxelProvider` - used for testing of the voxel terrain generation system
  ```csharp
  public class TestVoxelProvider : VoxelProvider<TestBlock> {

      public override INoiseProfile<TestBlock> NoiseProfile() => new TestNoiseProfile2D(Settings.NoiseSettings as NoiseSettings2D, Settings.Chunk);

  }
  ```

---

#### Finally the provider is initialized in the system.

```csharp
protected virtual VoxelProvider<B> Provider() => new VoxelProvider<B>();

private void Awake() {
    VoxelProvider<B>.Initialize(Provider(), provider => {
        provider.Settings = _settings;
    });
}
```

The `Provider()` method is overwritten depending upon config and the correct provider is initialized.

</TabItem>
</Tabs>