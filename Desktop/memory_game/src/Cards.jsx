
import React, { useEffect, useState } from 'react';
import img1 from './soumyojit-sinha-wfHbpiCKtVs-unsplash.jpg'
import img2 from './quino-al-BlMj6RYy3c0-unsplash.jpg'
import img3 from './niko-photos-tGTVxeOr_Rs-unsplash.jpg'
import img4 from "./liam-shorter-5VaF7hzo4wc-unsplash.jpg"
import img5 from './Lo-unsplash.jpg'
import img6 from './christoph-nolte-vfDnY63kY7E-unsplash.jpg'
const Cards = () => {
 const [cardsNum, setCardsnum]=   useState(12)
 const [isClicked,setIsclicked] = useState([Array(cardsNum).fill(false)])
 const imgObj={
  images: [
    img5,img4,img2,img4,img1,img6,img3,img3,img2,img1,img6,img5
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


},[cardsNum,isClicked])
// console.log(cardsNum,isClicked)
  return (
    <div>
        <div className='flex justify-between w-[300px] ml-[500px] mt-[20px]'>
            <button className='text-white btn1 py-[10px] px-[30px] rounded-[20px] text-[20px]' onClick={(e)=>{setCardsnum(12)}}>12</button>
            <button className='btn2 py-[10px] px-[30px] rounded-[20px] text-white text-[20px]' onClick={(e)=>{setCardsnum(16)}}>16</button>
            <button className='btn3 py-[10px] px-[30px] rounded-[20px] text-white text-[20px]' onClick={(e)=>{setCardsnum(20)}}>20</button>
        </div>
<div className='grid grid-cols-4 w-[900px] mx-auto my-[30px] h-[680px]'>
{cardsNum ?
       Array.from({length:cardsNum}).map((card,index)=>{
        return(
            <div className='h-[200px] w-[200px]'>
              {
                isClicked[index]?
                
              <img src={imgObj.images[index]} className='h-[200px] w-[200px]' />
                : <p onClick={()=>{
                  let newSetindex= [...isClicked]
                  newSetindex[index] = true
                  setIsclicked(newSetindex)
                }} className='bg-black text-white h-[200px] w-[200px]'>clicked nhi h</p>
              }</div>
        )
       })
        : <p></p>


        }
</div>
    

    </div>
  );
}

export default Cards;
