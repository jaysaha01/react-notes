
// ===================================================================================================================

//>Check if the Strings are an Anagram

function checkAnagram(s, t) {
        let Obj1 = {};
        let Obj2 = {};
        
        if (str1.length !== str2.length) {
          return false;
        }  

        for(let i=0; i<s.length; i++){
          obj1[s[i]] = (Obj1[s[i]] || 0) + 1;
          obj2[t[i]] = (Obj1[t[i]] || 0) + 1;
        }

        for (const key in Obj1) {
         if(Obj1[key] !== Obj2[key]) return false
        }
  
        return true
      }

      console.warn(checkAnagram("anil", "nila"));








// Delete Element in Array
 function removeEl() {
        let data = [30, 20, 45, 76, 20, 80];
        let position = document.getElementById("position").value;
        position = parseInt(position);
        for (let i = position; i < data.length - 1; i++) {
          data[i] = data[i + 1];
        }
        data.length = data.length - 1;
        console.warn(data);
  }



//Insert Element in Array
function insertEl() {
        let data = [60, 30, 10, 67, 40];
        let newEl = document.getElementById('newEl').value;
        newEl = parseInt(newEl)
        let position = document.getElementById('position').value
        console.warn(data);

        for (let i = data.length - 1; i >= 0; i--) {
          // console.warn(data[i])
          if (i >= position) {
            data[i + 1] = data[i];
            if (i == position) {
              data[i] = newEl;
            }
          }
        }
        console.warn(data)
      }



// Merge Two in Array
let data = [3, 7, 12, 34, 56, 90];
let data2 = [20, 30, 40, 50]
let data3 = [];
for (i = 0; i < data.length; i++) {
  data3[i] = data[i];
}
for (i = 0; i < data2.length; i++) {
  data3[data.length + i] = data2[i];
}
console.warn(data3);



// Search Element in Array
function searchElement() {
  let data = [20, 40, 60, 5, 10, 70, 80, 99];
  let item = document.getElementById('searchEl').value;
  let index = undefined;
  for (i = 0; i <= data.length - 1; i++) {
    // console.warn(data[i])
    if (data[i] === parseInt(item)) {
      index = i;
      break;
    }
  }
  console.warn(index);
}


// Sort Element in Array
let data = [34, 3, 1, 25, 54, 12, 89, 5, 76, 789];

for (i = 0; i < data.length; i++) {

  for (j = 0; j < data.length; j++) {
    console.warn(data)

    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}


// Array Traversing
let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];

function getElement() {
  let el = document.getElementById("element").value;
  if (el < data.length && typeof parseInt(el) === "number") {
    alert(data[el]);
  } else {
    alert("Please enter valid input");
  }
}


// Binary Search with Iterative approach
let data = [5, 9, 13, 17, 45, 67, 89, 100];
let find = 89;
let start = 0;
let end = data.length - 1;
let position = undefined;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  // console.warn(data[mid]);
  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.warn(position)


// Bubble Sort With Recursion
let arr = [64, 34, 25, 12];

function recursiveBubbleSort(data, count) {
  if (count == 1) {
    return;
  }
  let currentEl = 0;

  for (let i = 0; i < count - 1; i++) {
    if (data[i] > data[i + 1]) {
      let temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
      currentEl++;
    }
  }
  recursiveBubbleSort(data, count - 1)
}

recursiveBubbleSort(arr, arr.length);
console.warn(arr)



// Descending Order with Selection Sorting
let items = [20, 12, 53, 3, 56, 78, 0, 5, 89, 34];
function selectionSort(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] > data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

selectionSort(items);
console.warn(items)


//Graph
let data = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 0],
  [0, 1, 0, 0,],
]
console.warn(data)


// Graph Adjacency List
let adjList = {
  'a': ['b', 'c'],
  'b': ['a', 'c', 'd'],
  'c': ['a', 'b'],
  'd': ['b'],
}

console.warn(adjList)


// Head and Tail Recursion
function test(x) {
  console.warn(x)
  if (x > 0) {
    test(x - 1)
  }
  console.warn(x)
}


let data = 5
test(data)


// Insertion Sort in JavaScript
let arr = [12, 11, 13, 5, 6];
function insertionSort(data) {
  let i, current, j;
  for (i = 1; i < data.length; i++) {
    current = data[i];
    j = i - 1;
    while (j >= 0 && data[j] > current) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = current
  }
}

insertionSort(arr);
console.warn(arr)



//Linked List in JavaScript
class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      // console.warn(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      console.warn(lead);
    }
  }
  searchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      // console.warn(lead)
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
    console.warn(result)
  }

}

let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.appendNode(700);
list.traversing();
list.deleteNode(1);
list.searchNode(900)

// console.warn(list);







// Maximum occurring character in string
let str = "hello peter ooo";
let strObj = {};
let maxKey = '';
for (let i = 0; i < str.length; i++) {
  // console.warn(str[i])
  let key = str[i];
  if (!strObj[key]) {
    strObj[key] = 0;
  };
  strObj[key]++;
  if (maxKey == '' || strObj[key] > strObj[maxKey]) {
    maxKey = key;
  }
}
console.warn(maxKey)
console.warn(strObj)


//merge_sort
function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r) {
  console.warn(r)
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  // console.warn(m)
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);

}

var arr = [12, 11, 13, 5, 6, 7];
var arr_size = arr.length;

mergeSort(arr, 0, arr_size - 1);
console.warn(arr)


//Check String is palindrome or not
function palindrome(data) {
  let start = 0;
  let end = data.length - 1;
  let result = true;
  while (end > start) {
    if (data[start] != data[end]) {
      result = false;
    }
    start++;
    end--;
  }
  return result;
}

let str = "level";
console.warn(palindrome(str))


//Queue in JavaScript

let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    alert("Queue is already full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function display() {
  console.warn(queue);
}
function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert("queue is already empty");
  }
}

