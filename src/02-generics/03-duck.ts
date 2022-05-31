// if it looks like a duck, it walks like a duck and it talks like a duck... it's probably a duck

class Fish {
  swim() {
    console.log('swim swim');
  }
}

class Dog {
  bark() {
    console.log('woof woof');
  }
}

type Animal = Dog | Fish;

// create a function that determines the type

// answer
export const isFish = (animal: Animal): animal is Fish => {
  return !!(animal as Fish).swim;
};

const animal: Animal = new Fish();

function initiateSignatureMove(animal: Dog | Fish) {
  // implement this function
  // answer
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.bark();
  }
}

initiateSignatureMove(animal);
