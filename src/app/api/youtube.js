// export default async(req , res) => {
//     var key = process.env.YOUTUBE_API_KEY;

import axios from "axios";



export default async (req, res) => {
    try {
        var key = process.env.YOUTUBE_API_KEY;

        const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=hindi%20music%20&key=AIzaSyBfhQInmH1wqUmBGpQEKsBfPRDYQxBtajA';

        axios.get(apiUrl).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        const response = await fetch(apiUrl, {
            method: 'GET',
            // headers: {
            //   'Content-Type': 'application/json',
            // },
        });

        if (!response.items) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const json = await response.json();
        const videoData = json.items.map((item) => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
        }));

        return res.status(200).json(videoData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
