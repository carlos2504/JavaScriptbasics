(function () {
    "use strict";
    let currentImage = 0;
    const myPhotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const container = document.querySelector('div');
    const previous = document.querySelectorAll('a')[0];
    const next = document.querySelectorAll('a')[1];
    next.addEventListener('click', function (event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > myPhotos.length - 1) {
            currentImage = 0;
        }
        /* const newSlide = document.createElement('img');
        newSlide.src = `slides/${myPhotos[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        } */
        swapImgs();
    });



    previous.addEventListener('click', function (event) {

        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {
            currentImage = myPhotos.length - 1;
        }
        /* const previousSlide = document.createElement('img');
        previousSlide.src= `slides/${myPhotos[currentImage]}`;
        previousSlide.className= 'fadeinimg';
        container.appendChild(previousSlide);
        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        } */
        swapImgs();



    });

    function swapImgs() {
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myPhotos[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }
})();