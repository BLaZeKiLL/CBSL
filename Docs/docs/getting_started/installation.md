---
title: Installation
---

There are multiple ways to install CBSL :-

### OpenUPM CLI
Simplest and the **recommended** way, just run the following command in the root of your project.
```
openupm add io.codeblaze.cbsl
```
:::note

If you don't have OpenUPM-CLI head over [here](https://openupm.com/docs/getting-started.html).

:::
> OpenUPM works on top of unity package manager and does everything for you,
> that you would have to do manually if you are directly using the package manager.

---

### Unity Package Manager
Head over to the package manager settings of your project, under project settings :-
  - Add a new scoped registry, name is anything you want (e.g OpenUPM)
  - Set the URL as `https://package.openupm.com`
  - Add the following to scopes array `io.codeblaze.cbsl`

After this you should see a MyRegistries option in the package manager window dropdown
and the CBSL should be listed you can go right ahead and install it
for more info head over [here](https://docs.unity3d.com/Manual/upm-ui-install.html).

---

### Editing Manifest.json
The above 2 methods will in the end modify the `manifest.json` inside your projects packages folder,
which can be done manually just add the following to you manifest.json.
```json {4,12}
{
  "dependencies": {
    // ...
    "io.codeblaze.cbsl": "1.2.1",
    // ...
  },
    "scopedRegistries": [
    {
      "name": "Open UPM",
      "url": "https://package.openupm.com",
      "scopes": [
        "io.codeblaze.cbsl"
      ]
    }
  ]
}
```

---

### Add Package via Github URL
All the above methods will install CBSL using the version tags published to OpenUPM.

___tough not recommended___, you can also directly install CBSL from github url for more info head over [here](https://docs.unity3d.com/Manual/upm-ui-giturl.html).

---

### Add as Source
Finally you could always download the source code as zip file from the [release page](https://github.com/BLaZeKiLL/CBSL/releases) and add it directly to your assets.