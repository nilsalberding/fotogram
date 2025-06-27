const imagesBread = [
    {
        name: "Körnerbrot",
        path: "./img/bread1.jpg",
        alt: "Körnerbrot, von oben Fotografiert, in Scheiben geschnitten."
    },
        {
        name: "Croissant",
        path: "./img/bread2.jpg",
        alt: "Croissant, von oben fotografiert."
    },
        {
        name: "Baguette",
        path: "./img/bread3.jpg",
        alt: "Mehrere Baguettes, von der Seite fotografiert."
    },
        {
        name: "Schrippen",
        path: "./img/bread4.jpg",
        alt: "Mehrere helle Sonntagsbrötchen."
    },
        {
        name: "Einfaches Weizenbrot",
        path: "./img/bread5.jpg",
        alt: "Ein Weizenbrot, in der Mitte aufgeschnitten."
    },
        {
        name: "Helle Steinofenbrötchen",
        path: "./img/bread6.jpg",
        alt: "Helle Steinofenbrötchen."
    },
        {
        name: "Hefezopf mit Aufstrich",
        path: "./img/bread7.jpg",
        alt: "Ein Hefezopf, aufgeschnitten, mit Marmelade und Beeren garniert"
    },
        {
        name: "Saftiges Sauerteigbrot",
        path: "./img/bread8.jpg",
        alt: "Ein herrliches Sauerteigbrot, unglaublich schmackhaft, geschnitten und von vorne fotografiert."
    },
        {
        name: "Brotmischung",
        path: "./img/bread9.jpg",
        alt: "Verschiedene Brotkreationen, von oben fotografiert."
    },
        {
        name: "Landbrote",
        path: "./img/bread10.jpg",
        alt: "Viele Landbrote nebeneinander angeordnet, von der Seite fotografiert."
    },
        {
        name: "Körnerbaguette",
        path: "./img/bread11.jpg",
        alt: "Mehrere Körnerbaguettes im Brotkorb, von oben fotografiert."
    },
        {
        name: "Hefezopf ganz",
        path: "./img/bread12.jpg",
        alt: "Ein ganzer Hefezopf von oben fotografiert. Daneben sind ein Messer und ein Teelöffel angeordnet."
    },
        {
        name: "Sauerteig",
        path: "./img/bread13.jpg",
        alt: "Sauerteig im Glas, von oben fotografiert"
    },
        {
        name: "Einfaches Weizenbrot",
        path: "./img/bread14.jpg",
        alt: "Einfaches Weizenbrot auf einem Backofenrost"
    },
        {
        name: "Helles Brötchen",
        path: "./img/bread15.jpg",
        alt: "Ein helles Brötchen mit Sesam garniert."
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
};

renderImages();
