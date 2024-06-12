export const getGift = async(category:any) => {

    const url=`https://api.giphy.com/v1/gifs/search?api_key=13jHabe2EYojCfLEuK0sY8tUw4nuq5O4&q=${category}&limit=10`

    const resp = await fetch(url);

    const {data} = await resp.json();
    
    const gifs = data.map((img:any) => ({
        
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
    }))

    return gifs
}