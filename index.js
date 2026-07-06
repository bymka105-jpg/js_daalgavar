console.log("hello world");
/* ============================================================
   LESSON 1 â€” VARIABLES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools allowed: const / let, reassignment, + - * / , and
   joining strings with + . Nothing else yet.

   How to use:
   - Write your function where you see  // your code here
   - The test call sits below it, COMMENTED OUT. Delete the
     leading "// " to switch it on, then run:  node 1-variables.js
   - Each exercise has 3 TEST CASES: INPUT -> the EXACT value
     you must RETURN. All 3 match = correct.

   Every function has a DIFFERENT name, so all answers live here.
   ============================================================ */

// ----- 1. Running total -----
// Write `runningTotal()` (no input). Start let sum = 0, add 8, add 8,
// subtract 1, then RETURN sum.
// your code here
function runningTotal() {
  let sum = 0;
  sum = sum + 8;
  sum = sum + 8;
  sum = sum - 1;

  return sum;
}
console.log("-------1------");

console.log(runningTotal());
console.log(runningTotal() + 5);
console.log(runningTotal() * 2);

// console.log(runningTotal());
// TEST 1:  runningTotal()      ->  15
// TEST 2:  runningTotal() + 5  ->  20
// TEST 3:  runningTotal() * 2  ->  30

// ----- 2. Swap into a label -----
// Write `swapLabel(a, b)` that RETURNS b + "-" + a (the two joined,
// swapped, with a dash between).
// your code here
function swapLabel(a, b) {
  return b + "-" + a;
}
console.log("------2------");

console.log(swapLabel("left", "right"));
console.log(swapLabel("1", "2"));
console.log(swapLabel("a", "b"));

// console.log(swapLabel("left", "right"));
// TEST 1:  swapLabel("left", "right")  ->  "right-left"
// TEST 2:  swapLabel("1", "2")         ->  "2-1"
// TEST 3:  swapLabel("a", "b")         ->  "b-a"

// ----- 3. Triple then bump -----
// Write `tripleBump(n)`. Set let x = n * 3, then add 1 to x, then RETURN x.
// your code here
function tripleBump(n) {
  let x = n * 3;
  x = x + 1;
  return x;
}
console.log("-------3------");

console.log(tripleBump(4));
console.log(tripleBump(0));
console.log(tripleBump(10));

// console.log(tripleBump(4));
// TEST 1:  tripleBump(4)   ->  13
// TEST 2:  tripleBump(0)   ->  1
// TEST 3:  tripleBump(10)  ->  31

// ----- 4. Full name -----
// Write `fullName(first, last)` that RETURNS the two joined with one space.
// your code here

function fullName(first, last) {
  return first + " " + last;
}
console.log("-------4-------");

console.log(fullName("ada", "lovelace"));
console.log(fullName("sam", "lee"));
console.log(fullName("a", "b"));

// console.log(fullName("Ada", "Lovelace"));
// TEST 1:  fullName("Ada", "Lovelace")  ->  "Ada Lovelace"
// TEST 2:  fullName("Sam", "Lee")       ->  "Sam Lee"
// TEST 3:  fullName("A", "B")           ->  "A B"

// ----- 5. Price with tax -----
// Write `withTax(price)`. Use const TAX = 0.1, then RETURN price plus
// price * TAX.
// your code here
function withTax(price) {
  const tax = 0.1;
  return price + price * tax;
}

console.log("-------5--------");
console.log(withTax(100));
console.log(withTax(50));
console.log(withTax(0));

// console.log(withTax(100));
// TEST 1:  withTax(100)  ->  110
// TEST 2:  withTax(50)   ->  55
// TEST 3:  withTax(0)    ->  0

// ----- 6. Count up by one, three times -----
// Write `countUp3(start)`. Set let c = start, then c++ three times, RETURN c.
// your code here
function countUp3(start) {
  let c = start;
  c++;
  c++;
  c++;

  return c;
}
console.log("------6-----");

console.log(countUp3(7));
console.log(countUp3(0));
console.log(countUp3(-3));

// console.log(countUp3(7));
// TEST 1:  countUp3(7)   ->  10
// TEST 2:  countUp3(0)   ->  3
// TEST 3:  countUp3(-3)  ->  0

// ----- 7. Average of two -----
// Write `avgTwo(a, b)` that RETURNS the average of a and b.
// your code here
function avgTwo(a, b) {
  return (a + b) / 2;
}
console.log("------7-------");

console.log(avgTwo(4, 8));
console.log(avgTwo(10, 20));
console.log(avgTwo(3, 3));

// console.log(avgTwo(4, 8));
// TEST 1:  avgTwo(4, 8)    ->  6
// TEST 2:  avgTwo(10, 20)  ->  15
// TEST 3:  avgTwo(3, 3)    ->  3

