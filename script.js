const imagesBread = [
    {
        name: "Brot 1",
        path: "./img/bread1.jpg",
        alt: "Ein herrliches Brot"
    }
]

const imagesContainer = document.getElementById("container-images")

function renderImages(){

    for (i = 0; i < imagesBread.length; i++) {

        // const imageName = imagesBread[i].name;
        const imagePath = imagesBread[i].path;
        const imageAltText = imagesBread[i].alt;

        imagesContainer.innerHTML += addPictures(imagePath, imageAltText);

    }
}

function addPictures(src, alt) {
    return `
    <img src="${src}" alt="${alt}">
    `
}

renderImages();
