---
title: CBSL - Manager Framework
sidebar_label: Introduction
---

import Video from '@site/src/components/video';

CBSL Manager Framework provides basic building blocks, allowing you to create managers easily while the framework takes 
care of all the boiler-plate and initialization.

<Video src="https://www.youtube.com/embed/Od4X3ag-s3g"/>

Manager Framework is made up of following components
- SceneController/AsyncSceneController - Base classes which you override to provide manager initialization order
- Manager/LazyManager - Base classes to implement managers

:::caution
Mangers are currently not thread safe
:::