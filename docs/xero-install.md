---
title: XeroLinux Installer Script
tags:
  - Linux
  - Boot
  - Script
  - XeroInstall
---

<h1 align="center">🎨 XeroLinux Installer Script 🎨</h1>
<h2 align="center">Project is currently in Beta Stages. Testers Needed !</h2>

!!! info

    This script was created for a fresh install. Will format full disk, no manual partioning is offered yet. Also it's to be used only if you know what you are doing, no help/support will be provided. **USE AT YOUR OWN RISK !** Both scripts are open source and available on GitHub : [**Here**](https://github.com/xerolinux/XeroInstall){:target="_blank"}

Transform your base Arch Linux installation into a fully-featured **XeroLinux KDE Plasma** desktop with a single command. This script handles everything from package installation to system configuration, giving you a personalized and polished desktop experience.

No compromises. No missing features. Just pure **XeroLinux** goodness. 🤓

<center>
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/8g72HUrKcWc"
    allowfullscreen>
  </iframe>
</center>

### Overview

Can't donate for the ISO? No problem. **XeroLinux Installer** gives you the complete XeroLinux experience through two simple scripts — transforming vanilla Arch Linux into a fully-configured, beautifully-themed KDE Plasma desktop that's identical to our official ISO.

---

## Why This Exists

XeroLinux has always been about making Arch Linux accessible and beautiful. While our ISO provides the easiest path, we believe everyone deserves access to a polished Linux experience — regardless of their ability to donate.

This project is our way of giving back to the community that made XeroLinux possible.

**Two scripts. One command. Full XeroLinux experience.**

---

## What You Get

Here's what will be included if you opt to use this script Vs. ISO :

<style>
.table-full { width: 100%; table-layout: fixed; }
</style>

<table class="table-full">
  <thead>
    <tr><th>Aspect</th><th>Scripts</th><th>ISO</th></tr>
  </thead>
  <tbody>
    <tr><td>End Result</td><td>Identical</td><td>Identical</td></tr>
    <tr><td>Installation Method</td><td>Terminal-guided</td><td>GUI (Calamares)</td></tr>
    <tr><td>BTRFS+Compression</td><td>✅</td><td>❌</td></tr>
    <tr><td>Encryption</td><td>✅</td><td>❌</td></tr>
    <tr><td>Download Size</td><td>~2 KB</td><td>~3 GB</td></tr>
    <tr><td>Requires Donation</td><td>❌</td><td>✅</td></tr>
    <tr><td>Learning Experience</td><td>Higher</td><td>Lower</td></tr>
  </tbody>
</table>


---

### Installation URL

Boot from *latest* [**ArchLinux LIVE ISO**](https://archlinux.org/download/){:target="_blank"} and run:
```bash
bash -c "$(curl -fsSL https://urls.xerolinux.xyz/xeroinstall)"
```

That's it. The script guides you through everything else.

---

## Walkthrough

### Phase 1: Base System

The installer walks you through:

1. **Keyboard Layout** — Select your preferred layout
2. **Disk Selection** — Choose installation target
3. **Encryption** — Optional LUKS full-disk encryption
4. **Filesystem** — BTRFS, EXT4, or XFS
5. **Username & Password** — Create your account
6. **GPU Drivers** — Automatic or manual selection

### Phase 2: Desktop & Software

After rebooting into your new system:

1. **AUR Helper** — paru (default) or yay
2. **Web Browser** — Floorp, Firefox, Brave, LibreWolf, and more
3. **VPN Client** — ExpressVPN, Mozilla VPN, Proton VPN
4. **Communication** — Discord, Telegram, Element, and more
5. **Office Suite** — LibreOffice with 30+ language options
6. **Development** — VSCodium, Hugo, Meld, GitHub Desktop
7. **Creative Apps** — GIMP, Krita, Inkscape, Blender
8. **Media Tools** — Kdenlive, Spotify, MPV, and more
9. **Virtualization** — QEMU/KVM with virt-manager

Skip anything you don't need. Install only what you want.

<h1 align="center">.// Screenshots \\.</h1>

<p align="center">
  <a href="../images/Partition.png" target="_blank" rel="noopener">
    <img src="../images/Partition.png" width="45%">
  </a>
  <a href="../images/Encrypt.png" target="_blank" rel="noopener">
    <img src="../images/Encrypt.png" width="45%">
  </a>
</p>

---

## Frequently Asked Questions

### Is this really free?

**Yes.** These scripts are completely free and open source. No donations required, no paywalls, no restrictions.

### Is it the same as the ISO?

**Yes.** You get the exact same packages, themes, and configurations. The only difference is the installation method.

### Why would I use this

Several reasons:

- You can't or prefer not to donate
- You want a smaller download (scripts vs. 3GB ISO)
- You want to learn more about Arch installation
- You have a slow internet connection
- You want more control over the process

### Why would I use the ISO

- Faster installation with GUI
- Offline installation capability
- Less technical knowledge required
- Support the project financially

### Can I use this in a VM?

**Yes.** The scripts detect virtual environments and install appropriate guest tools (QEMU, VirtualBox, VMware).

---

## Support the Project

Using these free scripts? Consider supporting XeroLinux:

- ⭐ **Star the repos** on GitHub
- 📣 **Spread the word** — Tell others about XeroLinux
- 🐛 **Report bugs** — Help us improve
- 💝 **Donate** — If you can, grab the ISO and support development

---

## Join the Community

- 🌐 **Website** — [xerolinux.xyz](https://xerolinux.xyz){:target="_blank"}
- 💬 **Discord** — [Join our server](https://discord.xerolinux.xyz){:target="_blank"}
- 🐘 **Mastodon** — [@xerolinux](https://fosstodon.org/@xerolinux){:target="_blank"}

---

## Version History

- **v1.5** - Boot partition & cleanup
  - Increased boot partition size from 512M to 2048M
  - Simplified internet connectivity check
  - Removed VPN, Blender, and Extras sections from package selection
  - Further trimmed package list to 37 curated options

- **v1.4** - Unified package selection
  - Condensed 12 separate prompts into a single categorized selection screen
  - Added pass to password managers, moved LibreOffice to its own Office section
  - Trimmed package list for a leaner default offering

- **v1.3** - LUKS2 & encryption scope
  - Upgraded to LUKS2 with systemd `sd-encrypt` hook
  - Added encryption scope choice: root only or root + boot
  - Fixed skel config copy reliability for user home
  - Updated display and version strings

- **v1.0** - Initial release
  - BTRFS with subvolumes
  - LUKS encryption support
  - Graphics driver selection
  - ZRAM swap support

---  
  
## License

Both scripts are released under the **GPL-3.0 License**. Use them, modify them, share them — just keep them open source.

---

### Wrapping up

At the end of the day, this is about giving people options. If you enjoy learning, like knowing what’s happening under the hood, and want full control over your system, this installer is for you. It takes a bit more attention than a one click setup, but that’s also where the fun is.

This project is still evolving, and like everything in the Arch world, it’s a journey rather than a finished product. Feedback, testing, and constructive ideas are always welcome. If it helps you get a clean, solid XeroLinux system up and running, then it’s already doing its job.

*XeroLinux — Arch Linux, made beautiful.* 🤓
