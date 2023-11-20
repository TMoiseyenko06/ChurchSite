
var div = document.querySelector("#div3");


div.addEventListener("mouseover", function () {

    this.style.width = "350px";
});


div.addEventListener("mouseout", function () {

    this.style.width = "300px";
});


var div = document.querySelector("#div1");


div.addEventListener("mouseover", function () {

    this.style.width = "350px";
});


div.addEventListener("mouseout", function () {

    this.style.width = "300px";
});


var div = document.querySelector("#div2");


div.addEventListener("mouseover", function () {

    this.style.width = "350px";
});


div.addEventListener("mouseout", function () {

    this.style.width = "300px";
});



var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); }

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCPHrq5PCfCOE2wVTTNFakag&maxResults=10&order=date&key=AIzaSyBRHG5LtuK_OD0JxmajOOGqT8GSmJNsqBI")
.then((result)=>{
    return result.json()
}).then((data)=>{
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += `
            <img src="${video.snippet.thumbnails.default.url}">
        `
    }
})