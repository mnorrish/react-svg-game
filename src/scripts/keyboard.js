const keysDown = [];

window.addEventListener('keydown', (e) => {
  keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', (e) => {
  keysDown[e.keyCode] = false;
}, false);

export default {
  keysDown,
  hasKeyDown(keyCode) {
    return keysDown[keyCode] && true;
  }
}
