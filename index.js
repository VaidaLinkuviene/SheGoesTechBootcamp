let arr = [9, 8, 5, 6, 1, 0, 3, 2, 4, 8, 9, 6, 5];

// MAP

const doubleNumber = () => {
  let doubleItems = [];
  arr.forEach((item) => {
    doubleItems.push(item * 2);
  });
  return doubleItems;
};

const mapDoubleNumber = () => {
  let result = arr.map((item) => item * 2);
  return result;
};

// Filter

const filterNumbers = () => {
  let doubleItems = [];
  arr.forEach((item) => {
    if (item > 5) {
      doubleItems.push(item);
    }
  });
  return doubleItems;
};

const filterFilterNumbers = () => {
  let result = arr.filter((item) => item > 5);
  return result;
};

// Every

const everyNumbers = () => {
    let result = true; 
    for(let i=0; i<arr.length; i++){
      if(arr[i]<=0){
        result = false;
        break;
      }
    }
return result;
}

const everyEveryNumbers = () => {
  let result = arr.every((item) => item > 0);
  return result;
};

// SOME

const someNumbers = () => {
  let result = false; 
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2 ===0){
      result = true;
      break;
    }
  }
return result;
}
  
  const someSomeNumbers = () => {
    let result = arr.some((item) => item%2 === 0);
    return result;
  };

  // REDUCE

  const reduceNumbers = () => {
    sum = 0;
    for(let i=0; i<arr.length; i++){
      sum = sum + arr[i];
    }
    return sum;
  };
  
  const reduceReduceNumbers = () => {
    let result = arr.reduce((initial ,item) => initial + item, 0);
    return result;
  };

  // SORT

  const sortNumbers = () => {
    for(let i=1; i<arr.length; i++){
      for(let j=0; j<i; j++){
        if(arr[i]<arr[j]){
          let number = arr[i];
          arr[i] = arr[j];
          arr[j]= number;
        }
      }
    }
    return arr;
  };
  console.log("sortNumbers", sortNumbers());
  
  const sortSortNumbers = () => {
    arr.sort();
    return arr;
  };
  console.log("sortSortNumbers", sortSortNumbers());
