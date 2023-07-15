import type { Observation, Position } from "./types.ts";

export function* withIndex<T>(
  items: Iterable<T>
): Generator<{ value: T; index: number }> {
  let index = 0;
  for (const value of items) {
    yield { value, index };
    index++;
  }
}

export function* NxN<T>(items: Iterable<T>): Generator<[T, T]> {
  for (const { value: a, index: i } of withIndex(items)) {
    for (const { value: b, index: j } of withIndex(items)) {
      if (i === j) continue;
      yield [a, b];
    }
  }
}

export const getSum = (items: number[]): number => {
  return items.reduce((acc, cur) => acc + cur, 0);
};

export const getAverage = (items: number[]): number => {
  return getSum(items) / items.length;
};

export const getIntersection = ([a, b]: Observation[]): Position => {
  const deltaX = (b.pitch * (a.x - b.x) + (-a.y + b.y)) / (a.pitch - b.pitch);
  const x = a.x + deltaX;
  const deltaY = a.pitch * deltaX;
  const y = a.y + deltaY;
  const deltaZ = a.yaw * Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const z = a.z + deltaZ;

  return { x, y, z };
};
