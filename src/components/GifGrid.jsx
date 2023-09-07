export const GifGrid = ({ category }) => {


    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=P9T459SXtZxy7nzWc1QBs7uVeElvExbl&q=${category}`;
        const resp = await fetch(url);

        console.log(resp);
    }
    

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}
