

let searchForm = document.querySelector('form');
let searchTerm = document.querySelector('input');
let removeGIFS = document.querySelector('#remove');



async function generateGIF(url) {
    let res = await axios.get(url);
    let randNum = Math.floor(Math.random() * 20);
    let GIF = (res.data.data[randNum].images.original.url);
    let newImg = document.createElement('img');
    newImg.src = GIF;
    let newLi = document.createElement('li');
    newLi.append(newImg);
    let ul = document.querySelector('ul');
    ul.append(newLi);

}

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    generateGIF(url);
    searchTerm.value = "";
})

removeGIFS.addEventListener('click', function () {
    document.querySelector('ul').innerHTML = '';
})
