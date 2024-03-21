const arrowUp = document.querySelector("#arrow-up");
const arrowDown = document.querySelector("#arrow-down");
const autoplayBtn = document.querySelector("button")

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

images.forEach((game) => {
    let thumbnailContainer = document.querySelector("#thumbnail")
    let newImgInThumbnail = document.createElement("img")
    newImgInThumbnail.setAttribute("src", `${game.image}`)
    thumbnailContainer.append(newImgInThumbnail);
});

let counter = 0

let activeImage = images[counter];
createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
whatsTheActiveImg()


const allImgs = document.querySelectorAll("#thumbnail>img");
arrowUp.addEventListener("click", function(){
    previousImg();

    whatsTheActiveImg();

    let activeImage = images[counter];
    createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
})

arrowDown.addEventListener("click", function(){
    nextImg();

    whatsTheActiveImg();

    let activeImage = images[counter];
    createImgTemplate(activeImage.image, activeImage.title, activeImage.text)
})

function createImgTemplate(path, game, paragr){
    const imgShownContainer = document.querySelector("#shown-img");
    console.log(imgShownContainer)

    imgShownContainer.innerHTML = `
    <img src="${path}" alt="${game.toLowerCase()}">
    <div id="description">
        <h3>${game}</h3>
        <p>${paragr}</p>
    </div>
    `
    console.log(imgShownContainer)
}

function previousImg(){
    console.log(counter)
    if (counter > 0){
    counter--
    } else {
        counter = images.length - 1;
    }
    console.log(counter)
}

function nextImg(){
    console.log(counter)
    if (counter < images.length - 1){
    counter++
    } else {
        counter = 0
    }
    console.log(counter)
}

function whatsTheActiveImg(){
    const allImgs = document.querySelectorAll("#thumbnail>img");
    const nowActive = document.querySelector(".active");
    
    if(nowActive !== null){
        nowActive.classList.remove("active");
    }

    allImgs[counter].classList.add("active");
}