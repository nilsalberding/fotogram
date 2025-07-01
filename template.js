function addPictures(obj) {
    return `
    <img src="${obj.path}" alt="${obj.alt}" onclick="activateDialog('${obj.path}', '${obj.alt}', '${obj.title}', '${obj.id}')">
    `
}

function addDialog(imgSrc, imgAlt, imgTitle, imgID, maxImg) {
    return `

    <div id="dialog-window">
        <h2 id="image-title">${imgTitle}</h2>
        <button id="button-close" onclick='closeDialog(event)'>X</button>
        <img id="dialog-img" src="${imgSrc}" alt="${imgAlt}">
        <button id="button-backward"></button>
        <span id="image-id">${imgID}/${maxImg}</span>
        <button id="button-forward"></button>
    </div>
        
    `;
}
