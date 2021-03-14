---
title: Compressed Array
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

In cases where you have large arrays with the same elements repeating contineously, Compressed Array can be used to reduce memory ussage.

```javascript title="Uncompressed Array"
[A,A,A,A,A,A,A,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C]
```

can be compressed to

```javascript title="Compressed Array"
[A,7,B,4,C,11]
```

## Usage

Compressed Array has 2 constructors :-

```csharp
public CompressedArray(T[] data, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }

public CompressedArray(List<byte> bytes, int length, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }
```
allowing you to create the array from both compressed and uncompressed data


you need to provide implementation on how to serialize and deserialize you type to and from bytes
these are provided as func's

```csharp title="Compressed Array of int's"
var array = new CompressedArray<int>(data, sizeof(int), bytes => BitConverter.ToInt32(bytes, 0), BitConverter.GetBytes);
```
`Compress()` & `DeCompress()` methods can be called on the array to change it's state anytime

:::info Serialization
In compressed format data is stored as list of bytes making it easy to read and write to disk
:::

## Data Access

If individual elements need to be accessed it is recomended to do this while array is in ***Decompressed*** state, in that case complexity for ***GetAt()*** and ***SetAt()*** is `O(1)`

Complexity of ***GetAt()*** in ***Compressed*** state is `O(logn)`, internally binary search is used.

:::danger
***SetAt()*** in ***Compressed*** state is not implemented yet and will throw an exception if executed.
:::

</TabItem>
<TabItem value="api">
working on a tool to auto-generate api docs.
</TabItem>
<TabItem value="example">

Compressed array in action, part of a voxel engine

<Video src="https://www.youtube.com/embed/a4wjYq3jN4g"/>

</TabItem>
</Tabs>