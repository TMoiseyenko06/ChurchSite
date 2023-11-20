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