enqueue(10);
enqueue(20);
enqueue(30);

display();


//Circular Queue in Javascript
class Queue {
  constructor(size) {
    this.max = size;
    this.items = new Array(size);
    this.currentSize = 0;
    this.rear = -1;
    this.front = -1;
  }
  enqueue(val) {
    if (this.currentSize != this.max) {
      if (this.rear == this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.items[this.rear] = val;
      this.currentSize++;
      if ((this.front == -1)) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.currentSize != 0) {
      this.items[this.front] = null;
      if (this.front == this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;

    } else {
      this.front = -1;
      this.rear = -1;
      alert("queue is empty")
    }
  }
}

let queue = new Queue(5);


//Queue in JavaScript
let queue = [];
let currentSize = queue.length;
let maxSize = 5;

// function enqueue(newVal) {
//   if (currentSize >= maxSize) {
//     alert("Queue is already full");
//   } else {
//     queue[currentSize] = newVal;
//     currentSize++;
//   }
// }

function enqueueWithBtn() {
  let newVal = document.getElementById("qEl").value;
  if (currentSize >= maxSize) {
    alert("Queue is already full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function display() {
  console.warn(queue);
}
function dequeue() {
  if (!isEmpty()) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert("queue is already empty");
  }
}
function front() {
  if (!isEmpty()) {
    console.warn(queue[0]);
  } else {
    alert("queue is already empty");
  }
}

function rear() {
  if (!isEmpty()) {
    console.warn(queue[currentSize - 1]);
  } else {
    alert("queue is already empty");
  }
}
function isEmpty() {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
}

// enqueue(10);
// enqueue(20);
// enqueue(30);

// front();
// rear();

// display();


// Recursion
function factorial(item) {
  if (item == 0) {
    return 1
  }
  return item * factorial(item - 1)

}
let data = 5
console.warn(factorial(data))


// Recursion Array with Reverse
let data = [5, 12, 65, 89, 0, 100, 200];
let temp;
function customReverse(data, start, end) {
  console.warn(data)
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);


// Recursive Binary Search in JavaScript
let data = [10, 15, 18, 34, 67, 70, 89];
let start = 0;
let end = data.length - 1;
let find = 15;
let position = undefined;
function recursiveBinary(data, start, end) {
  mid = Math.floor((start + end) / 2);
  if (data[mid] === find) {
    position = mid;
    return true;
  } else if (data[mid] < find) {
    recursiveBinary(data, mid + 1, end);
  } else {
    recursiveBinary(data, start, mid - 1);
  }
}

recursiveBinary(data, start, end);
console.warn(position);



// Selection Sort with JavaScript
let items = [20, 12, 53, 3, 56, 78, 0, 5, 89, 34];
function selectionSort(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

selectionSort(items);
console.warn(items)



// Set DSA with JavaScript
let data = new Set(["anil", "peter", "anil"]);
data.add({ "email": "test@test.com" })
console.warn(data.has("peter1"))
data.delete('anil');
console.warn(data);
for (x of data) {
  console.warn(x)
}

data.forEach((val) => {
  console.warn(val)
})
console.warn(data.entries())



// Stack in JavaScript
let data = [];
let currentSize = data.length;
let max = 5;
function push(newVal) {
  if (currentSize >= max) {
    alert("Stack is full you can not add" + newVal);
  }
  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(20);
push(30);
push(10);
push(2);
pop();
pop();
pop();
push(25);
push(23);
push(67);
// pop()
// pop()



// Reverse String with Stack in JavaScript
let data = [];
let currentSize = data.length;
function push(newVal) {
  data[currentSize] = newVal;
  currentSize += 1;
}
function pop() {
  lastRemovedItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i])
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }

}


let str = "anil";
str = str.split("");
reverseStr(str)
console.warn(str.join(""))


//  Stack with class in JavaScript
class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }
  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      alert("stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      alert("stack is already empty")
    }
  }
  display() {
    console.warn(this.item)
  }
}
st1 = new Stack(5);
//   st1.push(20)
//   st1.display();



// Stack in JavaScript
let data = [];
let currentSize = data.length;
let max = 5;
function push() {
  let newVal = document.getElementById('newEl').value;
  if (currentSize >= max) {
    alert("Stack is full you can not add" + newVal);
  } else {
    data[currentSize] = newVal;
    currentSize += 1;
    document.getElementById('newEl').value = "";
    console.warn("element added")
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}
function display() {
  for (let i = 0; i <= currentSize - 1; i++) {
    console.warn("el. no", i, "and value is ", data[i])
  }
}




// ==========================================================================================================================================================

// 🧩 Step 1: What is an Array?

// ✅ 1. Find the Maximum and Minimum in an Array
const numbers = [10, 45, 6, 99, 21];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}

console.log("Max:", max); // 99
console.log("Min:", min); // 6

// ✅ 2. Count Frequency of Elements
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

const freq = {};

for (let fruit of fruits) {
  if (freq[fruit]) {
    freq[fruit]++;
  } else {
    freq[fruit] = 1;
  }
}

console.log(freq);
// Output: { apple: 3, banana: 2, mango: 1 }

// ✅ 3. Remove Duplicates from Array
const nums = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(nums)];

console.log(unique); // [1, 2, 3, 4, 5]

// Or using loop:
let result = [];
for (let i = 0; i < nums.length; i++) {
  if (!result.includes(nums[i])) {
    result.push(nums[i]);
  }
}
console.log(result);

// ✅ 4. Reverse an Array
const arr = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed); // [5, 4, 3, 2, 1]


// ✅ 6. Sum of All Even Numbers
const nums = [1, 2, 3, 4, 5, 6];
let sum = 0;

nums.forEach((num) => {
  if (num % 2 === 0) {
    sum += num;
  }
});

console.log(sum); // 12


