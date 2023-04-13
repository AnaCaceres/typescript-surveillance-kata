interface SensorListener {
  onDetect(event: 'START' | 'STOP'): void;
}

export { SensorListener };