import type { Observation } from "./types.ts";
import { Converter } from "./Converter.ts";
import { getAverage, getIntersection, NxN } from "./utils.ts";

const inputs: Observation[] = [
  //
];

const intersections = [...NxN(inputs.map(Converter.in))].map(getIntersection);

const output = Converter.out({
  x: getAverage(intersections.map(({ x }) => x)),
  y: getAverage(intersections.map(({ y }) => y)),
  z: getAverage(intersections.map(({ z }) => z)),
});

console.log(output);
