import axios from 'axios';

export default async (req, res) => {
  try {
    // Make a request to the YouTube API to fetch random song videos
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          q: 'song',
          type: 'video',
          key: process.env.YOUTUBE_API_KEY, // Replace with your YouTube Data API key
        },
      }
    );

    // Extract the video data
    const videos = response.data.items;

    // Return the first video as the random song
    if (videos.length > 0) {
      res.status(200).json(videos[0]);
    } else {
      res.status(404).json({ error: 'No videos found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
