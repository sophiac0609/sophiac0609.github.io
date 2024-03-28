
    const images = [
    'capy1.png',
    'capy2.png',
    'capy3.png'
    ];

const caroImage = document.getElementById("caroImage");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function updateImage() {
    caroImage.src = images[currentIndex];
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