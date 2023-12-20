## Lifecycle scripts included in gnostr-webview@1.0.0:
start:
	npm run readme && npm exec electron .

## available via `npm run-script`:
readme:
	pandoc README.md > readme.html
package-mac-universal:
	npx electron-packager . --overwrite --platform=darwin --arch=universal  --icon=assets/icons/mac/icon.icns --prune=false --out=dist/darwin/universal
package-mac-x64:
	npx electron-packager . --overwrite --platform=darwin --arch=x64        --icon=assets/icons/mac/icon.icns --prune=false --out=dist/darwin/x64
package-mac-arm64:
	npx electron-packager . --overwrite --platform=darwin --arch=arm64      --icon=assets/icons/mac/icon.icns --prune=false --out=dist/darwin/arm64
package-mac:
	npx electron-packager . --overwrite --platform=darwin                   --icon=assets/icons/mac/icon.icns --prune=false --out=dist/darwin
package-win:
	npx electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=false --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Electron Webview"
package-linux:
	npx electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=false --out=release-builds
create-installer-mac:
	npx electron-installer-dmg  dist/darwin/x64/gnostr-webview-darwin-x64/gnostr-webview.app gnostr-webview --out=release-builds --overwrite --icon=assets/icons/mac/icon.icns