// ✅ 8. Check if Two Arrays are Equal
const a = [1, 2, 3];
const b = [1, 2, 3];
let status = "not finded";

a.forEach((elm1, i) => {
  b.forEach((elm2, i) => {
    if (elm1 === elm2) {
      status = "same";
    } else {
      status = "Not Same";
    }
  });
});
console.log(status);


// ✅ 10. Find Missing Number (1 to N)🥨
const arr = [1, 2, 3, 5];
const n = 5;

const expectedSum = (n * (n + 1)) / 2;
const actualSum = arr.reduce((a, b) => a + b, 0);

const missing = expectedSum - actualSum;
console.log("Missing number:", missing); // 4

// ✅ 1. Group Items by Property (Real-world eCommerce example)🌟

const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
];

const grouped = {};

for (let item of products) {
  const key = item.category;
  if (!grouped[key]) {
    grouped[key] = [];
  }
  grouped[key].push(item.name);
}

console.log(grouped);
/*
  {
    Electronics: ["Laptop", "Phone"],
    Clothing: ["Shirt", "Jeans"]
  }
  */

//   ✅ 2. Chunk an Array into Smaller Arrays. Split an array into multiple parts of fixed size. 🥨

const arr = [1, 2, 3, 4, 5, 6, 7];
const chunkSize = 3;
const result = [];

for (let i = 0; i < arr.length; i += chunkSize) {
  result.push(arr.slice(i, i + chunkSize));
}

console.log(result);
// [[1, 2, 3], [4, 5, 6], [7]]


// ✅ 3. Find All Pairs That Sum to a Target
const arr = [1, 3, 2, 4, 6, 5];
const target = 7;
const pairs = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      pairs.push([arr[i], arr[j]]);
    }
  }
}

console.log(pairs);
// [[1,6],[3,4],[2,5]]

// ✅ 4. Convert Array to Object with Keys
const users = [
  { id: 1, name: "Ranajay" },
  { id: 2, name: "Sourav" },
];

const userMap = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(userMap);
// {1: "Ranajay", 2: "Sourav"}



//   ✅ 6. Sort Array of Objects by Name (Alphabetically)
const people = [{ name: "Zoya" }, { name: "Arjun" }, { name: "Ranajay" }];

people.sort((a, b) => a.name.localeCompare(b.name)); //localeCompare দুইটা string compare করে।

/*
Compare	রিটার্ন	ব্যাখ্যা
"a".localeCompare("b")	Negative	"a" আগে আসে "b" থেকে
"b".localeCompare("a")	Positive	"b" পরে আসে "a" থেকে
"a".localeCompare("a")	0	দুইটা একি শব্দ
*/

console.log(people);
// [{name: "Arjun"}, {name: "Ranajay"}, {name: "Zoya"}]



// ✅ 8. Find Duplicates in an Array 🥨
const nums = [1, 2, 3, 2, 4, 1, 5];
const duplicates = [];

for (let i = 0; i < nums.length; i++) {
  if (nums.indexOf(nums[i]) !== i && !duplicates.includes(nums[i])) {
    duplicates.push(nums[i]);
  }
}

console.log(duplicates); // [2, 1]


// ✅ 9. Rearrange Array So All Zeros Come Last
const arr = [0, 1, 0, 3, 12];

const zeros = arr.filter((x) => x === 0);
const nonZeros = arr.filter((x) => x !== 0);

const final = [...nonZeros, ...zeros];
console.log(final); // [1, 3, 12, 0, 0]

// ✅ 10. Check If Array is Palindrome
const arr = [1, 2, 3, 2, 1];

const isPalindrome = arr.join("") === arr.slice().reverse().join("");
console.log(isPalindrome); // true

// 🔥 1. Flatten Deeply Nested Arrays (Recursive Approach)
const nested = [1, [2, [3, [4, 5]], 6], 7];

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // recursion
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten(nested));
// [1, 2, 3, 4, 5, 6, 7]

// 🔥 2. Rotate Array k Times to the Right
const rotateRight = (arr, k) => {
  const n = arr.length;
  k = k % n;
  return arr.slice(-k).concat(arr.slice(0, n - k));
};

console.log(rotateRight([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]

//   🔥 3. Find Longest Consecutive Sequence
const nums = [100, 4, 200, 1, 3, 2];

function longestSequence(arr) {
  const set = new Set(arr);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

console.log(longestSequence(nums));
// Output: 4  (sequence: 1, 2, 3, 4)

// 🔥 4. Find the First Non-Repeating Element
const arr = [9, 4, 9, 6, 7, 4];

function firstNonRepeating(arr) {
  const count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num of arr) {
    if (count[num] === 1) return num;
  }

  return null;
}

console.log(firstNonRepeating(arr));
// Output: 6

// 🔥 5. Merge Two Sorted Arrays Without Using sort()
const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];

function mergeSorted(a, b) {
  let i = 0,
    j = 0;
  const result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  return result.concat(a.slice(i)).concat(b.slice(j));
}

console.log(mergeSorted(a, b));
// [1, 2, 3, 4, 5, 6, 7, 8]

// 🔥 6. Find Triplets that Sum to Zero
const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(arr) {
  const res = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]]);
        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

console.log(threeSum(nums));
// [[-1, -1, 2], [-1, 0, 1]]


//   🔥 1. Find the Maximum Product Subarray
function maxProduct(nums) {
  let max = nums[0];
  let minProd = nums[0];
  let maxProd = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) [maxProd, minProd] = [minProd, maxProd]; // swap if negative

    maxProd = Math.max(num, num * maxProd);
    minProd = Math.min(num, num * minProd);

    max = Math.max(max, maxProd);
  }

  return max;
}

console.log(maxProduct([2, 3, -2, 4])); // Output: 6


//   🔥 2. Maximum Sum Subarray of Size k (Sliding Window)
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9

