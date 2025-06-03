---
title: XeroLinux Toolkit
tags:
  - Linux
  - Toolkit
  - XeroLinux
  - ArchLinux
---

<h1 align="center">🐧 Xero Post-Install Toolkit 🐧</h1>

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

This is the initial setup part where you set the most common things up and/or install Package managers. Anything labeled with **Vanilla Arch** means that it's already applied/included on **XeroLinux**, so you can skip.

<p align="center">
    <img src="https://i.imgur.com/L4cwKF6.png" alt="rice">
</p>

### System Drivers

Well this section is dedicated to Drivers like GPU, Printer, Samba, Scanner & Game controllers. Below are more details on various options.

<p align="center">
    <img src="https://i.imgur.com/J8WQyXC.png" alt="rice">
</p>

### Distrobox / Docker

This will allow you to set either one up in case you want to test one or all of the Distros offered or use containerized apps for development.

<p align="center">
    <img src="https://i.imgur.com/866UqVN.png" alt="rice">
</p>

It also offers options to set up either **Docker** or **Podman** in case you want to set up a home-lab for your various Self-Hosted services. Select the one you prefer and toolkit will take care of the rest.

### System Customization

That's where the fun stuff begin, yep as you might have realized by now, I love customizing my DE that's why I use **KDE Plasma**. So if you want to customize your experience that's where you do it from.

<p align="center">
    <img src="https://i.imgur.com/7fy8Kqw.png" alt="rice">
</p>

This section mostly covers **KDE Plasma** since **Gnome** do not take too kindly to *ricing/theming*. It's out of our hands. We prefer stability any day of the week. However you are free to do whatever you want later on, it's your system...

### Game Launchers

Are you an avid gamer ? That section has you covered, allowing you to install the launcher(s) you need to get up and running in no time. This also offers some Game controller drivers as well as a GPU overclock tool should you want to go bonkers !

!!! tip

    For **Steam** it will also apply the *Fast Download Patch* which will allow you to download games using the entirety of your connection. Keep in mind that this might choke it a bit so better wait for download to be done before attempting to watch any YouTube videos lol...

<p align="center">
    <img src="https://i.imgur.com/Gx5MnlQ.png" alt="rice">
</p>

In case you dislike flatpaks, you are on your own as you will not get any support from app devs if you install as *Native* package. We, here at XeroHQ only provide recommended package formats by the devs themselves.

### Recommended Packages

!!! warning

    The **System Tools** option will just go ahead and install everything in it. I only selected the important stuff nothing big or unnecessary from both Arch Repos and the AUR, so might take abit to install everything depending on your specs. For transparency I included the list below the table so you know what's gonna be installed on your system should you opt to install.

<p align="center">
    <img src="https://i.imgur.com/7poISv1.png" alt="rice">
</p>

The provided package list here is a non-exhaustive one, you want more, either install a GUI Package manager from the toolkit or check the **AUR** or **Arch Repos**, it's just a small selection/curated list of what's available out there...

### Troubleshooting

Now am not gonna go over everything this section does, suffice it to say that this is a place that contains most troubleshooting options. Here's a list...

<p align="center">
    <img src="https://i.imgur.com/Ab9FKiV.png" alt="rice">
</p>

I hope this will help you during your **ArchLinux** / **XeroLinux** journey. Make sure to check it out. I will be adding more options as time goes by, making it as easy as possible to solve *most* of the issues you may encounter...

### GPU Driver Notes

When it comes to **GPU Drivers**, toolkit covers most common setups. It should cover most of them, but there's no one solution for all, especially for **Hybrid** setups, so if you have any issues let me know...

### How to Contribute

If you can/want to Contribute your knowledge improving this toolkit taking it above and beyond, making it the defacto for every **Arch** user, please see [**Here**](https://github.com/xerolinux/xlapit-cli/wiki/User-Contribution){:target="_blank"} for more information.

### Toolkit Credits

Main menu is written in **Rust** thanks to [**OgloTheNerd**](https://github.com/Oglo12){:target="_blank"}. And some contributions were made by a friend of the project [**It-A-Me**](https://github.com/it-a-me){:target="_blank"}. Thanks to them this Toolkit wouldn't have reached this point.
