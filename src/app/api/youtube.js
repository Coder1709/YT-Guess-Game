export default async(req , res) => {
    var key = process.env.YOUTUBE_API_KEY;

    const response = await fetch ('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=hindi%20music%20&key=AIzaSyBfhQInmH1wqUmBGpQEKsBfPRDYQxBtajA')
    const json = await response.json()
    const videoData = json.items.map(item => ({
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
      }));

    return res.status(200).json({
        videoId,title,description
    })
    
      
      
      



}