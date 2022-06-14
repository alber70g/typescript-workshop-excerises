// write the map function so the following works

const map = () => {};


// ===============================
// Don't change below these lines
// ===============================
const A: void[] = map([''], () => {});
const B: number[] = map([''], (_val, i) => i);
const C: string[][] = map([''], (_val, _i, arr) => arr);
const D: string[] = map(['string', { type: 'object' }], x => {
  if (typeof x === 'string') {
    return x;
  } else {
    return x.type;
  }
});
