const array = {
    name: "Anton",
    age: 36,
    skills: ["Javascript", "HTML", "CSS"],
    salary: 80000
  }
  
  const arrayJSON = JSON.stringify(array);
  
  console.log(arrayJSON);
  
  const newArray = JSON.parse(arrayJSON);
  
  console.log(newArray);