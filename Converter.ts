import { Observation, Position } from "./types.ts";

/**
 * Minecraftの座標を扱いやすいように変換する
 */
export class Converter {
  static in(p: Observation): Observation {
    return {
      x: p.z,
      y: p.x,
      z: p.y,
      pitch: Math.tan((-p.pitch / 180) * Math.PI),
      yaw: Math.tan((-p.yaw / 180) * Math.PI),
    };
  }

  static out(p: Position): Position {
    return {
      x: p.y,
      y: p.z,
      z: p.x,
    };
  }
}