//   🔥 3. Dutch National Flag Algorithm (3-way Partitioning)
function sortColors(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
// Output: [0, 0, 1, 1, 2, 2]

//   🔥 4. Array of Products Except Self (No Division)
function productExceptSelf(arr) {
  const result = Array(arr.length).fill(1);
  let left = 1,
    right = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] *= left;
    left *= arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= arr[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// Output: [24, 12, 8, 6]

//   🔥 5. Find All Duplicates in an Array (Without Extra Space)
function findDuplicates(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(index + 1);
    }
    nums[index] = -nums[index];
  }

  return result;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
// Output: [2, 3]

//   🔥 6. Find Subarrays With Sum = K (Prefix Sum + HashMap)
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1); // prefix sum 0 exists once
  let count = 0,
    sum = 0;

  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // Output: 2

//   🔥 7. Spiral Fill of Empty 2D Matrix
function generateMatrix(n) {
  let res = Array.from({ length: n }, () => Array(n).fill(0));
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;
  let num = 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) res[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) res[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) res[i][left] = num++;
    left++;
  }

  return res;
}

console.log(generateMatrix(3));
/*
  [
   [1, 2, 3],
   [8, 9, 4],
   [7, 6, 5]
  ]
  */

//   🔥 8. Kth Largest Element using Min-Heap (with Priority Queue logic)

function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a); // big to small
  return nums[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// Output: 5

// ========================================================================================================

// String

// 🔹 1. Reverse a String (User Input Feature)
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

//   🔹 2. Check for Palindrome (Login Username Validation)
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true



//  🔹 4. First Non-Repeating Character
function firstUniqueChar(str) {
  const map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) return str[i];
  }

  return null;
}

console.log(firstUniqueChar("swiss")); // w

//   🔹 5. Anagram Checker (Search Matching / Game Match)
function isAnagram(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true

//   🔹 6. Capitalize Each Word (Blog / News Title)
function capitalizeTitle(title) {
  return title
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeTitle("this is a title")); // "This Is A Title"

//   🔹 7. Check if Two Strings are Rotations 🔥⭐
function isRotation(s1, s2) {
  return s1.length === s2.length && (s1 + s1).includes(s2);
}

console.log(isRotation("abcd", "cdab")); // true


//   🔹 8. Compress a String (e.g. aabcc → a2b1c2)
function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result.length < str.length ? result : str;
}

console.log(compressString("aabcccccaaa")); // a2b1c5a3


//   🔹 9. Longest Word in a Sentence
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }

  return longest;
}

console.log(longestWord("I am learning JavaScript and React")); // JavaScript


//   🔹 10. Check if Sentence is Pangram (All A-Z)
function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lower = sentence.toLowerCase();

  for (let char of alphabet) {
    if (!lower.includes(char)) return false;
  }

  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

//   🔹 1. Group Anagrams (Like Gmail Threading)🔥🔥❌📝
function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }

  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

//   🔹 2. Longest Substring Without Repeating Characters 🔥🔥❌📝
function longestUniqueSubstring(s) { 
  let set = new Set();
  let left = 0,
    max = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3 → "abc"

//   🔹 3. Valid Parentheses (Like Formatted HTML or Code) 🔥🔥❌📝
function isValidBrackets(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidBrackets("{[()]}")); // true

//   🔹 4. Find All Occurrences of a Word in Text 🔥🔥❌📝
function findOccurrences(text, word) {
  const regex = new RegExp(word, "gi");
  return [...text.matchAll(regex)].map((match) => match.index);
}

console.log(
  findOccurrences("React is fast. I love React. React is easy.", "React")
);


//   🔹 6. Implement Basic Word Auto-Suggestion
function getSuggestions(words, prefix) {
  return words.filter((word) => word.startsWith(prefix));
}

console.log(getSuggestions(["apple", "apricot", "banana", "app"], "ap"));
// ["apple", "apricot", "app"]

//   🔹 7. Most Frequent Word
function mostFrequentWord(text) {
  const words = text.toLowerCase().match(/\w+/g);
  const map = {};
  let max = 0,
    result = "";

  for (let word of words) {
    map[word] = (map[word] || 0) + 1;
    if (map[word] > max) {
      max = map[word];
      result = word;
    }
  }

  return result;
}

console.log(mostFrequentWord("React is great and React is fast"));

//   🔹 8. Remove Duplicate Letters and Keep Lexical Order 🔥🔥❌📝
function removeDuplicateLetters(s) {
  const seen = new Set();
  const stack = [];
  const lastIndex = {};

  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen.has(char)) continue;

    while (
      stack.length &&
      char < stack[stack.length - 1] &&
      lastIndex[stack[stack.length - 1]] > i
    ) {
      seen.delete(stack.pop());
    }

    stack.push(char);
    seen.add(char);
  }

  return stack.join("");
}

console.log(removeDuplicateLetters("cbacdcbc")); // "acdb"

//   🔹 9. Count and Say Pattern (Voice-to-Text type pattern) 🔥🔥❌📝
function countAndSay(n) {
  let result = "1";

  for (let i = 1; i < n; i++) {
    let temp = "";
    let count = 1;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === result[j + 1]) {
        count++;
      } else {
        temp += count + result[j];
        count = 1;
      }
    }

    result = temp;
  }

  return result;
}

console.log(countAndSay(5)); // "111221"

//   🔹 10. Password Strength Checker 🔥🔥❌📝
function isStrongPassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);
  return password.length >= 8 && hasUpper && hasLower && hasDigit && hasSymbol;
}

console.log(isStrongPassword("Aa1@abcd")); // true

// =======================================================================================================

// Object

// 1. 🏠 House Rental Management System
const properties = {
  "Property 1": { price: 1500, size: 1000, available: true },
  "Property 2": { price: 2000, size: 1200, available: false },
  "Property 3": { price: 1800, size: 900, available: true },
};

// Find available properties

