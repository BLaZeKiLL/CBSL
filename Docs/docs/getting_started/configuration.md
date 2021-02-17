---
title: Configuration
---

Specific modules of CBSL can be enabled on demand by defining the appropriate compiler directive.

Add the required defines to your [Scripting Define Symbols](https://docs.unity3d.com/Manual/PlatformDependentCompilation.html) array in the project's player settings.

:::note
Core module is always enabled so no config is required for it
:::

:::caution
For extensions the corresponding base dependecy needs to be installed mannualy
:::

## Module Defines

| Module             | Define                   |
|--------------------|--------------------------|
| Logging            | `CBSL_LOGGING`           |
| Manager Framework  | `CBSL_MANAGER_FRAMEWORK` |

## Extension Defines

| Extension          | Define                   |
|--------------------|--------------------------|
| UniTask Extensions | `CBSL_EXT_UNITASK`       |