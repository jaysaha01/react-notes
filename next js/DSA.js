
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



// ===============================================================================================================

📚 Linked List কী?
Linked List হলো এমন একটা ডেটা স্ট্রাকচার যেখানে প্রতিটি এলিমেন্ট (যাকে আমরা Node বলি) একটা value/data রাখে এবং পরবর্তী Node-এর address (reference/pointer) রাখে।

মানে: একটার সঙ্গে একটা লিংক করে রেখে data store করা হয়।

🆚 Array vs Linked List
🔷 Array	🔶 Linked List
Memory contiguous (একসাথে জায়গা নেয়)	Memory scattered (যেখানে খুশি জায়গা নেয়)
Size fix করতে হয়	Dynamic size
Insert/Delete কষ্টকর	Insert/Delete সহজ (নোড অ্যাড্রেস চেঞ্জ করলেই হয়)

//Class base example

// Node Class
class TaskNode {
  constructor(task) {
    this.task = task;
    this.next = null;
  }
}

// Linked List Class
class TaskList {
  constructor() {
    this.head = null;
  }

  // ✅ Add Task at end
  addTask(task) {
    const newNode = new TaskNode(task);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    console.log(`✅ Task added: "${task}"`);
  }

  // ✅ Delete Task by value
  deleteTask(task) {
    if (!this.head) return console.log("❌ No tasks to delete.");

    if (this.head.task === task) {
      this.head = this.head.next;
      console.log(`🗑️ Deleted task: "${task}"`);
      return;
    }

    let current = this.head;
    let prev = null;

    while (current !== null && current.task !== task) {
      prev = current;
      current = current.next;
    }

    if (current === null) {
      console.log(`❌ Task not found: "${task}"`);
    } else {
      prev.next = current.next;
      console.log(`🗑️ Deleted task: "${task}"`);
    }
  }

  // ✅ Show all tasks
  printTasks() {
    if (!this.head) return console.log("📭 No tasks in the list.");

    let current = this.head;
    let i = 1;
    console.log("📝 Your Tasks:");
    while (current !== null) {
      console.log(`${i++}. ${current.task}`);
      current = current.next;
    }
  }
}

// ✅ Test It:
const myTasks = new TaskList();

myTasks.addTask("✅ Learn JavaScript");
myTasks.addTask("✅ Understand Linked List");
myTasks.addTask("✅ Crack Interview");
myTasks.printTasks();

console.log("\n--- Now deleting one task ---\n");
myTasks.deleteTask("✅ Understand Linked List");
myTasks.printTasks();

✅ Output (Console):
✅ Task added: "✅ Learn JavaScript"
✅ Task added: "✅ Understand Linked List"
✅ Task added: "✅ Crack Interview"
📝 Your Tasks:
1. ✅ Learn JavaScript
2. ✅ Understand Linked List
3. ✅ Crack Interview

--- Now deleting one task ---

🗑️ Deleted task: "✅ Understand Linked List"
📝 Your Tasks:
1. ✅ Learn JavaScript
2. ✅ Crack Interview


 // Mini Project: Music Playlist Manager (Console Based)
একটা music player বানাবো, যেখানে তুমি:

🎵 নতুন গান playlist-এ যোগ করতে পারবে

⏭️ পরের গান শুনতে পারবে

⏮️ আগের গান শুনতে পারবে

🗑️ একটা গান ডিলিট করতে পারবে

📜 Playlist পুরোটা দেখতে পারবে

// 🔹 Node creator
const createSong = (title, prev = null, next = null) => ({
  title,
  prev,
  next,
});

let head = null;
let current = null;

// ✅ Add new song
const addSong = (title) => {
  const newSong = createSong(title, current);
  if (current) current.next = newSong;
  else head = newSong;

  current = newSong;
  console.log(`🎵 Added: "${title}"`);
};

// ✅ Play next song
const playNext = () => {
  if (current?.next) {
    current = current.next;
    console.log(`⏭️ Now playing: "${current.title}"`);
  } else {
    console.log("🚫 No next song.");
  }
};

// ✅ Play previous song
const playPrevious = () => {
  if (current?.prev) {
    current = current.prev;
    console.log(`⏮️ Now playing: "${current.title}"`);
  } else {
    console.log("🚫 No previous song.");
  }
};

// ✅ Delete current song
const deleteCurrentSong = () => {
  if (!current) return console.log("🚫 No song to delete.");

  console.log(`🗑️ Deleted: "${current.title}"`);

  const prev = current.prev;
  const next = current.next;

  if (prev) prev.next = next;
  if (next) next.prev = prev;

  if (prev) current = prev;
  else if (next) current = next;
  else {
    head = null;
    current = null;
  }
};

