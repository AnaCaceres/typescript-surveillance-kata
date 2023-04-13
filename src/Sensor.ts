import { SensorListener } from "./SensorListener";

interface Sensor {
  subscribe(subscriber: SensorListener): void;
}

class SensorMock implements Sensor {
  private subscribers: SensorListener[] = [];

  subscribe(subscriber: SensorListener): void {
    this.subscribers.push(subscriber);
  }

  notifyEvent(event: 'START'| 'STOP'): void {
    this.subscribers.forEach((subscriber) => subscriber.onDetect(event));
  }
}

export { Sensor, SensorMock };