// ----- 8. Rectangle area then double -----
// Write `doubleArea(w, h)`. Set let area = w * h, then reassign
// area = area * 2, RETURN area.
// your code here
function doubleArea(w, h) {
  let area = w * h;
  area = area * 2;
  return area;
}
console.log("------8-----");

console.log(doubleArea(3, 4));
console.log(doubleArea(5, 2));
console.log(doubleArea(1, 1));

// console.log(doubleArea(3, 4));
// TEST 1:  doubleArea(3, 4)  ->  24
// TEST 2:  doubleArea(5, 2)  ->  20
// TEST 3:  doubleArea(1, 1)  ->  2
/* ============================================================
   LESSON 2 â€” DATA TYPES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: typeof, Number(), String(), Boolean(), + - * / ,
   and the types number / string / boolean / undefined.

   Run:  node 2-data-types.js
   Switch on a test by deleting its leading "// ".
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. What type is it? -----
// Write `whatType(value)` that RETURNS the typeof string of value.
// your code here
function whatType(value) {
  return typeof value;
}
console.log("------2-1-----");

console.log(whatType(42));
console.log(whatType("hi"));
console.log(whatType(true));

// console.log(whatType(42));
// TEST 1:  whatType(42)      ->  "number"
// TEST 2:  whatType("hi")    ->  "string"
// TEST 3:  whatType(true)    ->  "boolean"

// ----- 2. String to number -----
// Write `toNumber(text)` that RETURNS text turned into a real number.
// your code here
function tonumber(text) {
  return Number(text);
}
console.log("-----2--2-----");

console.log(tonumber("42"));
console.log(tonumber("7") + 1);
console.log(tonumber("100") * 2);

// console.log(toNumber("42"));
// TEST 1:  toNumber("42")        ->  42
// TEST 2:  toNumber("7") + 1     ->  8
// TEST 3:  toNumber("100") * 2   ->  200

// ----- 3. Number to string -----
// Write `toText(n)` that RETURNS n turned into a string.
// your code here
function toText(n) {
  return String(n);
}
console.log("-----2--3----");

console.log(toText(42));
console.log(typeof toText(5));
console.log(toText(9) + "!");

// console.log(toText(42));
// TEST 1:  toText(42)            ->  "42"
// TEST 2:  typeof toText(5)      ->  "string"
// TEST 3:  toText(9) + "!"       ->  "9!"

// ----- 4. The string-plus-number trap -----
// Write `mix(a, b)` where a is a number and b is a string. RETURN a + b.
// (Find out what JS does when you add a number to a string.)
// your code here
function mix(a, b) {
  String(a);
  return a + b;
}
console.log("------2-4-----");

console.log(mix(5, "5"));
console.log(mix(1, "0"));
console.log(typeof mix(2, "x"));

// console.log(mix(5, "5"));
// TEST 1:  mix(5, "5")       ->  "55"
// TEST 2:  mix(1, "0")       ->  "10"
// TEST 3:  typeof mix(2, "x") ->  "string"

// ----- 5. Is it a real number? -----
// Write `isRealNumber(text)` that RETURNS true if Number(text) is a valid
// number, false if it is NaN.
// your code here
function isRealNumber(text) {
  return !isNaN(Number(text));
}
console.log("-----2-5------");

console.log(isRealNumber("42"));
console.log(isRealNumber("hello"));
console.log(isRealNumber("3.14"));

// console.log(isRealNumber("42"));
// TEST 1:  isRealNumber("42")    ->  true
// TEST 2:  isRealNumber("hello") ->  false
// TEST 3:  isRealNumber("3.14")  ->  true

// ----- 6. Force a boolean -----
// Write `asBoolean(value)` that RETURNS value turned into a true/false
// with Boolean(value).
// your code here
function asBoolean(value) {
  return Boolean(value);
}
console.log("----2-6-----");

console.log(asBoolean(0));
console.log(asBoolean(1));
console.log(asBoolean(""));

// console.log(asBoolean(0));
// TEST 1:  asBoolean(0)    ->  false
// TEST 2:  asBoolean(1)    ->  true
// TEST 3:  asBoolean("")   ->  false

// ----- 7. Undefined check -----
// Write `isMissing(value)` that RETURNS true when value is undefined.
// your code here
function isMissing(value) {
  return value === undefined;
}
console.log("-----2-7-----");

console.log(isMissing(undefined));
console.log(isMissing(isMissing(0)));
console.log(isMissing("x"));

// console.log(isMissing(undefined));
// TEST 1:  isMissing(undefined)  ->  true
// TEST 2:  isMissing(0)          ->  false
// TEST 3:  isMissing("x")        ->  false

// ----- 8. Round-trip a digit -----
// Write `firstDigitType(n)`. Turn n into a string, take its first
// character, RETURN the typeof that character.
// your code here
function firstDigitType(n) {
  return typeof String(n);
}
console.log("------2-8----");

console.log(firstDigitType(42));
console.log(firstDigitType(7));
console.log(firstDigitType(900));

// console.log(firstDigitType(42));
// TEST 1:  firstDigitType(42)   ->  "string"
// TEST 2:  firstDigitType(7)    ->  "string"
// TEST 3:  firstDigitType(900)  ->  "string"
/* ============================================================
   LESSON 3 â€” OPERATORS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: < > <= >= === !== , && || ! , % , + - * / .
   Every answer RETURNS a value (often true/false). No if needed.

   Run:  node 3-operators.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Is it bigger? -----
// Write `isBigger(a, b)` that RETURNS true when a is greater than b.
// your code here
function isBigger(a, b) {
  return a > b;
}
console.log("-----3-1-----");

console.log(isBigger(10, 3));
console.log(isBigger(3, 10));
console.log(isBigger(5, 5));

// console.log(isBigger(10, 3));
// TEST 1:  isBigger(10, 3)  ->  true
// TEST 2:  isBigger(3, 10)  ->  false
// TEST 3:  isBigger(5, 5)   ->  false

// ----- 2. Exactly equal -----
// Write `sameValueAndType(a, b)` that RETURNS true only when a === b.
// your code here
function sameValueAndType(a, b) {
  return a === b;
}
console.log("-----3-2------");

console.log(sameValueAndType(5, 5));
console.log(sameValueAndType(5, "5"));
console.log(sameValueAndType("a", "a"));

// console.log(sameValueAndType(5, 5));
// TEST 1:  sameValueAndType(5, 5)     ->  true
// TEST 2:  sameValueAndType(5, "5")   ->  false
// TEST 3:  sameValueAndType("a", "a") ->  true

// ----- 3. In working hours -----
// Write `isWorkHour(hour)` that RETURNS true when hour is >= 9 AND < 17.
// your code here
function isWorkHour(hour) {
  return hour >= 9 && hour < 17;
}
console.log("-----3--3---");

console.log(isWorkHour(10));
console.log(isWorkHour(17));
console.log(isWorkHour(9));
console.log(isWorkHour(8));

// console.log(isWorkHour(10));
// TEST 1:  isWorkHour(10)  ->  true
// TEST 2:  isWorkHour(17)  ->  false
// TEST 3:  isWorkHour(8)   ->  false

// ----- 4. Weekend day -----
// Write `isWeekend(day)` that RETURNS true when day is "Sat" OR "Sun".
// your code here
function isWeekend(day) {
  return day === "sat" || day === "sun";
}
console.log("-----3-4----");

console.log(isWeekend("sat"));
console.log(isWeekend("sun"));
console.log(isWeekend("mon"));

// console.log(isWeekend("Sat"));
// TEST 1:  isWeekend("Sat")  ->  true
// TEST 2:  isWeekend("Sun")  ->  true
// TEST 3:  isWeekend("Mon")  ->  false

// ----- 5. Flip it -----
// Write `flip(value)` that RETURNS the NOT of value (the opposite boolean).
// your code here
function flip(value) {
  return !value;
}
console.log("-----3-5-----");

console.log(flip(true));
console.log(flip(false));
console.log(flip(0));

// console.log(flip(true));
// TEST 1:  flip(true)   ->  false
// TEST 2:  flip(false)  ->  true
// TEST 3:  flip(0)      ->  true

// ----- 6. Even number -----
// Write `isEven(n)` that RETURNS true when n divides evenly by 2 (use %).
// your code here

// console.log(isEven(8));
// TEST 1:  isEven(8)   ->  true
// TEST 2:  isEven(7)   ->  false
// TEST 3:  isEven(0)   ->  true

// ----- 7. In range (inclusive) -----
// Write `inRange(n)` that RETURNS true when n is between 50 and 100 inclusive.
// your code here

// console.log(inRange(75));
// TEST 1:  inRange(75)   ->  true
// TEST 2:  inRange(50)   ->  true
// TEST 3:  inRange(101)  ->  false

// ----- 8. Default fallback -----
// Write `displayName(nick)` that RETURNS nick, OR "Guest" when nick is empty.
// (Use the || operator.)
// your code here

// console.log(displayName(""));
// TEST 1:  displayName("")     ->  "Guest"
// TEST 2:  displayName("Sam")  ->  "Sam"
// TEST 3:  displayName("x")    ->  "x"

// ----- 9. Leap-ish check -----
// Write `divisibleByBoth(n)` that RETURNS true when n divides evenly by
// BOTH 3 and 5.
// your code here

// console.log(divisibleByBoth(15));
// TEST 1:  divisibleByBoth(15)  ->  true
// TEST 2:  divisibleByBoth(9)   ->  false
