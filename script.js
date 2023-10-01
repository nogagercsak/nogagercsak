// JavaScript for scrolling left and right
document.querySelector('.scroll-left-button').addEventListener('click', function () {
    document.querySelector('.project-gallery').scrollLeft -= 300; // Adjust as needed
});

document.querySelector('.scroll-right-button').addEventListener('click', function () {
    document.querySelector('.project-gallery').scrollLeft += 300; // Adjust as needed
});
