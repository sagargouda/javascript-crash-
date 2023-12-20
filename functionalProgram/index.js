//!!! y is higher order fucntion and x is callback fucntion
// function x() {
//   console.log("hey sagar");
// }

// function y(x) {
//   x();
// }

const radius = [3, 1, 2, 4];
//!! this is bad in interview(code is fine)
// const area = [];
// radius.forEach(function (element) {
//   area.push(element * element * 3.14);
// });
// console.log(area);

//!! why that is bad is what if interview ask to calculate circumference of circle it becomes headache again and bad practice

//?? good way for writing botyh area and circumferenve is (2 pi r and pi r square)

const logic = function (element) {
  return element * element * 3.14;
};

Array.prototype.solution = function (statement) {
  const area = [];
  statement.forEach(function (element) {
    area.push(logic(element));
  });
  return area;
};
// console.log(solution(radius));
console.log(radius.map(logic));
//?? as oops abstraction here we are doing it
//?? even map is doing that similar thing , it is almost similar now let's try to make our solution fucntion similar to map
// console.log(radius.map(solution));
//?? we can't do that above we need to do
console.log(radius.solution(radius));
