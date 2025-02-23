---
title: XeroLinux Toolkit
tags:
  - Linux
  - Toolkit
  - XeroLinux
  - ArchLinux
---

# <h2 align="center">🐧 Xero Post-Install Toolkit 🐧</h2>

!!! warning

    It's crucial to clarify that this toolkit isn't intended for custom Arch-Based distros. While some elements might function, I can't ensure seamless compatibility due to potential conflicts arising from differing tweaks and repositories. To ensure optimal performance.

### What it is

This toolkit aims to be an all-in-one solution for post-installation, expediting your Arch setup. It's offered as use at your own risk type of thing, without much support. You will have to rely on yourself and your own knowledge and ability to do research your setup.

![type:video](https://www.youtube.com/embed/bEFBO2QRN8E)

Toolkit recieves a lot of updates on almost a daily basis. Use above video just as a reference not an absolute lol. I keep getting ideas which I immediately implement. Due to the amount of changes I cannot keep a changelog, sorry. Too many to keep up with. **Feel free to fork it, modify what you need to make it work better for you, it's FOSS !**

### How to get it

First off let me say that everything this awesome toolkit provides is and will forever be optional and up to you the user. I will never force anything on you.

!!! tip

    Don't just run script, without inspecting it first. So before using _Curl_ command below you can examine it => [**HERE**](https://github.com/xerolinux/xlapit-cli/tree/main/xero-scripts/scripts){:target="_blank"}. It will always be provided as is without any **Warranty** of any kind. If you need support you know where to find me. Hint : "check the footer for links".

Now, once you have inspected the code, just run this simple curl command to get started :

```Bash
bash -c "$(curl -fsSL https://xerolinux.xyz/script/xapi.sh)"
```

It will prompt you before injecting as in adding the XeroLinux repository, where from it will then prompt you, should you agree, as to which AUR helper you prefer, then proceed to do so then install and launch the toolkit.. Again only if you agree..

### Acessing Toolkit

You can access toolkit by either typing `xero-cli -m` in terminal or from the application menu via the **XeroLinux Post Installation Toolkit** shortcut.. Just close terminal window once done using it lol ;)

---

<h1 align="center">.// The Wiki \\.</h1>

### System Setup

This is the initial setup part where you set the most common things up and/or install Package managers...

**- Initial Setup Section**

| option | description |
| ------ | ------ |
| Update System | Will guide you through system update via 1 of 3 methods. |
| PipeWire/Bluetooth | Missing **PipeWire/Bluetooth** Packages not offered by **ArchInstall**. |
| Activate Flathub | Enables **Flathub** which is required by the toolkit. |
| Enable multithread compilation. | Sets compilation to use all Cores/Threads for faster building. |

**- GUI Package Managers**

