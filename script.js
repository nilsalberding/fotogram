const imagesBread = [
    {
        name: "Brot 1",
        path: "./img/bread1.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 2",
        path: "./img/bread2.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 3",
        path: "./img/bread3.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 4",
        path: "./img/bread4.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 5",
        path: "./img/bread5.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 6",
        path: "./img/bread6.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 7",
        path: "./img/bread7.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 8",
        path: "./img/bread8.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 9",
        path: "./img/bread9.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 10",
        path: "./img/bread10.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 11",
        path: "./img/bread11.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 12",
        path: "./img/bread12.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 13",
        path: "./img/bread13.jpg",
        alt: "Ein herrliches Brot"
    },
        {
        name: "Brot 14",
        path: "./img/bread14.jpg",
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
