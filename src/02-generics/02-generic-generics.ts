export type Add<T> = (a: T, b: T) => T;

export const add: Add<number> = (a, b) => {
  return a + b;
};

// make the generic only fit a specific string or number

// answer
export type AddGeneric<T extends string | number> = (a: T, b: T) => T;


// also make an implementation of that function
export type Addable = string | number;
export const addAddable: Add<Addable extends string ? string : number> = (a, b) => {
  return a + b;
};

export const addAddable2: Add<Addable> = (a, b) => {
	//@ts-expect-error
	return a + b
}
