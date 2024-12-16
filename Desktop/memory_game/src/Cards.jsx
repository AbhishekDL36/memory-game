
import React, { useEffect, useState } from 'react';
import img1 from './soumyojit-sinha-wfHbpiCKtVs-unsplash.jpg'
import img2 from './quino-al-BlMj6RYy3c0-unsplash.jpg'
import img3 from './niko-photos-tGTVxeOr_Rs-unsplash.jpg'
const Cards = () => {
 const [cardsNum, setCardsnum]=   useState(12)
 const imgObj={
  images: [
    img1,img2,img2,img3,img1,img3
   ]
 }
useEffect(()=>{
switch(cardsNum){
    case 12: document.querySelector('.btn1').style.backgroundColor= "red"
    document.querySelector('.btn2').style.backgroundColor= "gray"
        document.querySelector('.btn3').style.backgroundColor= "gray"
    break
    case 16: document.querySelector('.btn2').style.backgroundColor= "red"
        document.querySelector('.btn1').style.backgroundColor= "gray"
            document.querySelector('.btn3').style.backgroundColor= "gray"
    break
    case 20: document.querySelector('.btn3').style.backgroundColor= "red"  
      document.querySelector('.btn1').style.backgroundColor= "gray"
        document.querySelector('.btn2').style.backgroundColor= "gray"

    break
    

}
},[cardsNum])
console.log(cardsNum)
  return (
    <div>
        <div className='flex justify-between w-[300px] ml-[500px] mt-[20px]'>
            <button className='text-white btn1 py-[10px] px-[30px] rounded-[20px] text-[20px]' onClick={(e)=>{setCardsnum(12)}}>12</button>
            <button className='btn2 py-[10px] px-[30px] rounded-[20px] text-white text-[20px]' onClick={(e)=>{setCardsnum(16)}}>16</button>
            <button className='btn3 py-[10px] px-[30px] rounded-[20px] text-white text-[20px]' onClick={(e)=>{setCardsnum(20)}}>20</button>
        </div>
<div className='grid grid-cols-3'>
{cardsNum ?
       Array.from({length:cardsNum}).map((card,index)=>{
        return(
            <div><img src={imgObj.images[index]} className='h-[100px]' /></div>
        )
       })
        : <p></p>


        }
</div>
    

    </div>
  );
}

export default Cards;