Although some DEs like [**Gnome**](https://apps.gnome.org/Software/){:target="_blank"} and [**KDE Plasma**](https://apps.kde.org/discover/){:target="_blank"} come with their own GUI package manager, they have some limitations. That's why I decided to include others that give us more freedom. See below...

| option | description |
| ------ | ------ |
| OctoPi | Installs [**Octopi**](https://tintaescura.com/projects/octopi/){:target="_blank"}. |
| PacSeek | Installs [**PacSeek**](https://github.com/moson-mo/pacseek){:target="_blank"} Incl. [**PacFinder**](https://github.com/stevenbenner/pacfinder){:target="_blank"}. |
| Bauh | Installs [**Bauh**](https://github.com/vinifmor/bauh){:target="_blank"}. |

### System Drivers

Well this section is dedicated to Drivers like GPU, Printer, Samba, Scanner & Game controllers. Below are more details on various options.

| option | description |
| ------ | ------ |
| GPU | Will guide you prompts to set up your GPU drivers. |
| Printer | Installs all the necessary ones that will cover most cases. Check **AUR** for others. |
| Samba | Installs a meta package I have created that covers most cases. |
| Scanner | Installs a meta package by myself for most people. Check **AUR** for others. |
| Tailscale | Installs [**Tailscale**](https://tailscale.com/){:target="_blank"} with fix for XeroLinux. |
| DeckLink & StreamDeck | Installs driver for [**Decklink**](https://aur.archlinux.org/packages/decklink){:target="_blank"}, [**DeckMaster**](https://github.com/muesli/deckmaster){:target="_blank"} or [**StreamDeckUI**](https://streamdeck-linux-gui.github.io/streamdeck-linux-gui/){:target="_blank"} (**AUR**). |
| ASUS Laptop Tools | Installs tools for ASUS & ASUS ROG Laptops to control RGB, Fans and other features they might have. Tools have been developed by the [**ASUS-Linux**](https://asus-linux.org){:target="_blank"} Team. |
| nVidia GSP Firmware Fix | Allows you to disable the GSP firmware of your nVidia card if you are having issues. Closed drivers only. |
| Arch Kernel Manager | Installs the **Arch Kernel Manager** developed by guys over at [**ArcoLinux**](https://arcolinux.info){:target="_blank"} to manage your Kernels. |

### Distrobox / Docker

This will allow you to set either one up in case you want to test one or all of the Distros offered or use containerized apps for self-hosting.

| option | description |
| ------ | ------ |
| Docker | Installs and configures [**Docker**](https://docs.docker.com){:target="_blank"}, [**Docker-Compose**](https://docs.docker.com/compose/){:target="_blank"}, [**Docker-BuildX**](https://docs.docker.com/engine/reference/commandline/buildx/){:target="_blank"} and [**LazyDocker**](https://github.com/jesseduffield/lazydocker){:target="_blank"}. Will be prompted if you want [**Podman Desktop**](https://podman-desktop.io){:target="_blank"} |
| Distrobox | Installs [**Distrobox**](https://github.com/89luca89/distrobox){:target="_blank"} with [**BoxBuddy**](https://github.com/Dvlv/BoxBuddyRS){:target="_blank"} which will allow you to deploy the offered Distro containers. |

### System Customization

That's where the fun stuff begin, yep as you might have realized by now, I love customizing my DE that's why I use **KDE Plasma**. So if you want to customize your experience that's where you do it from.

**- Shell / Prompts**

| option | description |
| ------ | ------ |
| Fastfetch | Installs [**Fastfetch**](https://github.com/fastfetch-cli/fastfetch){:target="_blank"} with Custom settings. |
| ble.sh for BASH | Installs the [**ble.sh**](https://github.com/akinomyoga/ble.sh){:target="_blank"} extending BASH. |
| OhMyPosh | Installs [**OhMyPosh**](https://xerolinux.xyz/posts/ohmyposh-p10k-replacement/){:target="_blank"} with Custom settings. |
| ZSH Al-in-One | Installs [**ZSH**](https://www.zsh.org){:target="_blank"} with [**OhMyZSH**](https://ohmyz.sh){:target="_blank"} and **OhMyPosh** and plugins. |


**- DE/WM Ricing**

| option | description |
| ------ | ------ |
| XeroLinux KDE Rices | Will let you apply my [**Layan**](https://github.com/xerolinux/xero-layan-git){:target="_blank"} KDE Rice. Theme has been ported to **Plasma 6** |

In closing, this section will be updated to include some useful customization features as time goes by..

### Game Launchers

Are you an avid gamer ? That section has you covered, allowing you to install the launcher(s) you need to get up and running in no time. Now you will have a choice of installing either the **Flathub** version officially supported by the devs or the unofficial **Native** version.

**- Game Launchers**

!!! tip

    For **Steam** it will also apply the *Fast Download Patch* which will allow you to download games using the entirety of your connection. Keep in mind that this might choke it a bit so better wait for download to be done before attempting to watch any YouTube videos lol...

| option | description |
| ------ | ------ |
| Steam           | Installs **Steam** All-in-One with [**Mangohud**](https://github.com/flightlessmango/MangoHud){:target="_blank"}, [**Goverlay**](https://github.com/benjamimgois/goverlay){:target="_blank"} & **Gamemode**. |
| Game Controller | Installs any of [**ds4drv**](https://github.com/chrippa/ds4drv){:target="_blank"} for PS4 Controller, [**dualsensectl**](https://github.com/nowrep/dualsensectl){:target="_blank"} for PS5's DualSense Controller or [**xone-dkms**](https://github.com/medusalix/xone){:target="_blank"} for the XBox-One Controller. |
| Lutris          | Installs [**Lutris**](https://lutris.net){:target="_blank"}. |
| Heroic          | Installs [**Heroic**](https://heroicgameslauncher.com){:target="_blank"}. |
| Bottles         | Installs [**Bottles**](https://usebottles.com){:target="_blank"}. |
| Protonup-qt     | Installs [**Protonup-qt**](https://davidotek.github.io/protonup-qt/){:target="_blank"}. |


</div>

### Recommended Packages

!!! warning

    The **System Tools** option will just go ahead and install everything in it. I only selected the important stuff nothing big or unnecessary from both Arch Repos and the AUR, so might take abit to install everything depending on your specs. For transparency I included the list below the table so you know what's gonna be installed on your system should you opt to install.

**- Various Extra Pkgs**

| option | description |
| ------ | ------ |
| LibreOffice | Installs [**LibreOffice**](https://libreoffice.org/){:target="_blank"} Fresh version. |
| Web Browsers | A selection of Web-Browsers. |
| Development Tools | Installs your choice of Development tools. |
| Photography & 3D | Installs your choice of Image and 3D Tools. |
| Music/Audio | Installs your choice of Audio & Video Tools. |
| Social-Media | Installs your choice of Chat clients. |
| Virtualization | Installs either [**VirtualBox**](https://www.virtualbox.org/){:target="_blank"} or [**Virt-Manager**](https://virt-manager.org/){:target="_blank"}. |
| Video & Editing | Installs any of Video tools. **OBS-Studio** includes a list of commonly used plugins. |
| System Tools | Installs a "set of packages" essential for a fully functional system. |

### Troubleshooting

Now am not gonna go over everything this section does, suffice it to say that this is a place that contains most troubleshooting options. Here's a list...
```
1.  Install & Activate Firewalld.
2.  Clear Pacman Cache (Free Space).
3.  Unlock Pacman DB (In case of DB error).
4.  Activate v4l2loopback for OBS-VirtualCam.
5.  Change Autologin Session X11/Wayland (SDDM).
6.  Disable Debug flag in MAKEPKG (Package Devs).

a.  Build Updated Arch ISO.
s.  Reset Distro back to Factory.
w.  WayDroid Installation Guide (link).
m.  Update Arch Mirrorlist, for faster download speeds.
g.  Fix Arch GnuPG Keyring in case of pkg signature issues.

```

### GPU Driver Notes

When it comes to **GPU Drivers**, toolkit covers most common setups. It should cover most cases, but there's no one solution for all, especially for **Hybrid** setups, so if you have any issues let me know...

### How to Contribute

If you can/want to Contribute your knowledge improving this toolkit taking it above and beyond, making it the defacto for every **Arch** user, please see [**Here**](https://github.com/xerolinux/xlapit-cli/wiki/User-Contribution){:target="_blank"} for more information.

### Toolkit Credits

Main menu is written in **Rust** thanks to [**OgloTheNerd**](https://github.com/Oglo12){:target="_blank"}. And some contributions were made by a friend of the project [**It-A-Me**](https://github.com/it-a-me){:target="_blank"}. Thanks to them this Toolkit wouldn't have reached this point.
