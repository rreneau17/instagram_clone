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

var picsContainer = document.querySelector("[data-pics-container]");
picPaths.forEach(function (picPath) {
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', picPath.src);
    var anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', picPath.href);
    anchorElement.appendChild(imgElement);
    var divElement = document.createElement('div');
    divElement.setAttribute('class', 'img-container');
    divElement.appendChild(anchorElement);
    picsContainer.appendChild(divElement);
});

// addPicture('images/riley.jpg');
// addPicture('images/okla_team.jpg');
// addPicture('images/riley.jpg'); 
