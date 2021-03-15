---
title: Compressed Array
sidebar_label: Introduction
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

In cases where you have large arrays with the same elements repeating contineously, Any of the Compressed Array can be used to reduce memory ussage.

The basic idea is

```javascript title="Uncompressed Array"
[A,A,A,A,A,A,A,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C]
```

can be compressed to

```javascript title="Compressed Array"
[A,7,B,4,C,11]
```

these implementation only differ by how they store compressed data, They all implement `ICompressedArray`

---

## Implementations
- ### [Byte List](byte_list)
  This implementation stores the data as a plain list of bytes, ideal for serialization but has a byte conversion overhead
- ### [Node List](node_list)
  This implementation stores the data as a list of Node (internal structure { Count, Object }), ideal for in-memory representation

---

## Usage

- `Compress()` & `Decompress()` - These methods can be used to mutate the internal data and it's state
- `GetCompressedData()` & `GetDecompressedData()` - These methods can be used to access the internal data (Casts are done for you).
  Could lead to `IllegalStateException` if you try to acces data in a state which it is not in currently.
- `GetCompressed()` & `GetDecompressed()` - These methods can be used to retive a copy of data in the desired state
- `GetAt()` & `SetAt()` - These methods can be used for indexed access to elements

:::caution
SetAt() may not be implemented for some of the implementations. do take a look at there data access sections before using.
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