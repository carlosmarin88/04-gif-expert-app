export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=P9T459SXtZxy7nzWc1QBs7uVeElvExbl&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json(); 
    const gifs = data.map(img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    //timeout para pruebas de espera
    //await new Promise(resolve => setTimeout(resolve, 3000));
    //console.log('gifs',gifs);
    return gifs;
}