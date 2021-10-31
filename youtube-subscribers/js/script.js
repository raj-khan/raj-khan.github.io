// Get Subscribers
const youtubeKey = 'AIzaSyDCFmOwxCP92LeTwidx5_KQCU6qzQPmwSo';

const subCount = document.getElementById('subCount');
const videoCount = document.getElementById('videoCount');
const viewCount = document.getElementById('viewCount');

function getSubscribers () {
    let youtubeUser = document.getElementById("channelId").value;

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
    let channelId = document.getElementById("channelId").value + '/about';
    let url = "https://www.youtube.com/channel/";
    window.open(url + channelId, '_blank');
}