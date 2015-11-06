export default {
  start(fps = 50, callback) {
    const intervalId = window.setInterval(callback, 1000 / fps);

    return {
      stop() {
        window.clearInterval(intervalId);
      }
    };
  }
}
