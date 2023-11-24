// ...

function loadYouTubeAPI() {
   gapi.client.init({
       apiKey: 'AIzaSyBRHG5LtuK_OD0JxmajOOGqT8GSmJNsqBI',
   }).then(function () {
       return gapi.client.load('youtube', 'v3');
   }).then(function () {
       // Call the function to get the latest videos
       getLatestVideos();
   }).catch(function (error) {
       console.error('Error loading YouTube API:', error);
   });
}

function getLatestVideos() {
   // Set the API request parameters
   const request = gapi.client.youtube.search.list({
       part: 'snippet',
       channelId: 'UCPHrq5PCfCOE2wVTTNFakag',
       order: 'date',
       maxResults: 5, // You can adjust the number of videos to retrieve
   });

   // Execute the API request
   request.execute(function (response) {
       if (response.error) {
           console.error('Error fetching videos:', response.error);
           return;
       }

       const videosContainer = document.getElementById('videos-container');

       // Iterate through the response items and create iframe elements
       for (const item of response.result.items) {
           const videoId = item.id.videoId;
           const iframe = document.createElement('iframe');
           iframe.src = `https://www.youtube.com/embed/${videoId}`;
           iframe.width = 560; // You can adjust the width
           iframe.height = 315; // You can adjust the height
           iframe.allowFullscreen = true;

           // Append the iframe to the container
           videosContainer.appendChild(iframe);
       }
   });
}

// ...
