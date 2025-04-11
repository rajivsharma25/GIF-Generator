import React, { useState } from 'react'
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState('');

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     // console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false); 
    // }

    // //called on first render only
    // useEffect(() => {
    //     fetchData();
    // },[]);

    const {gif, loading, fetchData} = useGif(tag);
    
    // function clickHandler() {
    //     fetchData();
    // }  

    // function changeHandler(e) {
    //     console.log(e.target.value);
    //     setTag(e.target.value);
    // }

  return (
    <div className='w-1/2 bg-blue-400 rounded-2xl border border-black
    flex flex-col items-center gap-y-5 mt-[15px] mb-[45px]'>

        <h1 className=' mt-[25px] text-2xl font-bold underline uppercase'>Search {tag} Gif</h1>

        {
            loading ? (<Spinner/>):(<img src={gif} width="450" alt="gif" />)
        }

        <input
        type="text"
        className='w-10/12 text-lg py-2 rounded-lg mb-[2px] text-center outline-none'
        placeholder='Search Gif'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        autoFocus
        />
        
        <button className='w-10/12 bg-black drop-shadow-md shadow-black text-lg py-2 rounded-lg mb-[25px] text-white' 
        onClick={()=>fetchData(tag)}>Generate</button> 

    </div>
  )
}

export default Tag 