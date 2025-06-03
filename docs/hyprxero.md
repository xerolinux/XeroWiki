---
title: XeroLinux Hyprland Config
tags:
  - Linux
  - Ricing
  - Hyprland
---

# <h2 align="center">🎨 XeroLayan — now on Hyprland 🎨</h2>

### ℹ️ Info

**HyprXero** brings the stylish, polished feel of [**XeroLinux KDE**](https://github.com/xerolinux/xero-layan-git){:target="_blank"} to **Hyprland**, not as a full distro, but as a lightweight config you can drop into your setup. You get the same attention to design and user experience, paired with **Hyprland**’s smooth animations, low resource usage, and modern Wayland features. It’s a clean, fast, and good-looking way to enjoy the Xero vibe *without* needing a full ISO.

This config aims for simplicity and minimalism unlike many others out there that go overboard in my humble opinion. It's a good place to start with **Hyprland**. It's meant to be a *sane* base you can build on top of till your heart's content. You can either use it as is, or take it to another level, it's all up to you from here...

<p align="center">
    <img src="https://i.imgur.com/LBjNQAT.png" alt="HyprXero">
</p>

### ❤️‍🔥 Credits

This project was a real labor of love, built with the help of two **Legendary** people I’ve come to respect: [**Array**](https://github.com/aellas){:target="_blank"} (Config) and [**DDubs**](https://github.com/dwilliam62){:target="_blank"} (Advisor). Their input and support were crucial at every step, and without their contributions, this wouldn’t have come together the way it did. I’m glad to have worked with them on this. I just created the install script 😇

---

<h1 align="center">.// The Wiki \\.</h1>
<h3 align="center">⚠️ <strong>HyprLand support NOT provided</strong> ⚠️</h3>

### 📜 Installation

!!! warning

    **Hyprland** can be complex in and by itself, for support please check their [**HyprWiki**](https://wiki.hyprland.org){:target="_blank"}. If you do not have any prior Linux knowledge, please do not use it or this config. We will not be held responsible in case you break your system. It's yours, you are responsible for everything that happens to it.
    
- **⚙️ Supported Platforms :**

It is *Highly* recommended to only use this config on a fresh *Arch* install, meaning install base Arch using the ArchISO skipping profiles section entirely, once done, reboot and login to your newly created install/user in TTY then run the command below. In case you don't know how to do that, please follow the [**Installing ArchLinux**](https://wiki.xerolinux.xyz/script/#installing-archlinux){:target="_blank"} section of our previous guide. **Don't install on top of an existing DE/WM !**

- **🚀 Installation :**

If you do not already have it please make sure you have `git` installed in order for this to work.

```Bash
git clone https://github.com/xerolinux/HyprXero-git
cd HyprXero-git/ && ./install.sh
```

The script will add the **XeroLinux** repository for the toolkit, then go ahead and install **Hyprland** and all required components. We did it that way so you can use it as a *Post-Install* script. It will also prompt you as to which **AUR-Helper** you want to use for packages coming from there. It will work with either `yay` or `paru` so doesn't matter which you choose.

Just a heads-up: it will **NOT** install any drivers or tools to get your hardware working-that part’s all on you. Think of it like a helpful sidekick that sets up your config and gets everything running smoothly, but it won’t handle the hardware magic. So, roll up your sleeves and get ready to tinker!

**🛒 Elements Used :**

- **Terminal** ➤ Kitty
- **Editor** ➤ Nano
- **Wallpaper** ➤ Waypaper
- **Icons** ➤ Tela Circle Purple
- **Theme** ➤ Layan-dark
- **Menu** ➤ Rofi (Wayland)
- **Dock** ➤ nwg-dock-hyprland
- **File Manager** ➤ Thunar
- **Bar** ➤ Waybar
- **Screen Lock** ➤ Hyprlock
- **Idle Manager** ➤ Hypridle
- **Logout** ➤ Wlogout
- **Screenshot** ➤ Grim/Slurp + Satty

### ⌨️ Keybinds

All keybindings follow the `$mainMod` convention (`$mainMod` = **Super/Windows key**)

#### 🚀 App Launching
- `$mainMod + Return` ➤ Launch terminal (Kitty)
- `$mainMod + Space` ➤ Open application launcher (Rofi)
- `$mainMod + B` ➤ Open web browser (Falkon)
- `$mainMod + A` ➤ Take a screenshot of a region (Grim/Slurp)
- `$mainMod + N` ➤ Open file manager (Thunar)
- `$mainMod + C` ➤ Pick a color (hex code)
- `$mainMod + Shift + T` ➤ Toggle scratchpad terminal
- `Ctrl + Alt + Delete` ➤ Lock screen (Hyprlock)

#### 🪟 Window Actions
- `$mainMod + Q` ➤ Close the active window

#### 🧱 Tiling & Floating
- `$mainMod + V` ➤ Toggle floating mode for the active window
- `$mainMod + F` ➤ Toggle fullscreen mode for the active window
- `$mainMod + Y` ➤ Pin the active window (always visible on top)
- `$mainMod + J` ➤ Toggle split mode (dwindle layout)
- `$mainMod + Shift + M` ➤ Swap the Hyprland layout (master layout or dwindle)

#### 🔄 Window Cycling
- `Alt + Tab` ➤ Cycle through the next windows
- `Alt + Tab` ➤ Bring the active window to the top
- `Alt + Tab` ➤ Swap the active window with the master window (if the master layout is active)

#### ↔️ Focus Movement
- `$mainMod + Left Arrow` ➤ Focus on the window to the left
- `$mainMod + Right Arrow` ➤ Focus on the window to the right
- `$mainMod + Up Arrow` ➤ Focus on the window above
- `$mainMod + Down Arrow` ➤ Focus on the window below

#### 🔄 Move Windows
- `$mainMod + Shift + Left Arrow` ➤ Move the active window to the left
- `$mainMod + Shift + Right Arrow` ➤ Move the active window to the right
- `$mainMod + Shift + Up Arrow` ➤ Move the active window upwards
- `$mainMod + Shift + Down Arrow` ➤ Move the active window downwards

#### 📐 Window Resize
- `$mainMod + Ctrl + Shift + H/Left Arrow` ➤ Resize the active window to the left
- `$mainMod + Ctrl + Shift + L/Right Arrow` ➤ Resize the active window to the right
- `$mainMod + Ctrl + Shift + K/Up Arrow` ➤ Resize the active window upwards
- `$mainMod + Ctrl + Shift + J/Down Arrow` ➤ Resize the active window downwards
- `$mainMod + R` then `H/J/K/L` or `Arrow Keys` ➤ Enter resize mode, press `Esc` to exit

#### 🖱️ Mouse Controls
- `$mainMod + Left Mouse Button` ➤ Move the active window
- `$mainMod + Right Mouse Button` v Resize the active window

#### 🖥️ Workspaces
- `$mainMod + [1-9, 0]` ➤ Switch to workspace [1-9]
- `$mainMod + Ctrl + [1-9, 0]` ➤ Move the active window to workspace [1-9, 0] and switch to it
- `$mainMod + Shift + [1-9, 0]` ➤ Move the active window silently to workspace [1-9, 0]
- `$mainMod + Ctrl + Left Arrow` ➤ Move to the previous workspace
- `$mainMod + Ctrl + Right Arrow`➤ Move to the next workspace

### ❓ FAQ

**⚙️ Changing Default Applications**

You can easily customize the default applications Hyprland uses by editing the `~/.config/hypr/config/defaults.conf` file. Open this file in your preferred text editor and modify the lines corresponding to the application you want to change (e.g., `file_manager = thunar`, `terminal = kitty`, `browser = falkon`).

**⚙️ Applying a different theme**

If you want to use a different theme instead of **Layan**, you certainly can, but it’s not as simple as on **KDE Plasma** or **Gnome**. For **QT** and **GTK** apps, you’ll use **GTK Settings** or **Kvantum** included here. For things like **Waybar**, **Kitty**, or **SwayNC**, you’ll need to manually edit their style files. We don’t use automatic tools like **Pywal** or **Matugen**, so expect to do some manual tweaking. It’s a bit more hands-on, but definitely doable if you enjoy customizing!

### 🗨️ Wrap up

The install script will backup some app settings & all system ones before applying and overriding them with new ones, you will be able to restore what you need from the backup, so please do not report that. You have been warned. In case of any issues specific to this config please find us on our [**Discord**](https://discord.gg/5sqxTSuKZu){:target="_blank"}. Best of luck !
