window.antsMonitor.init({
  silentConsole: true,
  maxBreadcrumbs: 10,
  // useImgUpload: true,
  dsn: 'http://localhost:2021/errors/upload',
  throttleDelayTime: 0,
  onRouteChange(from, to) {
    console.log('onRouteChange: _', from, to);
  },
});
