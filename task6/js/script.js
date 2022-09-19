const pageInput = document.querySelector('#page');

const limitInput = document.querySelector('#limit');

const button = document.querySelector('button');

const divMain = document.querySelector('.main-container');


button.addEventListener('click', async () => {
    let pageInputValue = pageInput.value;
    let limitInputValue = limitInput.value;
    console.log(pageInputValue, limitInputValue);
    
    let link = `https://picsum.photos/v2/list?page=${pageInputValue}&limit=${limitInputValue}`; 
    
    const storageItem = localStorage.getItem('img0');

    if (storageItem) {
        divMain.innerHTML = '';
        for (let n = 0; n < localStorage.length; n++) {
            let divImage = document.createElement('div');
            divMain.appendChild(divImage);
            let image = document.createElement('img');
            image.setAttribute("src", localStorage[`img${n}`]);
            divImage.appendChild(image);            
        }        
    } 

    localStorage.clear();

    function userRequest(target) {
        return fetch (target)
            .then((response) => { return response.json();})
            .then((result) => { return result;});
    }
    
    const images = [];

    let userRequestResult = await userRequest(link);

    function getImage(arr) {
        for (let i in arr) {
            images.push(arr[i].url);            
        }
    }
    getImage(userRequestResult);

    for (let i in images) {
        let divImage = document.createElement('div');
        divMain.appendChild(divImage);
        let image = document.createElement('img');
        image.setAttribute("src", images[i]);
        divImage.appendChild(image);
        localStorage.setItem(`img${i}`, images[i]);
    }
       

    console.log(images);

    console.log(userRequestResult);

    console.log(storageItem);
    
});