const data: number[] = [12, 23, 34, 45];

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeOddNumbers(arr: number[]): Promise<void> {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(`Удалено нечетное число: ${arr[i]}`);
      arr.splice(i, 1);
      i--; 

      console.log(`Текущий массив: ${arr.join(', ')}`);
      await delay(1000);
    }
  }
}

removeOddNumbers(data.slice())
.then(()=>{
  console.log("Конец программы...")
})