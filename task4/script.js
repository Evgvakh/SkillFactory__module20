const btn = document.querySelector('.j-btn');


const request = (x) => {
    let path = `https://jsonplaceholder.typicode.com/users/${x}/todos`;
    return fetch(path)
        .then((response) => {
            return response.json();
        })
        .then((data) => { return data; })
        .catch(() => { console.log('Пользователь с указанным ID не найден'); });
};

btn.addEventListener('click', async () => {
 
    let userNumber = document.querySelector('.input').value;    
    
    const requestResult = await request(userNumber);
    console.log(requestResult);
    
    const div = document.querySelector(".list__container");
    div.innerHTML = '';
    
    const ol = document.createElement("ol");

    div.appendChild(ol);

    for (let i = 0; i < requestResult.length; i++) {
        
        if (!requestResult[i].completed) {
            const liNormal = document.createElement("li");
            liNormal.textContent = requestResult[i].title;
            ol.appendChild(liNormal);
        } else {
            const liLine = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = requestResult[i].title;
            liLine.appendChild(span);
            ol.appendChild(liLine);
        }
    }           
    });


    // btn.addEventListener('click', async () => {
 
    //     let userNumber = document.querySelector('.input').value;    
        
    //     const requestResult = await request(userNumber);
    //     console.log(requestResult);
        
    //     const div = document.createElement("div.list__container");
        
    //     const ul = document.createElement("ul.list");
    
    //     document.body.append(div);
    //     div.appendChild(ul);
    
    //     for (let i = 0; i < requestResult.length; i++) {
            
    //         const li = document.createElement("li");
    //         li.textContent = requestResult[i].title;
    //         ul.appendChild(li);
    //         }           
    //     });
