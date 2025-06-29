const imagesBread = [
    {
        title: "Körnerbrot",
        path: "./img/bread1.jpg",
        alt: "Körnerbrot, von oben Fotografiert, in Scheiben geschnitten.",
        id: 1
    },
    {
        title: "Croissant",
        path: "./img/bread2.jpg",
        alt: "Croissant, von oben fotografiert.",
        id: 2

    },
    {
        title: "Baguette",
        path: "./img/bread3.jpg",
        alt: "Mehrere Baguettes, von der Seite fotografiert.",
        id: 3
    },
    {
        title: "Schrippen",
        path: "./img/bread4.jpg",
        alt: "Mehrere helle Sonntagsbrötchen.",
        id: 4
    },
    {
        title: "Einfaches Weizenbrot",
        path: "./img/bread5.jpg",
        alt: "Ein Weizenbrot, in der Mitte aufgeschnitten.",
        id: 5
    },
    {
        title: "Helle Steinofenbrötchen",
        path: "./img/bread6.jpg",
        alt: "Helle Steinofenbrötchen.",
        id: 6
    },
    {
        title: "Hefezopf mit Aufstrich",
        path: "./img/bread7.jpg",
        alt: "Ein Hefezopf, aufgeschnitten, mit Marmelade und Beeren garniert",
        id: 7
    },
    {
        title: "Saftiges Sauerteigbrot",
        path: "./img/bread8.jpg",
        alt: "Ein herrliches Sauerteigbrot, unglaublich schmackhaft, geschnitten und von vorne fotografiert.",
        id: 8
    },
    {
        title: "Brotmischung",
        path: "./img/bread9.jpg",
        alt: "Verschiedene Brotkreationen, von oben fotografiert.",
        id: 9
    },
    {
        title: "Landbrote",
        path: "./img/bread10.jpg",
        alt: "Viele Landbrote nebeneinander angeordnet, von der Seite fotografiert.",
        id: 10
    },
    {
        title: "Körnerbaguette",
        path: "./img/bread11.jpg",
        alt: "Mehrere Körnerbaguettes im Brotkorb, von oben fotografiert.",
        id: 11
    },
    {
        title: "Hefezopf ganz",
        path: "./img/bread12.jpg",
        alt: "Ein ganzer Hefezopf von oben fotografiert. Daneben sind ein Messer und ein Teelöffel angeordnet.",
        id: 12
    },
    {
        title: "Sauerteig",
        path: "./img/bread13.jpg",
        alt: "Sauerteig im Glas, von oben fotografiert",
        id: 13
    },
    {
        title: "Einfaches Weizenbrot",
        path: "./img/bread14.jpg",
        alt: "Einfaches Weizenbrot auf einem Backofenrost",
        id: 14
    },
    {
        title: "Helles Brötchen",
        path: "./img/bread15.jpg",
        alt: "Ein helles Brötchen mit Sesam garniert.",
        id: 15
    }
]

const imagesContainer = document.getElementById("container-images")

// function objectVars(index) {

//         const imageTitle = imagesBread[index].title;
//         const imagePath = imagesBread[index].path;
//         const imageAltText = imagesBread[index].alt;
//         const imageID = imagesBread[index].id

//         return imageTitle, imagePath, imageAltText, imageID

// };



function renderImages() {

    for (i = 0; i < imagesBread.length; i++) {

        const imageTitle = imagesBread[i].title;
        const imagePath = imagesBread[i].path;
        const imageAltText = imagesBread[i].alt;
        const imageID = imagesBread[i].id

        imagesContainer.innerHTML += addPictures(imagePath, imageAltText, imageTitle, imageID);

    }
};

renderImages();

function activateDialog(imgSrc, imgTitle, imgID) {

    const dialogRef = document.getElementById('dialog');

    dialogRef.classList.toggle('d-none');

    dialogRef.innerHTML = addDialog(imgSrc, imgTitle, imgID);
}

function closeDialog() {

    const dialogRef = document.getElementById('dialog');
    dialogRef.classList.toggle('d-none');
}

function setNewValues(imgTitle, imgPath, imgAlt, imgID) {

    const title = document.getElementById('image-title');
    const img = document.getElementById('dialog-img')
    const id = document.getElementById('image-id');

    title.innerHTML = imgTitle;
    img.src = imgPath;
    img.alt = imgAlt;
    id.innerHTML = imgID;
}

function imgForward() {

    for (i = 0; i < imagesBread.length; i++) {

        const currentID = document.getElementById("image-id").innerHTML

        if (i == imagesBread.length - 1) {

            const imageTitle = imagesBread[0].title;
            const imagePath = imagesBread[0].path;
            const imageAltText = imagesBread[0].alt;
            const imageID = imagesBread[0].id;

            setNewValues(imageTitle, imagePath, imageAltText, imageID);

            break;
        }

        if (i == currentID - 1) {

            const imageTitle = imagesBread[i + 1].title;
            const imagePath = imagesBread[i + 1].path;
            const imageAltText = imagesBread[i + 1].alt;
            const imageID = imagesBread[i + 1].id;

            setNewValues(imageTitle, imagePath, imageAltText, imageID);

            break;
        }
    }
}

function imgBackward() {

    for (i = 0; i < imagesBread.length; i++) {

        const currentID = document.getElementById("image-id").innerHTML

        if (i == currentID - 1 && i == 0) {

            const imageTitle = imagesBread[imagesBread.length - 1].title;
            const imagePath = imagesBread[imagesBread.length - 1].path;
            const imageAltText = imagesBread[imagesBread.length - 1].alt;
            const imageID = imagesBread[imagesBread.length - 1].id;

            setNewValues(imageTitle, imagePath, imageAltText, imageID);

            break;
        }

        if (i == currentID - 1) {

            const imageTitle = imagesBread[i - 1].title;
            const imagePath = imagesBread[i - 1].path;
            const imageAltText = imagesBread[i - 1].alt;
            const imageID = imagesBread[i - 1].id

            setNewValues(imageTitle, imagePath, imageAltText, imageID);

            break;
        }
    }
}
