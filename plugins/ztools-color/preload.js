const {
  getColorHexRGB,
  
  darwinGetScreenPermissionGranted,
  darwinRequestScreenPermissionPopup
} = require('electron-color-picker');
const os = require("os");

const isDarwin = os.platform === 'darwin';

window.ztools.screenColorPick = async (cb) => {
  try {
    window.ztools.hideMainWindow();
    if (isDarwin) {
      const permission = await darwinGetScreenPermissionGranted();
      if (!permission) {
        return darwinRequestScreenPermissionPopup();
      }
    }
    const result = await getColorHexRGB();
    
    if (result) {
      window.ztools.copyText(result);
      cb({hex: result})
    }
  } catch (e) {
    console.log(e);
  }
}

