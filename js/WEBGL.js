let WEBGL = {
  isWebGLAvailable: function () {
    try {
      let canvas = document.createElement('canvas');
      return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
    } catch (error) {
      return false;
    }
  }
}