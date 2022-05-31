export type Add<T> = (a: T, b: T) => T;

export const add: Add<number> = (a, b) => {
  return a + b;
};

// make the generic only fit a specific string or number

// answer
// export type AddGeneric


// also make an implementation of that function
// export type Addable
// export const addAddable:

// ===============================
// Don't change below these lines
// ===============================
export const addAddable2: Add<Addable> = (a, b) => {
	//@ts-expect-error
	return a + b
}