// ✅ Show full playlist
const showPlaylist = () => {
  if (!head) return console.log("📭 Empty playlist!");

  let song = head;
  let index = 1;
  console.log("\n🎶 Playlist:");
  while (song) {
    const marker = song === current ? "🎧" : "   ";
    console.log(`${marker} ${index++}. ${song.title}`);
    song = song.next;
  }
};

✅ Example Usage:
addSong("Let Her Go");
addSong("Believer");
addSong("Shape of You");
showPlaylist();
playPrevious(); // Believer
deleteCurrentSong(); // Delete Believer
playPrevious(); // Let Her Go
showPlaylist();

✅ Output:
🎵 Added: "Let Her Go"
🎵 Added: "Believer"
🎵 Added: "Shape of You"

🎶 Playlist:
    1. Let Her Go
    2. Believer
🎧 3. Shape of You

⏮️ Now playing: "Believer"
🗑️ Deleted: "Believer"
⏮️ Now playing: "Let Her Go"

🎶 Playlist:
🎧 1. Let Her Go
    2. Shape of You


// ==================================================================================================================================================================

📚 1. Stack (স্ট্যাক) — LIFO
✅ Full Form: Last In First Out
যেটা শেষে ঢুকেছে, সেটা সবার আগে বের হয় — একদম একটা প্লেটের স্ট্যাকের মতো।

🛠️ JavaScript দিয়ে Stack বানানো (Without class)
const stack = [];

// Push
stack.push("📘 Book 1");
stack.push("📗 Book 2");
stack.push("📕 Book 3");

// Pop
console.log(stack.pop()); // 📕 Book 3
console.log(stack.pop()); // 📗 Book 2

// Peek (last item)
console.log(stack[stack.length - 1]); // 📘 Book 1


🔁 Custom Stack Function (Functional Style)
const createStack = () => {
  let items = [];

  return {
    push: (item) => {
      items.push(item);
      console.log(`📦 Pushed: ${item}`);
    },
    pop: () => {
      const popped = items.pop();
      console.log(`📤 Popped: ${popped}`);
      return popped;
    },
    peek: () => {
      return items[items.length - 1];
    },
    isEmpty: () => items.length === 0,
    print: () => console.log("Stack:", items.join(" -> ")),
  };
};

// Usage
const myStack = createStack();
myStack.push("A");
myStack.push("B");
myStack.pop(); // B
myStack.print(); // A


✅ Project: Undo/Redo Text Editor Simulation (Using Two Stacks)
const createTextEditor = () => {
  let text = "";
  const undoStack = [];
  const redoStack = [];

  return {
    write: (newText) => {
      undoStack.push(text);
      text = newText;
      redoStack.length = 0; // Clear redo stack after new write
      console.log(`📝 Written: "${text}"`);
    },
    undo: () => {
      if (undoStack.length > 0) {
        redoStack.push(text);
        text = undoStack.pop();
        console.log(`↩️ Undo -> "${text}"`);
      } else {
        console.log("🚫 Nothing to undo.");
      }
    },
    redo: () => {
      if (redoStack.length > 0) {
        undoStack.push(text);
        text = redoStack.pop();
        console.log(`↪️ Redo -> "${text}"`);
      } else {
        console.log("🚫 Nothing to redo.");
      }
    },
    currentText: () => {
      console.log(`📄 Current Text: "${text}"`);
    }
  };
};

✅ Usage
const editor = createTextEditor();

editor.write("Hello");
editor.write("Hello World");
editor.write("Hello World from Ranajay");

editor.undo(); // Back to "Hello World"
editor.undo(); // Back to "Hello"
editor.redo(); // Forward to "Hello World"
editor.write("New Start");
editor.undo(); // Back to "Hello World"
editor.currentText(); // Show current


✅ Output
📝 Written: "Hello"
📝 Written: "Hello World"
📝 Written: "Hello World from Ranajay"
↩️ Undo -> "Hello World"
↩️ Undo -> "Hello"
↪️ Redo -> "Hello World"
📝 Written: "New Start"
↩️ Undo -> "Hello World"
📄 Current Text: "Hello World"


// ================================================================================================================================

📚 Queue (কিউ) কি?
✅ Full Form: First In First Out (FIFO)
👉 যে জিনিসটা সবার আগে ঢুকেছে, সেটা সবার আগে বের হবে।

🧠 JavaScript দিয়ে কিউ কিভাবে বানাই?
const queue = [];

// Enqueue (লাইনে ঢোকা)
queue.push("👨 Customer 1");
queue.push("👩 Customer 2");

// Dequeue (লাইনের বাইরে যাওয়া)
console.log(queue.shift()); // 👨 Customer 1
console.log(queue.shift()); // 👩 Customer 2


