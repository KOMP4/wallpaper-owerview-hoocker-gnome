const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const ExtensionUtils = imports.misc.extensionUtils;

let settings;
let signal1, signal2;

function blurWallpaper() {
    const HOME = GLib.get_home_dir();
    const wall = HOME + "/.config/background";
    const target = HOME + "/.themes/Everforest-B-MB-Dark-Medium/gnome-shell/overview-wallpaper.png";

    // Команда ffmpeg
    const cmd = [
        "ffmpeg",
        "-y",
        "-i", wall,
        "-vf", "gblur=sigma=20",
        target
    ];

    try {
        GLib.spawn_async(
            null,          // рабочая директория
            cmd,           // команда
            null,          // переменные окружения
            GLib.SpawnFlags.SEARCH_PATH,
            null           // callback
        );
    } catch (e) {
        log("Wallpaper Hook: ffmpeg error: " + e);
    }
}

function enable() {
    settings = new Gio.Settings({ schema: 'org.gnome.desktop.background' });

    signal1 = settings.connect('changed::picture-uri', () => blurWallpaper());
    signal2 = settings.connect('changed::picture-uri-dark', () => blurWallpaper());
}

function disable() {
    if (settings) {
        if (signal1) settings.disconnect(signal1);
        if (signal2) settings.disconnect(signal2);
    }
}
