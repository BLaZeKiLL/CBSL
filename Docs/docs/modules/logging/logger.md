---
title: Logger
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
  CBSL logger is a wrapper around the unity logger and exposes all of it's api

  ```csharp
  Logger.Info<CallingClass>("My Log Message");
  ```

  the logger takes a generic parameter which is used to compute and unique colored tag
  
  optionally you can call `GetTag(color);` to create a tag with custom color and pass it while logging
  </TabItem>
  <TabItem value="api">
  working on a tool to auto-generate api docs.
  </TabItem>
</Tabs>