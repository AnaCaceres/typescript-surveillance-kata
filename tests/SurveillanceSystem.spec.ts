import { SensorMock } from "../src/Sensor";
import { Camera, CameraMock } from "../src/Camera";
import { SurveillanceSystem } from "../src/SurveillanceSystem";

describe("Surveillance System", () => {
  it("should start recording when sensor detects motion", () => {
    const sensor = new SensorMock();
    const camera = new CameraMock();
    const surveillanceSystem = new SurveillanceSystem(sensor, camera);

    sensor.notifyEvent('START');

    camera.startRecordingHaveBeenCalled();
  });
  it("should stop recording when sensor stop detecting motion", () => {
    const sensor = new SensorMock();
    const camera = new CameraMock();
    const surveillanceSystem = new SurveillanceSystem(sensor, camera);

    sensor.notifyEvent('STOP');

    camera.stopRecordingHaveBeenCalled();
  });
  it("should start recording when sensor detects motion (JestMock)", () => {
    const camera: Camera = {
      startRecording: jest.fn(),
      stopRecording: jest.fn()
    };
    const sensor = new SensorMock();
    const surveillanceSystem = new SurveillanceSystem(sensor, camera);

    sensor.notifyEvent('START');

    expect(camera.startRecording).toHaveBeenCalled();
  });
  it("should stop recording when sensor stop detecting motion (JestMock)", () => {
    const camera: Camera = {
      startRecording: jest.fn(),
      stopRecording: jest.fn()
    };
    const sensor = new SensorMock();
    const surveillanceSystem = new SurveillanceSystem(sensor, camera);

    sensor.notifyEvent('STOP');

    expect(camera.stopRecording).toHaveBeenCalled();
  });
});
