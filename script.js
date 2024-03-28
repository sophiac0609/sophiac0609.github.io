
    const images = [
    {url: 'images/capy1.png', caption: 'Capy bara 1'},
    {url: 'images/capy2.png', caption: 'Capy bara 2'},
    {url: 'images/capy3.png', caption: 'Capy bara 3'}
    ];

const caroImage = document.getElementById("caroImage");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function updateImage() {
    caroImage.src = images[currentIndex].url;
}
nextButton.addEventListener("click", function(){
    currentIndex++;

    if (currentIndex >= images.length){
        currentIndex = 0;
    }

    updateImage();
}
)

updateImage();