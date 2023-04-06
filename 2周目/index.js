let apiResponse; // 駝峰式命名

// 陣列 Arry
let scoreStuden = [15, 30, 50, 75, 100];
scoreStuden.push(95);
console.log(scoreStuden.length);

// 物件 Object
let peter = {
  name: "Peter",
  age: 18,
  score: "100",
  father: {
    name: "Hank",
    age: "50",
    phone: "123456789",
  },
};
let key = peter;
console.log(key.father.age);
console.log(key["father"]["age"]);

let a = 10;
let b = "20"; // 變數型態為字串
console.log(a + Number(b)); // 用 Number把 B 變回 數字 , 印出 30

// if 判斷式
let Score = 100;
if (Score % 5 === 0) {
  // % 模運算, 取餘數 , 假設能被 n 整除, 代表為n 的倍數
  console.log("為五的倍數");
} else {
  console.log("不是五的倍數");
}

// if .. else if .. else 不只一個條件要判斷

/* 
    判定 65歲以上為老人 , 18~64 歲為年輕人 , 18歲以下(不包含18)為小孩
    age >= 65, old
    18 <= age < 65, young
    age < 18, children  
*/

let age = 100;
if (age >= 65 && age <= 120) {
  // 設定最大年齡為 120 , && = and and 兩邊條件都要為true
  console.log("old");
} else if (age < 65 && age >= 18) {
  // 設定年齡為 18~65 之間
  console.log("young");
} else if (age < 18 && age > 0) {
  // 設定年齡最小為 0 歲
  console.log("children");
} else {
  console.log("請重新輸入"); // 假設輸入以上都不是的數字, 印出重新輸入
}

// score >= 60 pass
// score < 60 fail
// 100 === you are no1
let scores = 59;
if (scores === 100) {
  console.log("you are no1!");
} else if (scores >= 60) {
  console.log("pass");
} else if (scores < 60) {
  console.log("fail");
}

let height = 1.78;
let weight = 75;
let bmi = weight / (height * height);
console.log(bmi);
if (bmi >= 35) {
  console.log("重度肥胖");
} else if (bmi < 35 && bmi >= 30) {
  console.log("中度肥胖");
} else if (bmi < 30 && bmi >= 27) {
  console.log("輕度肥胖");
} else if (bmi < 27 && bmi >= 24) {
  console.log("過重");
} else if (bmi < 24 && bmi >= 18.5) {
  console.log("正常範圍");
} else if (bmi < 18.5) {
  console.log("體重過輕");
}
