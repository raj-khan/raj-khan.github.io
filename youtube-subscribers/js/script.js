const subCount = document.getElementById('subCount');
const videoCount = document.getElementById('videoCount');
const viewCount = document.getElementById('viewCount');

function getSubscribers () {
    let youtubeUser = document.getElementById("channelId").value;
    let youtubeKey = document.getElementById("apiKey").value;
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            subCount.innerHTML = data["items"][0].statistics.subscriberCount;
            videoCount.innerHTML = data["items"][0].statistics.videoCount;
            viewCount.innerHTML = data["items"][0].statistics.viewCount;
        })
}

function aboutChannel() {
    let channelId = document.getElementById("channelId").value;
    let url = "https://www.youtube.com/channel/";
    let about = "/about";
    if(channelId)
    {
        window.open(url + channelId + about, '_blank');
    }
    else
    {
        window.location.href = "#";
    }
}