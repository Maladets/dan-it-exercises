function someInput() {
  let arr = [];
  do {
    var val = prompt("input number to add into array", 0);
  }
  while (val == +val && arr.push(+val));
  console.log(arr);
  alert(arr.reduce((sum, num) => sum + num, 0));
};
someInput();
