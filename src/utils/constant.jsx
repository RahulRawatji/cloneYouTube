export const YOUTUBE_SEARCH_API =`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const VIDEOAPI = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${import.meta.env.VITE_REACT_APP_API_KEY}`
