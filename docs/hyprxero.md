---
title: XeroLinux Hyprland Config
tags:
  - Linux
  - Ricing
  - Hyprland
---

# <h2 align="center">🎨 XeroLinux KDE Rice — now on Hyprland 🎨</h2>

### ℹ️ Info

**HyprXero** brings the stylish, polished feel of [**XeroLinux KDE**](https://github.com/xerolinux/xero-layan-git){:target="_blank"} to **Hyprland**, not as a full distro, but as a lightweight config you can drop into your setup. You get the same attention to design and user experience, paired with **Hyprland**’s smooth animations, low resource usage, and modern Wayland features. It’s a clean, fast, and good-looking way to enjoy the Xero vibe *without* needing a full ISO.

<p align="center">
    <img src="https://i.imgur.com/iveWUu8.jpeg" alt="rice">
</p>

### ❤️‍🔥 Credits

This project was a real labor of love, built with the help of two **Legendary** people I’ve come to respect: [**@Array**](hhttps://github.com/aellas){:target="_blank"} (Config) and [**DDubs**](https://github.com/dwilliam62){:target="_blank"} (Advisor). Their input and support were crucial at every step, and without their contributions, this wouldn’t have come together the way it did. I’m glad to have worked with them on this. I just created the install script 😇

---

<h1 align="center">.// The Wiki \\.</h1>
<h3 align="center">⚠️ <strong>HyprLand support NOT provided</strong> ⚠️</h3>

### 📜 Installation

!!! warning

    **Hyprland** can be complex in and by itself, for support please check their [**HyprWiki**](https://wiki.hyprland.org){:target="_blank"}. If you do not have any prior Linux knowledge, please do not use it or this config. We will not be held responsible in case you break your system. It's yours, you are responsible for everything that happens to it.
    
- **⚙️ Supported Platforms :**

It is *Highly* recommended to only use this config on a fresh *Arch + Hyprland* install, support will not be provided if you don't do that. However you can install it however you want, but the only supported platform is **ArchLinux**. There are currently no plans to support others, so please do not ask. 

- **🚀 Installation :**

```Bash
To be released soon !
```

The script will install **Hyprland** and all required components, that way you can install it fresh or on top of **KDE Plasma** even **Gnome**. But as mentioned earlier, if you do that no support will be provided, you are on your own. We did it that way so you can use it as a *Post-Install* script. It will also prompt you as to which **AUR-Helper** you want to use for packages coming from there. It will work with either `yay` or `paru` so doesn't matter which you choose. Below is a list of what's used in this config.

**🛒 Elements Used :**

- **Terminal** ➤ Kitty
- **Editor** ➤ VSCode / Neovim
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

### 🗨️ Wrap up

The install script will backup some app settings & all system ones before applying and overriding them with new ones, you will be able to restore what you need from the backup, so please do not report that. You have been warned. In case of any issues specific to this config please find us on our [**Discord**](https://discord.gg/5sqxTSuKZu){:target="_blank"}. Best of luck !
