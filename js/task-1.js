function slugify(title) {
  return title
    .toLowerCase() //küçük harf           
    .split(" ")   //boşluklara göre ayır           
    .join("-");  // kelimeleri tire ile birleşti
}             
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
