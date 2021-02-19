---
title: Batching
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

Uni Task provides an easy way to achive multi-threading using `UniTask.RunOnThreadPool()`.

CBSL extension for UniTask provides batching API to split tasks on multiple threads.

## Batch Scheduler

`BatchScheduler.Process()` takes in a `IEnumerable<I>` Where `I` represents input data, then it divides the data into batches
and processes each batch on seprate threads.

The process method has 2 overloads :-

```csharp
public static async UniTaskVoid Process<I>(IEnumerable<I> input, int size, Action<I> process, Action<Batch<I>>? preProcess, Action<Batch<I>>? postProcess)
```

```csharp
public static async UniTask<IEnumerable<O>> Process<I, O>(IEnumerable<I> input, int size, Func<I, O> process, Action<Batch<I>>? preProcess, Action<Batch<I>, O[]>? postProcess)
```

the difference between the two is in the *for each process*, one takes a `Func<I, O>` and one takes an `Action<I>`.
Use the Func overload if you want your tasks to return something, the result is also an array corresponding to each input.

PreProcess & PostProcess callbacks are run on main thread for each batch and can be null.

</TabItem>
<TabItem value="api">
working on a tool to auto-generate api docs.
</TabItem>
<TabItem value="example">
</TabItem>
</Tabs>