/*
Step 2: Object.entries(properties)
Object.entries() converts the object into an array of [key, value] pairs:
[
  ["Property 1", { price: 1500, size: 1000, available: true }],
  ["Property 2", { price: 2000, size: 1200, available: false }],
  ["Property 3", { price: 1800, size: 900, available: true }]
]

Step 3: .filter(([name, details]) => details.available)
We now filter the array and only keep the entries where details.available is true.

We loop through each [name, details]:

First Entry:

name = "Property 1"

details = { price: 1500, size: 1000, available: true }

details.available = true ✅ → Keep this entry

Second Entry:

name = "Property 2"

details = { price: 2000, size: 1200, available: false }

details.available = false ❌ → Skip this entry

Third Entry:

name = "Property 3"

details = { price: 1800, size: 900, available: true }

details.available = true ✅ → Keep this entry


*/


const availableProperties = Object.entries(properties).filter(
  ([name, details]) => details.available
);

console.log(availableProperties); // [["Property 1", {...}], ["Property 3", {...}]]

// 2. 💼 Employee Directory
const employees = {
  "John Doe": {
    title: "Software Engineer",
    department: "Engineering",
    salary: 60000,
  },
  "Jane Smith": {
    title: "Product Manager",
    department: "Product",
    salary: 80000,
  },
  "Amit Patel": { title: "HR Manager", department: "HR", salary: 55000 },
};

// Get employee names and their job titles
for (let employee in employees) {
  console.log(`${employee} works as a ${employees[employee].title}`);
}

// 3. 📈 Stock Price Tracker
const stockPrices = {
  AAPL: 145,
  GOOG: 2750,
  AMZN: 3450,
};

// Update stock price for AAPL
stockPrices["AAPL"] = 150;

// Calculate percentage change
const priceChange = (oldPrice, newPrice) =>
  ((newPrice - oldPrice) / oldPrice) * 100;

console.log(priceChange(145, stockPrices["AAPL"])); // Percentage change in AAPL stock

// 4. 🏅 Student Grades System
const studentsGrades = {
  John: { math: 85, english: 90, history: 78 },
  Jane: { math: 92, english: 88, history: 80 },
  Amit: { math: 76, english: 85, history: 82 },
};

// Calculate the average grade for each student
for (let student in studentsGrades) {
  const grades = Object.values(studentsGrades[student]); // returns: [85, 90, 78] of john , & rest of the students
  const avgGrade =
    grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
  console.log(`${student} has an average grade of ${avgGrade}`);
}

// 5. 🗣️ Language Translation System
const translations = {
  en: { hello: "Hello", goodbye: "Goodbye", please: "Please" },
  es: { hello: "Hola", goodbye: "Adiós", please: "Por favor" },
  fr: { hello: "Bonjour", goodbye: "Au revoir", please: "S'il vous plaît" },
};

// Get the translation for "hello" in Spanish
console.log(translations["es"].hello); // "Hola"

// 6. 🧑‍💼 Task Management System
const tasks = {
  John: [
    {
      task: "Complete project report",
      priority: "high",
      status: "in-progress",
    },
    { task: "Attend team meeting", priority: "medium", status: "completed" },
  ],
  Jane: [
    { task: "Create marketing plan", priority: "high", status: "in-progress" },
    { task: "Review design proposal", priority: "low", status: "not-started" },
  ],
};

// Display all tasks for John
for (let task of tasks["John"]) {
  console.log(`${task.task} - ${task.status}`);
}

// 7. 🛠️ Configuration Settings Manager
const settings = {
  theme: "dark",
  language: "en",
  notifications: true,
};

// Change theme to light mode
settings.theme = "light";

// Turn off notifications
settings.notifications = false;

console.log(settings); // { theme: "light", language: "en", notifications: false }

// 8. 🧑‍💻 GitHub Repository Tracker
const repositories = {
  repo1: { stars: 100, forks: 50 },
  repo2: { stars: 250, forks: 150 },
  repo3: { stars: 400, forks: 200 },
};

// Add stars and forks to a repo
repositories["repo2"].stars += 10;
repositories["repo2"].forks += 5;

console.log(repositories);

// 9. 📅 Event Schedule Tracker
const events = {
  "2022-05-01": {
    event: "Music Concert",
    location: "Stadium",
    description: "Rock band performance",
  },
  "2022-06-10": {
    event: "Tech Conference",
    location: "Convention Center",
    description: "Innovation talks",
  },
  "2022-07-15": {
    event: "Food Festival",
    location: "Park",
    description: "Taste the best local dishes",
  },
};

// Get details of event on a specific date
console.log(events["2022-06-10"]); // { event: "Tech Conference", location: "Convention Center", description: "Innovation talks" }

// 10. 🏆 Leaderboard System
const leaderboard = {
  Alice: 1200,
  Bob: 1500,
  Charlie: 1300,
};

// Add a new player
leaderboard["Dave"] = 1400;

// Get top scorer
let topScorer = "";
let maxScore = 0;

for (let player in leaderboard) {
  if (leaderboard[player] > maxScore) {
    maxScore = leaderboard[player];
    topScorer = player;
  }
}

console.log(`${topScorer} is the top scorer with ${maxScore} points.`);

// 1. 🛒 Shopping Cart System
const cart = {
  apple: { price: 1.2, quantity: 3 },
  banana: { price: 0.5, quantity: 5 },
};

// Add a new item to the cart
cart["orange"] = { price: 0.8, quantity: 2 };

// Remove an item from the cart
delete cart["banana"];

// Calculate total price
let totalPrice = 0;
for (let item in cart) {
  totalPrice += cart[item].price * cart[item].quantity;
}

console.log(totalPrice); // Total price of items in the cart

