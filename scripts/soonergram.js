var picPaths = [
    {
        src: 'images/riley.jpg',
        href: 'images/riley.jpg'
    },
    {
        src: 'images/okla_team.jpg',
        href: 'images/okla_team.jpg'
    },
    {
        src: 'images/mayfield.jpg',
        href: 'images/mayfield.jpg'
    },
    {
        src: 'images/rose_bowl.jpg',
        href: 'images/rose_bowl.jpg'
    },
    {
        src: 'images/anderson.jpg',
        href: 'images/anderson.jpg'
    },
    {
        src: 'images/ok_players.jpg',
        href: 'images/ok_players.jpg'
    },
    {
        src: 'images/stats.jpg',
        href: 'images/stats.jpg'
    },
    {
        src: 'images/game.jpg',
        href: 'images/game.jpg'
    },
    {
        src: 'images/okla_team2.jpg',
        href: 'images/okla_team2.jpg'
    },

]

var picItems = [];
var picsContainer = document.querySelector("[data-pics-container]");
picPaths.forEach(function (picPath) {
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', picPath.src);
    var anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', picPath.href);
    anchorElement.appendChild(imgElement);
    picItems.push(anchorElement);
    var divElement = document.createElement('div');
    divElement.setAttribute('class', 'img-container');
    divElement.appendChild(anchorElement);
    picsContainer.appendChild(divElement);
});

var IMG_SEL = "[data-img-container]";
// var OVERLAY_SEL = "[data-pics-target";

//var picItems = document.querySelectorAll(IMG_SEL);
// var overlayItems = document.querySelector(OVERLAY_SEL);

picItems.forEach(function (picItem) {
    picItem.addEventListener('click', function(event) {
        event.preventDefault();
        var divOverlay = document.createElement('div');
        divOverlay.setAttribute('class','img-overlay');
        var clonedAnchor = picItem.cloneNode(true);
        divOverlay.appendChild(clonedAnchor);
        document.body.appendChild(divOverlay);
        clonedAnchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.removeChild(divOverlay);
        });

    });
});

// addPicture('images/riley.jpg');
// addPicture('images/okla_team.jpg');
// addPicture('images/riley.jpg'); 
