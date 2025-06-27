function addPictures(src, alt, title, id) {
    return `
    <img src="${src}" alt="${alt}" onclick="activateDialog('${src}', '${title}', '${id}')">
    `
}

function addDialog(imgSrc, imgTitle, imgID) {
    return `

    <div id="dialog-window">
        <div>
            <h2>${imgTitle}</h2>
            <button onclick='closeDialog()'>X</button>
        </div>
        <img id="dialog-img" src="${imgSrc}">
        <div id="select-container">
            <button id="button-backward"><-</button>
            <span id="image-id">${imgID}/15</span>
            <button id="button-forward" onclick='imgForward()'>-></button>
        </div>
    </div>
        
    `;
}

// function addNewDialog(imgSrc, imgAlt, imgTitle, imgID) {
//     return ` 
//             <div>
//                 <h2>${imgTitle}</h2>
//                 <button onclick='closeDialog()'>X</button>
//             </div>
//             <img id="dialog-img" src="${imgSrc}" alt="${imgAlt}>
//             <div id="select-container">
//                 <button id="button-backward"><-</button>
//                 <span id="image-id">${imgID}/15</span>
//                 <button id="button-forward" onclick='imgForward()'>-></button>
//             </div>
//             `

// }