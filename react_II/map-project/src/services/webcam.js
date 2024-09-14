export class WebcamService {
  constructor(videoId, canvasId) {
    this.video = document.getElementById(videoId);
    this.canvas = document.getElementById(canvasId);
    this.constraints = {
      video: { width: 680, height: 480 }
    };
    this.context = this.canvas.getContext('2d');
  }

  async init() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.video.srcObject = stream;
    } catch (e) {
      console.error('Error accessing webcam: ', e);
    }
  }

  takePhoto() {
    this.context.drawImage(this.video, 0, 0, 680, 480);
  }
}

// Uso de la clase
// const simpleWebcamService = new SimpleWebcamService('video', 'canvas');
// simpleWebcamService.init();
// document.getElementById('snap').addEventListener('click', () => simpleWebcamService.takePhoto());