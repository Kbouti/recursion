// Recursion practice. More detailed progress can be found in testing ground repo. mergeSort function completed 12/10/23 commit: 89bcaab

// ************************************************************************************************************************
// Fibonacci without recursion:

function fibs(number) {
    const array = [0, 1];
    if (number === 0) {
      return [];
    }
    if (number === 1) {
      return [0];
    }
    for (let i = 0; i < number - 2; i++) {
      const secondLast = array[array.length - 2];
      const last = array[array.length - 1];
      const newNumber = secondLast + last;
      array.push(newNumber);
    }
    return array;
  }
  console.log(fibs(4));
  console.log(fibs(8));
  console.log(fibs(5));

  // ************************************************************************************************************************
  // Fibonacci with recursion: 

  function fibsRec(number) {
    if (number === 0) {
      return [];
    }
    if (number === 1) {
      return [0];
    }
    if (number === 2) {
      return [0, 1];
    }
    const array = fibsRec(number - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
  
  console.log(fibsRec(2));
  console.log(fibsRec(3));
  console.log(fibsRec(8));
  
  // For Recursion - we want to break the problem into smaller problems. In this case, we're breaking it down to: add one more number to the array. Or, take the array of the number lower than this, then add one number. 
  // If F represents a function to calculate the fibonacci number at index n, then: 
  // F(n) = f(n-1) + f(n-2)


  // ************************************************************************************************************************
  // mergeSort with recursion:

  function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }
    let halfLength = array.length / 2;
    if (halfLength % 2 !== 1) {
      halfLength += 0.5;
    }
    const halfArray1 = array.slice(0, halfLength);
    const halfArray2 = array.slice(halfLength);
    let sortedHalf1 = mergeSort(halfArray1);
    let sortedHalf2 = mergeSort(halfArray2);
    let storageArray = [];
    for (let i = 0; i < array.length; i++) {
      if (sortedHalf1[0] < sortedHalf2[0]) {
        storageArray.push(sortedHalf1[0]);
        sortedHalf1 = sortedHalf1.splice(1);
      } else if (sortedHalf1[0] > sortedHalf2[0]) {
        storageArray.push(sortedHalf2[0]);
        sortedHalf2 = sortedHalf2.splice(1);
      } else if (sortedHalf1[0] === sortedHalf2[0]){
        storageArray.push(sortedHalf1[0]);
        sortedHalf1 = sortedHalf1.splice(1);
      } else if (sortedHalf1[0] === undefined) {
        storageArray.push(sortedHalf2[0]);
        sortedHalf2 = sortedHalf2.splice(1);
      } else if (sortedHalf2[0] === undefined) {
        storageArray.push(sortedHalf1[0]);
        sortedHalf1 = sortedHalf1.splice(1);
      }
    }
    return storageArray;
  }
  
  // console.log(mergeSort([1]));
  // console.log(mergeSort([4, 2]));
  // console.log(mergeSort([2, 1, 4, 3]));
  // console.log(mergeSort([6, 3, 2, 4, 5, 1]));
  console.log(mergeSort([6, 3, 2, 8, 7, 4, 5, 1]));
  
  console.log(mergeSort([6, 3, 2, 8, 7, 4, 5, 1, 2, 5]));
  console.log(mergeSort([6, 13, 62, 8, 47, 4, 5, 100, 54, 456, 78, 35, 44]));