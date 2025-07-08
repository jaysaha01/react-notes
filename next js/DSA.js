
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

//   🔹 3. Valid Parentheses (Like Formatted HTML or Code) 
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


//   🔹 4. Find All Occurrences of a Word in Text 
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
function findMostFrequestWords(str) {
    let mydurblicatets=[]
    let finalObj = {}
    
    let myArrayWords = str.split(" ");

    for (let i = 0; i < myArrayWords.length; i++) {

        if (finalObj[myArrayWords[i]]) {
            finalObj[myArrayWords[i]]++
        }else{
            finalObj[myArrayWords[i]] = 1
        }
    }

    for(let i in finalObj){
        if(finalObj[i] > 1){
            mydurblicatets.push(i)
        }
    }

    console.log (mydurblicatets)
}

findMostFrequestWords("React is great great great and React  fast") //[ 'React', 'great' ]

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




//========================================================================================================

Array Object

🚀 1️⃣ Merge customer orders by customer id

let customers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let orders = [
  { customerId: 1, product: "Laptop" },
  { customerId: 2, product: "Mouse" },
  { customerId: 1, product: "Keyboard" }
];


let result = customers.map(cust => ({
  ...cust,
  orders: orders.filter(order => order.customerId === cust.id)
}));

console.log(result);
// [
//   { id:1, name:"Alice", orders:[{...}, {...}] },
//   { id:2, name:"Bob", orders:[{...}] }
// ]


🚀 2️⃣ Find duplicate values in array of numbers Return [2,3].

  let seen = new Set();
let duplicates = new Set();

nums.forEach(n => {
  if (seen.has(n)) duplicates.add(n);
  else seen.add(n);
});

console.log([...duplicates]);


🚀 3️⃣ Validate that array of objects has unique property
let users = [
  { username: "alice" },
  { username: "bob" },
  { username: "alice" }
];

let unique = new Set(users.map(u => u.username));
console.log(unique.size === users.length ? "All unique" : "Duplicates found");


🚀 4️⃣ Remove users who are inactive for more than 30 days Today = 2025-07-08
let users = [
  { name: "Alice", lastLogin: "2025-06-01" },
  { name: "Bob", lastLogin: "2025-07-05" }
];

let today = new Date("2025-07-08");
let active = users.filter(u => 
  (today - new Date(u.lastLogin)) / (1000*60*60*24) <= 30
);

console.log(active);
// Only Bob remains

🚀 5️⃣ Sum total quantities in nested orders
let orders = [
  { id:1, items: [{qty:2}, {qty:3}] },
  { id:2, items: [{qty:1}, {qty:4}] }
];

let totalQty = orders.reduce((sum, order) => 
  sum + order.items.reduce((s,i)=>s+i.qty,0), 0);

console.log(totalQty); // 10


🚀 6️⃣ Find the most frequent item
let arr = ["apple","banana","apple","orange","banana","apple"];

let freq = {};
arr.forEach(item => freq[item] = (freq[item]||0)+1);
let mostFrequent = Object.entries(freq).reduce((a,b)=>a[1]>b[1]?a:b)[0];
console.log(mostFrequent);


🚀 7️⃣ Find all employees without manager (parent/child relation)
📝 Problem
let employees = [
  { id:1, name:"CEO", managerId: null },
  { id:2, name:"Alice", managerId:1 },
  { id:3, name:"Bob", managerId:2 }
];

let top = employees.filter(e => e.managerId === null);
console.log(top);


🚀 8️⃣ Build parent->child hierarchy tree
📝 Problem
let flat = [
  { id:1, name:"CEO", managerId: null },
  { id:2, name:"Alice", managerId:1 },
  { id:3, name:"Bob", managerId:2 }
];

function buildTree(list, parentId=null){
  return list
    .filter(item => item.managerId === parentId)
    .map(item => ({...item, children: buildTree(list, item.id)}));
}

console.log(JSON.stringify(buildTree(flat),null,2));


🚀 9️⃣ Compare two lists and find added/removed items
📝 Problem
let oldList = [1,2,3];
let newList = [2,3,4];

✅ Solution
let added = newList.filter(x => !oldList.includes(x));
let removed = oldList.filter(x => !newList.includes(x));

console.log({added, removed}); // { added:[4], removed:[1] }


🚀 🔟 Sort complex data by multiple rules (score DESC, then name ASC)
📝 Problem
let players = [
  { name:"Bob", score:100 },
  { name:"Alice", score:100 },
  { name:"Eve", score:90 }
];

players.sort((a,b)=> b.score - a.score || a.name.localeCompare(b.name));
console.log(players);


🚀 1️⃣1️⃣ Flatten deeply nested array
let nested = [1, [2, [3, [4]]]];

let flat = nested.flat(Infinity);
console.log(flat); // [1,2,3,4]


🚀 1️⃣2️⃣ Deep merge two objects (recursive)
let a = { x:1, y:{ z:2 }};
let b = { y:{ z:3, w:4 }};