// 2. 🏢 Company Employee Management System
const employees = {
  101: { name: "John", department: "HR", position: "Manager", salary: 60000 },
  102: {
    name: "Jane",
    department: "Engineering",
    position: "Engineer",
    salary: 80000,
  },
  103: {
    name: "Alice",
    department: "HR",
    position: "Assistant",
    salary: 40000,
  },
  104: {
    name: "Bob",
    department: "Engineering",
    position: "Developer",
    salary: 75000,
  },
};

// Find the highest paid employee in each department
const highestPaid = {};

for (let id in employees) {
  const employee = employees[id];
  if (
    !highestPaid[employee.department] ||
    highestPaid[employee.department].salary < employee.salary
  ) {
    highestPaid[employee.department] = employee;
  }
}

console.log(highestPaid); // Highest paid employee in each department

// 3. 📅 Event Management System
const events = {
  "2022-05-01": {
    name: "Music Concert",
    venue: "Stadium",
    participants: ["John", "Jane", "Alice"],
  },
  "2022-06-10": {
    name: "Tech Conference",
    venue: "Convention Center",
    participants: ["Bob", "Charlie"],
  },
  "2022-07-15": {
    name: "Food Festival",
    venue: "Park",
    participants: ["Alice", "Dave"],
  },
};

// Filter events happening after June 1st, 2022
const filteredEvents = Object.entries(events).filter(
  ([date, event]) => new Date(date) > new Date("2022-06-01")
);

console.log(filteredEvents);

// 4. 🚗 Car Rental System
const cars = {
  "Car A": { model: "Toyota", year: 2020, pricePerDay: 30, available: true },
  "Car B": { model: "Honda", year: 2018, pricePerDay: 25, available: false },
  "Car C": { model: "BMW", year: 2022, pricePerDay: 50, available: true },
};

// Find available cars
const availableCars = Object.entries(cars).filter(
  ([name, details]) => details.available
);

// Calculate rental cost for 5 days for available cars
const rentalCost = availableCars.map(([name, details]) => ({
  car: name,
  cost: details.pricePerDay * 5,
}));

console.log(rentalCost); // Rental cost for 5 days

// 5. 📱 Mobile App Subscription System
const subscriptions = {
  user1: { type: "Premium", startDate: "2021-01-01", endDate: "2022-01-01" },
  user2: { type: "Basic", startDate: "2021-06-01", endDate: "2022-06-01" },
  user3: { type: "Premium", startDate: "2021-05-01", endDate: "2022-05-01" },
};

// Check if the subscription is still active
const isActive = (user) => {
  const currentDate = new Date();
  const endDate = new Date(subscriptions[user].endDate);
  return currentDate <= endDate;
};

console.log(isActive("user1")); // true or false depending on the current date

// 6. 🎮 Gaming High Scores
const highScores = {
  Alice: 1200,
  Bob: 1500,
  Charlie: 1300,
};

// Add a new score for a player
const addScore = (player, score) => {
  if (!highScores[player] || highScores[player] < score) {
    highScores[player] = score;
  }
};

// Update Bob's score
addScore("Bob", 1600);

console.log(highScores); // Updated high scores

// 7. 🧳 Luggage Management System
const luggage = {
  L123: { owner: "John Doe", status: "checked in" },
  L124: { owner: "Jane Smith", status: "being transported" },
  L125: { owner: "Amit Patel", status: "delivered" },
};

// Change status of a luggage item
luggage["L123"].status = "being transported";

// Get all checked-in luggage
const checkedInLuggage = Object.entries(luggage).filter(
  ([id, details]) => details.status === "checked in"
);

console.log(checkedInLuggage);

// 8. 🔢 Voting System
const candidates = {
  Alice: 0,
  Bob: 0,
  Charlie: 0,
};

// Add votes for candidates
const vote = (candidate) => {
  if (candidates[candidate] !== undefined) {
    candidates[candidate]++;
  }
};

// Simulate voting
vote("Alice");
vote("Bob");
vote("Bob");
vote("Charlie");
vote("Bob");

console.log(candidates); // Votes count for each candidate

// Find the winner
let winner = Object.keys(candidates).reduce((a, b) =>
  candidates[a] > candidates[b] ? a : b
);
console.log(`Winner is: ${winner}`);

// 9. 🏨 Hotel Room Booking System
const rooms = {
  101: { type: "single", price: 100, available: true },
  102: { type: "double", price: 150, available: false },
  103: { type: "suite", price: 250, available: true },
};

// Check availability and book a room
const bookRoom = (roomNumber) => {
  if (rooms[roomNumber] && rooms[roomNumber].available) {
    rooms[roomNumber].available = false;
    console.log(`Room ${roomNumber} has been booked.`);
  } else {
    console.log(`Room ${roomNumber} is not available.`);
  }
};

bookRoom(101); // Room 101 has been booked.

// 10. 🏆 Award Tracking System
const awards = {
  John: ["Employee of the Month", "Best Innovator"],
  Jane: ["Top Performer"],
  Amit: ["Employee of the Month"],
};

// Add an award for an employee
const addAward = (employee, award) => {
  if (!awards[employee]) {
    awards[employee] = [];
  }
  awards[employee].push(award);
};

addAward("John", "Best Team Player");

console.log(awards); // Awards received by each employee

// =========================================================================================================

// 📚 Stack কী? (What is Stack?)
/*
Stack হল একটি LIFO (Last In, First Out) ডেটা স্ট্রাকচার।
মানে:
👉 শেষে যেটা ঢুকবে, সেটাই সবার আগে বের হবে।

🎯 বাস্তব জীবনের উদাহরণ (Real Life Examples)
উদাহরণ	Stack ব্যাখ্যা
🥣 প্লেটের স্ট্যাক	শেষ প্লেট আগে তুলতে হয়
↩️ Undo / Redo	শেষ কাজ Undo হয়
🌐 ব্রাউজার হিস্ট্রি	Back বাটন চাপলে শেষ ওয়েবসাইটে যাওয়া যায়
🧠 ফাংশনের কল Stack	JS ফাংশন কল হলে Stack এ Push হয়

*/

// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reverseWords = function (s) {
  const splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }

  let finalS = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finalS += " " + current;
    }
  }

  return finalS.trim();
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));

// Time Complexity = O(n)
// Space Complexity = O(n)



// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      }

      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}

const string1 = "([{})";
console.log(isValid(string1));

// Time Complexity = O(n)
// Space Complexity = O(n)



// ======================================================================================================

/*
🔰 Queue কী?
👉 Queue মানে হলো লাইন — যে আগে আসে, সে আগে যায় (FIFO = First In First Out)।
যেমন:

বাসে চড়ার লাইন

প্রিন্টারের জব

কাস্টমার সার্ভিস সিস্টেম

*/



// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular queue. The circular queue is a
// linear data structure in which the operations are performed based on First In First Out
// principle, and the last position is connected back to the first position to make a circle.

var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size === this.queue.length) return false;
  this.queue.push(value);
  return true;
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

// [2,5,72]

var obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(4);
obj.enQueue(2);
obj.deQueue();
obj.enQueue(5);
obj.deQueue();
obj.enQueue(72);

console.log(obj.Front(), obj.Rear());




// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

// q1 - [4,2,3,5]
// q2 - []

MyStack.prototype.push = function (x) {
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  this.q1.push(x);
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift());
  }
};

MyStack.prototype.pop = function () {
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  return this.q1[0];
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

var stack = new MyStack();
stack.push(3);
stack.push(5);
stack.push(96);
stack.push(24);
stack.pop();
console.log(stack.top());



// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.enqueue = function (x) {
  this.stack1.push(x);
};

// stack1 = [9,10]
// stack2 = []

MyQueue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2.pop();
};

MyQueue.prototype.front = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

[3, 6, 7];

const queue = new MyQueue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
console.log(queue.front());



// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Brute Force Solution
const maxSlidingWindowNaive = function (nums, k) {
  const result = [];
  const n = nums.length;

  for (i = 0; i <= n - k; i++) {
    // O(n)
    let max = nums[i];
    for (j = 1; j < k; j++) {
      // O(k)
      if (nums[i + j] > max) {
        max = nums[j + i];
      }
    }

    result.push(max);
  }

  return result;
};

// Time Complexity - O(n*k) => O(n^2)
// Space Complexity - O(n)
console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

// Optimised Solution - Deque
const maxSlidingWindowQueue = function (nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

// Time Complexity - O(n)
// Space Complexity - O(n)
console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));

// =======================================================================================================


// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Brute Force Solution
const maxSlidingWindowNaive = function (nums, k) {
  const result = [];
  const n = nums.length;

  for (i = 0; i <= n - k; i++) {
    // O(n)
    let max = nums[i];
    for (j = 1; j < k; j++) {
      // O(k)
      if (nums[i + j] > max) {
        max = nums[j + i];
      }
    }

    result.push(max);
  }

  return result;
};

// Time Complexity - O(n*k) => O(n^2)
// Space Complexity - O(n)
console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

// Optimised Solution - Deque
const maxSlidingWindowQueue = function (nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

// Time Complexity - O(n)
// Space Complexity - O(n)
console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));


//========================================================================================================

/*
📌 What is Recursion? (রিকারশন কী?)
Recursion হলো এমন একটি ফাংশন, যা নিজেকেই কল করে (call)।

🔁 নিজেই নিজেকে আবার ডাকে – যতক্ষণ না পর্যন্ত একটা নির্দিষ্ট শর্ত পূরণ হয়।

✅ Recursion-এর ২টি পার্ট:
Base Case (স্টপ করার নিয়ম)

Recursive Call (নিজেকে ডাকা)

*/

// 🧠 সহজ উদাহরণ: কাউন্টডাউন
function countdown(n) {
  if (n === 0) {
    console.log("Boom!");
    return;
  }
  console.log(n);
  countdown(n - 1); // নিজেকে ডাকা
}

countdown(5);


// একজন শিক্ষার্থীকে বলা হয়েছে – “5!” মানে কত? ✨ অর্থাৎ: 5! = 5 × 4 × 3 × 2 × 1 = 120

function factorial(n) {
  if (n === 1) return 1; // base case
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // Output: 120
// 🔁 এখানে factorial(5) → 5 * factorial(4) → ... → শেষ পর্যন্ত factorial(1)।


// তুমি ঘুমোতে যাওয়ার সময় বলো: “১০টা ভেড়া গুনবো”…
function countSheep(n) {
  if (n === 0) {
    console.log("All sheep jumped over the fence!");
    return;
  }

  console.log(`${n}: Sheep jumped over the fence`);
  countSheep(n - 1); // Recursion
}

countSheep(5);

/*
🧾 Output:
5: Sheep jumped over the fence
4: Sheep jumped over the fence
3: Sheep jumped over the fence
2: Sheep jumped over the fence
1: Sheep jumped over the fence
All sheep jumped over the fence!

*/

// “hello” → “olleh”

function reverseString(str) {
  if (str.length === 0) return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // Output: "olleh"


// একটা কম্পিউটারে ফোল্ডার → ফোল্ডারের ভিতর আবার ফোল্ডার → তার ভিতরে ফাইল।
const fileSystem = {
  name: "root",
  files: ["index.html", "style.css"],
  folders: [
    {
      name: "images",
      files: ["logo.png", "banner.jpg"],
      folders: []
    },
    {
      name: "scripts",
      files: ["app.js"],
      folders: []
    }
  ]
};

function printFiles(folder) {
  console.log(`📁 Folder: ${folder.name}`);
  folder.files.forEach(file => console.log(`  📄 File: ${file}`));
  folder.folders.forEach(subFolder => printFiles(subFolder));
}

printFiles(fileSystem);


// 1234 → 1 + 2 + 3 + 4 = 10
function sumDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(1234)); // Output: 10


// ===========================================================================================================

// Ques 1: Implement Linear Search in JavaScript
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0  ----->>>>>  Output:  4
// Input: nums = [4,5,6,7,0,1,2], target = 3  ----->>>>>  Output: -1

const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};

