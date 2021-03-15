---
title: Node List
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

```javascript title="CompressedNodeList"
[{A, 7},{B, 4},{C, 11}]
```

Internally a node struct is used

```csharp title="Node"
public readonly struct Node {

    public int Count { get; }
    public T Object { get; }

    public Node(int count, T obj) {
        Count = count;
        Object = obj;
    }

}
```

---

## Usage

CompressedNodeList has 2 constructors :-

```csharp
public CompressedArray(T[] data) { }

public CompressedArray(List<Node> data, int originalLength) { }
```

allowing you to create the array from both compressed and uncompressed data

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