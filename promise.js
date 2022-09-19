let number = Math.floor(Math.random() * (100 - 1)) + 1;

const myPromise = new Promise((resolve, reject) => {
  if (number%2 == 0) {
    resolve({
      message: "Завершено успешно.",
      number: number,
    });
  } else {
    reject({
      message: "Завершено с ошибкой.",
      number: number,
    });
  }
});

myPromise
   .then((result) => {
    console.log(result.message, `Сгенерированное число — ${number}`);    
  })

   .catch((error) => {
    console.log(error.message, `Сгенерированное число — ${number}`)
})


