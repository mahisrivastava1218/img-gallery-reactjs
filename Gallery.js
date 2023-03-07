import React, { useState } from "react";
import img1 from './image/dog1.jpeg';
import img2 from './image/dog2.webp';
import img3 from './image/dog3.jpg';
import img4 from './image/dog4.jpg';
import img5 from './image/dog5.jpg';
import img6 from './image/dog6.jpg';
import img7 from './image/dog7.jpeg';
import img8 from './image/dog8.jpg';
import img9 from './image/dog9.webp';
import img10 from './image/dog10.jpeg';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './gallery.css'

function Gallery() {
    
    let data=[
        {
            id: 1,
            imgSrc : img1,
        },
        {
            id: 2,
            imgSrc : img2,
        },
        {
            id: 3,
            imgSrc : img3,
        },
        {
            id: 4,
            imgSrc : img4,
        },
        {
            id: 5,
            imgSrc : img5,
        },
        {
            id: 6,
            imgSrc : img6,
        },
        {
            id: 7,
            imgSrc : img7,
        },
        {
            id: 8,
            imgSrc : img8,
        },
        {
            id: 9,
            imgSrc : img9,
        },
        {
            id: 10,
            imgSrc : img10,
        }
       
        
    ]
    const[model ,setModel]=useState(false);
    const[tempimgSrc, setTempImgSrc] =useState('');
    const getImg =(imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModel(true);
        
    }
    return(
        <>
        <div className={model ? "model open": "model"}>
            <img src={tempimgSrc} />
            <AutoStoriesIcon  onClick={() => setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item,index) =>{
                return(
                    <div className="pics" key={index}>
                         
                       <button onClick={() => getImg(item.imgSrc)}>click here
                       <img src={item.imgSrc} style={{width:'100%'}}  />
                        alt={`Image ${index}`}
                        </button>

                                     
                    </div>
                )
            })}
        </div>
        </>
    )
    
   
}
export default Gallery;
