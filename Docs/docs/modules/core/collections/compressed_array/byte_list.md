---
title: Byte List
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="overview"
  values={[
    {label: 'Overview', value: 'overview'},
    {label: 'API', value: 'api'},
  ]}>
<TabItem value="overview">

## Layout

```javascript title="Uncompressed Array"
[A,A,A,A,A,A,A,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C]
```

would be compressed to

```javascript title="CompressedByteList"
[<A as bytes>,<7 as bytes>,<B as bytes>,<4 as bytes>,<C as bytes>,<11 as bytes>]
```

you need to specify how to convert you objects to and from bytes

---

## Usage

CompressedByteList has 2 constructors :-

```csharp
public CompressedArray(T[] data, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }

public CompressedArray(List<byte> bytes, int originalLength, int dataSize, Func<byte[], T> fromBytes, Func<T, byte[]> getBytes) { }
```
allowing you to create the array from both compressed and uncompressed data


you need to provide implementation on how to serialize and deserialize you type to and from bytes
these are provided as func's

```csharp title="Compressed Array of int's"
var array = new CompressedArray<int>(data, sizeof(int), bytes => BitConverter.ToInt32(bytes, 0), BitConverter.GetBytes);
```

:::info Serialization
In compressed format data is stored as list of bytes making it easy to read and write to disk
:::

---

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
</Tabs>