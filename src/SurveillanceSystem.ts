import { Camera } from "./Camera";
import { Sensor } from "./Sensor";
import { SensorListener } from "./SensorListener";

class SurveillanceSystem implements SensorListener {
  constructor(private sensor: Sensor, private camera: Camera) {
    sensor.subscribe(this);
  }

  onDetect(event: 'START'| 'STOP') {
    if (event === 'START') {
      this.startRecording();
    } else {
      this.stopRecording();
    }
  }

  startRecording() {
    this.camera.startRecording();
  }

  stopRecording() {
    this.camera.stopRecording();
  }
}

export { SurveillanceSystem };