const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const result = {
  list: [
    { name: "", 
      age: "",
      prof: "", 
      lang: "" 
      },
    { name: "", 
      age: "",
      prof: "", 
      lang: "" 
      },
  ]
}

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

for (let i=0; i<2; i++) {
  let firstName = xmlDOM.querySelectorAll("first")[i];  
  let secondName = xmlDOM.querySelectorAll("second")[i];
  let name = firstName.textContent + " " + secondName.textContent;
  result.list[i].name = name;
  let age = Number(xmlDOM.querySelectorAll("age")[i].textContent);
  result.list[i].age = age;
  let prof = xmlDOM.querySelectorAll("prof")[i].textContent;
  result.list[i].prof = prof;
  let firstNameAttr = xmlDOM.querySelectorAll("name")[i];
  let lang = firstNameAttr.getAttribute('lang');
  result.list[i].lang = lang;  
}

console.log(result);