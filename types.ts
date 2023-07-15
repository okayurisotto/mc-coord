export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Observation extends Position {
  pitch: number;
  yaw: number;
}
