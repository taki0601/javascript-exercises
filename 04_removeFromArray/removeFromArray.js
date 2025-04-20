const removeFromArray = function (x, ...y) {
  // 配列から指定されたものと一致するものを全て削除する
  const Items = x;
  const selectedItem = y;

  /* 
  filter関数: 既存の配列から指定された条件に該当する要素を持つ新しい配列を返す
  
  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  const result = words.filter((word) => word.length > 6);

  console.log(result); 
  
  */
  // Expected output: Array ["exuberant", "destruction", "present"]

  const result = Items.filter((item) => {
    return !selectedItem.includes(item);
  });

  /* 
  includes関数: 特定の要素が配列に含まれているか true / false を返す

  const array1 = [1, 2, 3];
  console.log(array1.includes(2));
  // Expected output: true

  const pets = ["cat", "dog", "bat"];
  console.log(pets.includes("cat"));
  // Expected output: true

  console.log(pets.includes("at"));
  // Expected output: false

 */

  const newResult = Array.from(new Set(result));
  return newResult;
};

// Do not edit below this line
module.exports = removeFromArray;
