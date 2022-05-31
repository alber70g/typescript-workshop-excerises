// fix the following types

// answer
type ParamA = undefined;
type ParamB = undefined;

// ===============================
// Don't change below these lines
// ===============================
function SomeFunction(a: ParamA) {
  return a.a.b.c.d.e;
}

function AnotherFunction(b: ParamB) {
  //@ts-expect-error
  return b.a.b.c.d.e;
}
