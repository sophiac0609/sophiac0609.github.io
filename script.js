var i =10;

function updateCount() {
    i = i - 1;

    countobj = document.getElementById("count");
    console.log("Updating i: " + i);
    countobj.innerHTML = "<b color = >" + i + "</b>";

    //Change background color to a darker red as i decreases
    var intensity = Math.max(20, 255 - (i * 20.5));
    document.body.style.backgroundColor = "rgb(" + intensity + ", 0, 0)";
    if (i<=0){ //single = assign, double == comparison
      countobj.innerHTML = "<b style='color: #FFFF00;'>BOOM!</b>";
    }
}
function initialCarousel(){
const images = [
    {url: 'images/capy1.png', caption: 'Capy bara 1'},
    {url: 'images/capy2.png', caption: 'Capy bara 2'},
    {url: 'images/capy3.png', caption: 'Capy bara 3'}
    ];

const caroImage = document.getElementById("caroImage");
const caption = document.getElementById("caption")
const prevButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function updateImage() {
    caroImage.src = images[currentIndex].url;
    caption.textContent = images[currentIndex].caption;
}
prevButton.addEventListener("click", function(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex = image.length - 1;
    }
    updateImage();
})
nextButton.addEventListener("click", function(){
    currentIndex++;

    if (currentIndex >= images.length){
        currentIndex = 0;
    }

    updateImage();
}
)

updateImage();
}
