const factory = () => {
  return (a, b) => a + b;
};

const sum1 = factory(); // first rerender
const sum2 = factory(); // 2nd rerender

sum1(1, 2); // => 3
sum2(1, 2); // => 3

// sum1 === sum2; // => false
// sum1 === sum1; // => true
