const pageInput = document.querySelector('#page');

const limitInput = document.querySelector('#limit');

const button = document.querySelector('button');

const divMain = document.querySelector('.main-container');

function userRequest(target) {
    return fetch (target)
        .then((response) => { return response.json();})
        .then((result) => { return result;});
}

window.onload = function() {
    const storageItem = localStorage.getItem('img0');
    console.log(storageItem);
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
};


button.addEventListener('click', async () => {
    let pageInputValue = pageInput.value;
    let limitInputValue = limitInput.value;
    console.log(pageInputValue, limitInputValue);
    let link = `https://picsum.photos/v2/list?page=${pageInputValue}&limit=${limitInputValue}`; 
    
    const images = [];

    let userRequestResult = await userRequest(link);

    // console.log(userRequestResult[1].url);

    function getImage(arr) {
        for (let i in arr) {
            images.push(arr[i].url);
            localStorage.setItem(`img${i}`, arr[i].url);
        }
    }

    getImage(userRequestResult);

    console.log(images);

    // localStorage.setItem()

    console.log(userRequestResult);



})