interface Camera {
  startRecording(): void;
  stopRecording(): void;
}

class CameraMock implements Camera {
  private startedCalled = false;
  private stopCalled = false;

  startRecording(): void {
    this.startedCalled = true;
  }

  startRecordingHaveBeenCalled(): void {
    expect(this.startedCalled).toBeTruthy();
  }

  stopRecording(): void {
    this.stopCalled = true;
  }

  stopRecordingHaveBeenCalled(): void {
    expect(this.stopCalled).toBeTruthy();
  }
}

export { Camera, CameraMock };