✅ Custom Queue (Functional Style)

const createQueue = () => {
  let items = [];

  return {
    enqueue: (item) => {
      items.push(item);
      console.log(`🚶 Joined queue: ${item}`);
    },
    dequeue: () => {
      if (items.length === 0) return console.log("🚫 Queue is empty");
      const removed = items.shift();
      console.log(`🏃 Left queue: ${removed}`);
      return removed;
    },
    peek: () => {
      console.log(`👀 First in queue: ${items[0]}`);
    },
    isEmpty: () => items.length === 0,
    size: () => console.log(`📏 Queue Size: ${items.length}`),
    print: () => console.log("📋 Queue:", items.join(" <- "))
  };
};

// ✅ Usage
const bankQueue = createQueue();
bankQueue.enqueue("Customer A");
bankQueue.enqueue("Customer B");
bankQueue.dequeue();
bankQueue.print();


🛠️ Mini Project: Call Center Queue System. 🎯 Goal: Incoming calls are added to queue. Agent picks the next call (dequeue).

const createCallCenter = () => {
  let callQueue = [];

  return {
    receiveCall: (caller) => {
      callQueue.push(caller);
      console.log(`📞 New Call from: ${caller}`);
    },
    answerCall: () => {
      if (callQueue.length === 0) {
        console.log("☎️ No calls in queue.");
        return;
      }
      const caller = callQueue.shift();
      console.log(`✅ Answering call from: ${caller}`);
    },
    showWaitingCalls: () => {
      if (callQueue.length === 0) {
        console.log("📭 No waiting calls.");
      } else {
        console.log("📋 Waiting Calls:", callQueue.join(" <- "));
      }
    }
  };
};

// ✅ Usage
const callCenter = createCallCenter();

callCenter.receiveCall("👤 Caller 1");
callCenter.receiveCall("👤 Caller 2");
callCenter.receiveCall("👤 Caller 3");

callCenter.answerCall(); // Caller 1
callCenter.showWaitingCalls(); // Caller 2 <- Caller 3

// =============================================================================================================================================================

🌳 Tree Data Structure কি?
  ✅ Basic Concept:
Tree হলো hierarchical data structure, যেখানে node গুলি parent-child relationship এ থাকে।

একে non-linear data structure বলা হয়, কারণ data sequential না হয়ে branches (sub-nodes) এর মতো থাকে।

✅ Real-life Example:
File System: যেভাবে আপনার কম্পিউটারে ফোল্ডার এবং সাবফোল্ডার থাকে, সেভাবেই tree structure।

Company Org Chart: CEO → Manager → Employees.

🧩 Code Example: Basic Binary Tree
class Node {
  constructor(data) {
    this.data = data;    // Node এর data
    this.left = null;     // Left child
    this.right = null;    // Right child
  }
}

class BinaryTree {
  constructor() {
    this.root = null;    // Tree এর root
  }

  // Add a new node to the tree
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode; // Root node যদি null হয়, তাহলে এটা root হয়ে যাবে
    } else {
      this.insertNode(this.root, newNode); // Recursively insert at the right place
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // Left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // Right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Traverse tree in-order (Left, Root, Right)
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(30);
tree.insert(20);

console.log("In-order Traversal:");
tree.inOrder(tree.root);


In-order Traversal:
10
15
20
25
30


📁 Project Goal: আমরা একটা ফোল্ডার সিস্টেম বানাবো যেখানে:

প্রতিটি folder বা file একটা node হবে।

folder-এর ভেতরে child node থাকবে (recursively)।

function createNode(name, type) {
  return {
    name,
    type, // "file" or "folder"
    children: type === "folder" ? [] : null,
  };
}

✅ 2. Tree Structure বানানো (ফোল্ডার + ফাইল):
const root = createNode("root", "folder");

const src = createNode("src", "folder");
const indexJs = createNode("index.js", "file");
const appJs = createNode("App.js", "file");

const assets = createNode("assets", "folder");
const logo = createNode("logo.png", "file");
const styles = createNode("styles.css", "file");

assets.children.push(logo, styles);
src.children.push(indexJs, appJs, assets);

const readme = createNode("README.md", "file");

root.children.push(src, readme);


✅ 3. Tree Display Function (Recursively):
function displayTree(node, indent = "") {
  console.log(`${indent}${node.type === "folder" ? "📁" : "📄"} ${node.name}`);
  
  if (node.type === "folder" && node.children) {
    node.children.forEach(child => {
      displayTree(child, indent + "   ");
    });
  }
}


displayTree(root);


✅ Output:
📁 root
   📁 src
      📄 index.js
      📄 App.js
      📁 assets
         📄 logo.png
         📄 styles.css
   📄 README.md


// ==============================================================================================================================================================

