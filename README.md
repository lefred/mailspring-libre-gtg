## Mailspring Libre GTG Plugin

This plugin add a new task to GTG (Get Things Gnome) from a mail.

![Selection_999(256)](https://user-images.githubusercontent.com/609675/75559873-8989b200-5a44-11ea-9895-e43b04e667a4.png)

The plugin requires nodejs dbus package but build for electron. It needs to be rebuilt everytime mailspring will upgrade
electron.

```
sudo dnf install dbus-devel
export npm_config_target=4.2.2
export npm_config_arch=x64
export npm_config_target_arch=x64
export npm_config_disturl=https://electronjs.org/headers
export npm_config_runtime=electron
export npm_config_build_from_source=true
HOME=~/.electron-gyp npm install
```
