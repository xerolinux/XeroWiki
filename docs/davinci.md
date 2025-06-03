---
title: DaVinci Reslove Installer
tags:
  - Linux
  - DaVinci
  - Editing
---

# <h2 align="center">📽️ DaVinci Reslove Installer 📽️</h2>

### ℹ️ Info

This script will install **DaVinci Resolve** software as well as additional software for remote monitoring and utilities for setting up hardware control panels. It also installs Blackmagic RAW Player and Blackmagic Proxy Generator into the applications folder.

<p align="center">
    <img src="https://i.imgur.com/EgULGgW.png" alt="DaVinci">
</p>

The free version of **DaVinci Resolve** includes all of the same high quality processing as **DaVinci Resolve Studio** and can handle unlimited resolution media files. However it does limit project mastering and output to Ultra HD resolutions or lower and only supports a single processing GPU on Windows and Linux.

---

<h1 align="center">.// The Wiki \\.</h1>
<h3 align="center">⚠️ <strong>DaVinCi support NOT provided</strong> ⚠️</h3>

### 📜 Installation

!!! warning

    In case you selected the *Studio* version, you will have to provide your own license, one will not be given to you, so please no not ask ! You will be responsible on making it work as well. I just created the script to make it easier for you to install the software, I do not use it myself. For support please check their [**Forum**](https://forum.blackmagicdesign.com/){:target="_blank"}.
    
- **⚙️ Supported Platform :**

The script was written for **ArchLinux** and derivatives only ! However you can take it and adapt it to work on whatever Distro-Base you are using. All I ask is not to come back to me and ask for help. Now on to how to use it. [**Link to Script**](https://xerolinux.xyz/script/davinci.sh){:target="_blank"}

- **🚀 Installation :**

Run this command in Terminal :

```Bash
bash -c "$(curl -fsSL https://xerolinux.xyz/script/davinci.sh)"
```

Script will install the required `figlet` and `fuse2` packages in case they are missing before running, once that's taken care of it will resume. Select the version you want to use. Once download is done, it will extract and run the **DaVinci** installer. Go through it as you would on a **Windows** machine and click finish. Then the script will ask you what GPU you have, be it **nVidia** or **AMD** select the appropriate one, at which point the script will take care of the rest. Once it's all done, just launch the app, either from the newly created desktop shortcut or the App Launcher/Menu.

### 🗨️ Wrap up

In case the script fails please do let me know on **Discord**. I will try to fix it. Download might fail in case a new version gets released, I will try my best to keep it up-to-date. I have to manually update it, no other way. I hope this made your life easier. Enjoy ;)
