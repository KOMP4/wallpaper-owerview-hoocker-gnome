# wallpaper-owerview-hoocker-gnome
Cringe app to make the overview in your Gnome environment change with the wallpaper and be blurred. 99,99% AI wor.

The extension automatically generates a blurred version of your current wallpaper and replaces the Overview background with it.
It reacts only when the wallpaper changes — no background loops, no systemd services, no extra packages (except `ffmpeg`).

---
## Installation & Setup Guide
### Requirements

- GNOME Shell **45+**
- `ffmpeg` installed
- A custom GNOME Shell theme located at:
```
~/.themes/<your_theme>/gnome-shell/
```

### Installation

*1. Copy the extension into GNOME Shell’s extension directory*
```bash
mkdir -p ~/.local/share/gnome-shell/extensions/wallpaper-hook@shishka
cp -r * ~/.local/share/gnome-shell/extensions/wallpaper-hook@shishka
```
### Theme Configuration (Required)

GNOME Shell uses a file named `overview-wallpaper.png` as the Overview background.
The extension updates this file automatically, but your theme must reference it.
1. Create the placeholder file
```Bash
touch ~/.themes/<your_theme>/gnome-shell/overview-wallpaper.png
```
2. Edit your theme’s gnome-shell.css
Open: `~/.themes/<your_theme>/gnome-shell/gnome-shell.css` . Find the CSS block `#overview`
Add the following inside it:
```css
background-image: url("overview-wallpaper.png");
background-size: cover;
background-position: center;
```
### Restart
restart gnome shell and enable the Extension
```bash
gnome-extensions enable wallpaper-hook@shishka
```
