// 1. Create the list of data
// 2. Youtube videos --> object
const videos = [
    {videoImage:"https://placehold.co/600x400", channelImage:"https://placehold.co/100x100", videoName: "Disco Funky House 2023 #19", channelName:"Albert CT", numViews:"1.1M views", datePosted:"1 year ago"},
    {videoImage:"https://placehold.co/600x400", channelImage:"https://placehold.co/100x100", videoName:"This 250 Square Foot Apt is Exactly what Apartment Therapy is all about", channelName:"Apartment Therapy", numViews:"451K view", datePosted:"2 years go"},
    {videoImage:"https://placehold.co/600x400", channelImage:"https://placehold.co/100x100", videoName:"Delicious Dinner Recipes", channelName:"Acre Homestead", numViews:"30K views", datePosted:"3 hours ago"},
    {videoImage:"https://placehold.co/600x400", channelImage:"https://placehold.co/100x100", videoName:"Delicious Dinner Recipes", channelName:"Acre Homestead", numViews:"30K views", datePosted:"3 hours ago"},
    {videoImage:"https://placehold.co/600x400", channelImage:"https://placehold.co/100x100", videoName:"Delicious Dinner Recipes", channelName:"Acre Homestead", numViews:"30K views", datePosted:"3 hours ago"},
    {videoImage:"https://placehold.co/600x400", channelImage:"https://placehold.co/100x100", videoName:"Delicious Dinner Recipes", channelName:"Acre Homestead", numViews:"30K views", datePosted:"3 hours ago"},
    {videoImage:"https://placehold.co/600x400", channelImage:"https://placehold.co/100x100", videoName:"Delicious Dinner Recipes", channelName:"Acre Homestead", numViews:"30K views", datePosted:"3 hours ago"}
 ]
 
 
 for (let i = 0; i < videos.length; i++) {
    document.querySelector("#videos-container").innerHTML += `
        <img src="${videos[i].videoImage}" style="width:400px;"/>
        <div style="border: 5px solid black; display:flex; flex-direction:row; gap:20px; align-items: flex-start;">
            <img src="${videos[i].channelImage}" style="border-radius:50%;"/>
            <div style="border:5px solid blue;">
                <p>${videos[i].videoName}</p>
                <p>${videos[i].channelName}</p>
                <p>${videos[i].numViews} &bull; ${videos[i].datePosted}</p>                
            </div>
        </div>
    `
 }
 