function deepMerge(obj1, obj2){
  let result = {...obj1};
  for(let key in obj2){
    if(obj2[key] instanceof Object && key in obj1)
      result[key] = deepMerge(obj1[key], obj2[key]);
    else
      result[key] = obj2[key];
  }
  return result;
}
console.log(deepMerge(a,b));
// { x:1, y:{ z:3, w:4 }}


🚀 1️⃣3️⃣ Group items by property and count
let people = [
  { age: 20 }, { age: 20 }, { age: 30 }
];


let grouped = people.reduce((acc, p)=>{
  acc[p.age] = (acc[p.age]||0)+1;
  return acc;
},{});
console.log(grouped); // {20:2, 30:1}


🚀 1️⃣4️⃣ Find longest increasing sequence
let nums = [1,3,5,4,7];

let max = 0, count = 0;
for(let i=0; i<nums.length; i++){
  if(i===0 || nums[i]>nums[i-1]) count++;
  else count=1;
  max = Math.max(max,count);
}
console.log(max); // 3


🚀 1️⃣5️⃣ Validate all passwords meet criteria
let users = [
  { username:"alice", password:"1234" },
  { username:"bob", password:"pass" }
];

let allValid = users.every(u => u.password.length >= 4);
console.log(allValid); // true


🚀 1️⃣6️⃣ Find median of array
let nums = [5,3,1,2,4];

✅ Solution
nums.sort((a,b)=>a-b);
let median = nums.length % 2 
  ? nums[Math.floor(nums.length/2)]
  : (nums[nums.length/2-1]+nums[nums.length/2])/2;
console.log(median); // 3


🚀 1️⃣7️⃣ Filter nested objects by property
let data = [
  { id:1, posts:[{published:true}, {published:false}] },
  { id:2, posts:[{published:false}] }
];
✅ Solution
let filtered = data.map(u => ({
  ...u, posts: u.posts.filter(p => p.published)
})).filter(u => u.posts.length>0);

console.log(filtered);
// [{ id:1, posts:[{published:true}] }]

🚀 1️⃣8️⃣ Extract only unique tags from nested lists
let articles = [
  { tags: ["js", "node"] },
  { tags: ["js", "react"] }
];


✅ Solution
let tags = [...new Set(articles.flatMap(a => a.tags))];
console.log(tags); // ["js","node","react"]


🚀 1️⃣9️⃣ Find intersection of multiple sets
let a = new Set([1,2,3]);
let b = new Set([2,3,4]);
let c = new Set([3,4,5]);

✅ Solution
let intersection = [...a].filter(x => b.has(x) && c.has(x));
console.log(intersection); // [3]


🚀 2️⃣0️⃣ Find first duplicate in array
let arr = [2,5,1,2,3,5,1];

✅ Solution
let seen = new Set(), firstDup = null;
for(let n of arr){
  if(seen.has(n)){ firstDup=n; break; }
  seen.add(n);
}
console.log(firstDup); // 2


-------------------------------------------------------------------------------------------------------------------------------------------------------

🔥 Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
//✅solutions
function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1]));                      // 1
console.log(maxSubArray([5,4,-1,7,8]));             // 23

=======================================================================================================================================================================


Input: nums = [1,2,3,4,6], target = 6
Output: [2,4]  // because 2 + 4 = 6

//✅solutions
function findPairWithSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [nums[left], nums[right]];
        } else if (sum < target) {
            left++;  // increase sum
        } else {
            right--; // decrease sum
        }
    }

    return []; // no pair found
}

console.log(findPairWithSum([1,2,3,4,6], 6)); // [2,4]
console.log(findPairWithSum([2,3,5,8,12], 10)); // [2,8]
console.log(findPairWithSum([1,2,3,9], 8)); // []

=================================================================================================================================

  🚀 Problem summary
Given an array nums, size n,
return the majority element, i.e., the element that appears more than ⌊n/2⌋ times.

📝 Examples

js
Copy
Edit
Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2

//✅solutions
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

console.log(majorityElement([3,2,3]));          // Output: 3
console.log(majorityElement([2,2,1,1,1,2,2]));  // Output: 2

========================================================================================================================

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

//✅solutions
function maxProfit(prices) {
    let minPrice = prices[0]; // lowest price seen so far
    let maxProfit = 0;        // maximum profit

    for (let i = 1; i < prices.length; i++) {
        let price = prices[i];
        // If selling today gives better profit, update maxProfit
        maxProfit = Math.max(maxProfit, price - minPrice);
        // Update minPrice if today is lower
        minPrice = Math.min(minPrice, price);
    }

    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1]));   // 0


==============================================================================================================================================================


  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

//✅solutions
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let area = width * minHeight;
        maxArea = Math.max(maxArea, area);

        // Move the pointer at the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}


console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));               // 1

======================================================================================================================================================================

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

//✅solutions
✍️ Beginner-friendly JavaScript solution

function productExceptSelf(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }

    return answer;
}

console.log(productExceptSelf([1,2,3,4]));     // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]

=====================================================================================================================================================================

  