// Time Complexity  - O(n)
// Space Complexity - O(1)
// console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 3));

// Global Linear Search

const globalLinearSearch = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.length === 0) return -1;
  return result;
};

// Time Complexity  - O(n)
// Space Complexity - O(n)
console.log(globalLinearSearch([4, 5, 0, 7, 0, 1, 2], 0));



// Ques 2: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// Write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

// Time Complexity  - O(logn)
// Space Complexity - O(1)
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 69));


// Ques 3: Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order,
// and an integer k. Return the kth positive integer that is missing from this array.

// Input: arr = [2,3,4,7,11], k = 5  ----->>>>>  Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
//              The 5th missing positive integer is 9.

// arr = [2,3,4,7,11], k = 5
// count = 4
// 11 <= 9
function findKthPositive(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }

  return k + count;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5));



// Ques 4: Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.

// Input: nums = [-2,-1,-1,1,2,3]  ----->>>>>  Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.
//              The maximum count among them is 3.

function maximumCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}

// [-2,-1,-1,1,2,3]
// low = 2 , high = 2
// mid = 3 => nums[3] = 1
function upperBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (nums[mid] < 0) low = mid;
    else high = mid - 1;
  }

  return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > 0) high = mid;
    else low = mid + 1;
  }

  return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));

//==========================================================================================================


Sorting 

// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(bubbleSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)

// Space Complexity = O(1)

// Ques 2: Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14]  ----->>>>>  Output: [10,14,14,29,37]

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // n
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([29, 10, 14, 37, 14]));

// Time Complexity = O(n^2)
// Space Complexity = O(1)


// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11] ----->>>>>  Output: [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // n
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // n
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)



// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11] ----->>>>>  Output: [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // n
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // n
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)



// Ques 6: Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Time Complexity -
// Average Case - O(nlog n)
// Best Case - O(nlog n)
// Worst Case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)
console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));

// Approach 2 - Without using left and right Arrays
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}
//===========================================================================================================


// Ques 1 : Given the head of a singly linked list, return true if it is
// a palindrome or false otherwise

// Input: head = [1,2,2,1]      ----->>>>>      Output: true;
// Input: head = [1,2]          ----->>>>>      Output: false;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var isPalindrome = function (head) {
  let string1 = (string2 = "");
  let node = head;

  while (node != null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }
  return string1 === string2;
};






//===========================================================================================================

// ⭐ Pattern Printing

// ✅ Step 1: প্রথম প্যাটার্ন (Right-Angled Triangle)
// উদ্দেশ্য: প্রতিটি লাইনে যত লাইন নম্বর, ততগুলো * প্রিন্ট হবে।
/*
🔍 Output:
* 
* * 
* * * 
* * * * 
* * * * * 
*/

function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '* ';
    }
    console.log(stars);
  }
}

printStars(5);



//  Step 2: Reverse Triangle Pattern
/*
* * * * *
* * * *
* * *
* *
*
*/

function reverseStars(n) {
  for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

reverseStars(5);


// ✅ Step 3: Pyramid Pattern (Centered Triangle)
/*
    *    
   * *   
  * * *  
 * * * * 
* * * * *
*/

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let space = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(space + stars);
  }
}

pyramid(5);


// ✅ Step 4: Diamond Pattern
/*
    *    
   * *   
  * * *  
   * *   
    *    
*/

function diamond(n) {
  for (let i = 1; i <= n; i++) {
    let space = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(space + stars);
  }
  for (let i = n - 1; i >= 1; i--) {
    let space = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(space + stars);
  }
}

diamond(3);


// ✅ Step 5: Box Pattern
/*
* * * * *
*       *
*       *
*       *
* * * * *
*/

function boxPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += '* ';
      } else {
        row += '  ';
      }
    }
    console.log(row);
  }
}

boxPattern(5);

/*
📌 বুঝে রাখো:
🔁 Loop	কাজ
Outer Loop	লাইন (row) কন্ট্রোল করে
Inner Loop	প্রতিটি লাইনের ভিতরে স্টার বা স্পেস প্রিন্ট করে
*/


// ================================================================================================================


// 🧠 1. Sorting মানে কি?
// Sorting মানে হচ্ছে কোন array বা list কে ধারাবাহিকভাবে সাজানো (ascending বা descending):

// Example:

// Input: [5, 1, 4, 2, 3]

// Output: [1, 2, 3, 4, 5] (Ascending)


// 🌀 3. Bubble Sort – Step by Step
// Logic: পাশের দুটো এলিমেন্ট compare করে বড়টাকে পিছনে পাঠায়। (Bar bar ঘুরে)

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 1, 4, 2]));

/*
✅ Execution:
i=0: [3, 1, 4, 2, 5]
i=1: [1, 3, 2, 4, 5]
i=2: [1, 2, 3, 4, 5]
i=3: [1, 2, 3, 4, 5]
*/


// 🧲 4. Selection Sort
// Logic: প্রতি iteration-এ সবচেয়ে ছোটটা বের করে সামনে বসায়
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}


// 🖊️ 5. Insertion Sort
// Logic: প্রতিটা এলিমেন্ট ধরে ধরে আগে যতগুলো ছোট আছে, তাদের পিছনে বসায়

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // shift
      j--;
    }

    arr[j + 1] = current; // insert
  }
  return arr;
}


// 🔥 6. Built-in Sort in JavaScript

let arr = [5, 2, 1, 4, 3];

arr.sort((a, b) => a - b); // Ascending
arr.sort((a, b) => b - a); // Descending


// ===============================================================================================================
