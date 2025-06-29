function addPictures(src, alt, title, id) {
    return `
    <img src="${src}" alt="${alt}" onclick="activateDialog('${src}', '${title}', '${id}')">
    `
}

function addDialog(imgSrc, imgTitle, imgID) {
    return `

    <div id="dialog-window">
        <div>
            <h2 id="image-title">${imgTitle}</h2>
            <button onclick='closeDialog()'>X</button>
        </div>
        <img id="dialog-img" src="${imgSrc}">
        <div id="select-container">
            <button id="button-backward" onclick='imgBackward()'></button>
            <span id="image-id">${imgID}</span>
            <button id="button-forward" onclick='imgForward()'></button>
        </div>
    </div>
        
    `;
}
