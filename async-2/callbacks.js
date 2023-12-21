// const country = [
//   { name: "india", population: "340 Million" },
//   { name: "china", population: "740 Million" },
// ];

// function getPosts() {
//   let output = "";
//   setTimeout(function () {
//     country.forEach(function (coun) {
//       output += `<li>${coun.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPosts(post, callback) {
//   setTimeout(function () {
//     country.push(post);
//     callback();
//   }, 2000);
// }
// createPosts({ name: "austrlia", population: "30 Million" }, getPosts);

//?? promises
// const bucket = [
//   { item: "jug", fluid: "water" },
//   { item: "spoon", fluid: "lemonWater" },
// ];

// function getBucket() {
//   let output = "";
//   setTimeout(function () {
//     bucket.forEach(function (buck) {
//       output += `<p>your bucket has ${buck.item} and ${buck.fluid}</p>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createBucket(item) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       bucket.push(item);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         // const element = "<h1>Error hai bhai</h1>";
//         // reject(`${(document.body.innerHTML = element)}`);
//         reject("Errror");
//       }
//     }, 2000);
//   });
// }

// createBucket({ item: "jug", fluid: "water" })
//   .then(getBucket)
//   .catch((err) => console.log(err));

//!! what does promise.all mean

// const promise1 = Promise.resolve("Hello sgar");
// const promise2 = 12;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "good bye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );
// //!! fetch will convert into json and next it will give me data so 2 then
// //?? promisde.all takes an array of promises
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

//!!! async and await
//?? we wirte fucnion labelled async
//?? await waits for async to complete
// async function init() {
//   await createBucket({ item: "jug", fluid: "water" });

//   getBucket();
// }

// init();

//?? for fetch
// async function fetchUser() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await res.json();
//   console.log(data);
// }
// fetchUser();

// async function fetchUsers() {
//   const fetched = await fetch("https://jsonplaceholder.typicode.com/users");

//   const fetchedData = await fetched.json();
//   console.log(fetchedData);
// }
// fetchUsers();

const posts = [{ title: "POST1" }];
//Do not touch this function
function create2ndPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST2" });
      resolve();
    }, 3000);
  });
}
//Do not touch this function
function create3rPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST3" });
      resolve();
    }, 2000);
  });
}

//Do not touch this function
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

//Modify the lines below and use .then and .catch smartly to get the correct output.

// create3rPost();
// deletePost();
// deletePost();
// deletePost();
