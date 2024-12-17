

import React, { use, useEffect, useState } from 'react';
import img1 from './soumyojit-sinha-wfHbpiCKtVs-unsplash.jpg';
import img2 from './quino-al-BlMj6RYy3c0-unsplash.jpg';
import img3 from './niko-photos-tGTVxeOr_Rs-unsplash.jpg';
import img4 from "./liam-shorter-5VaF7hzo4wc-unsplash.jpg";
import img5 from './Lo-unsplash.jpg';
import img6 from './christoph-nolte-vfDnY63kY7E-unsplash.jpg';
import img7 from './dejan-zakic-UxArzYUBXpI-unsplash.jpg'
import img8 from './joanna-kosinska-ToV0rS9nTYs-unsplash.jpg'
import img9 from './peter-glaser-qWs_Wa1JrKM-unsplash.jpg'
import img10 from './ibrahim-asad-uTI1aexMBls-unsplash.jpg'
const Cards = () => {
  const [cardsNum, setCardsnum] = useState(12);
  const [isClicked, setIsclicked] = useState(Array(cardsNum).fill(false));
  const [isLocked, setLocked]=useState({
    for16:true,
    for20:true
  })
  const [count, setCount] = useState({
    value: 0,
    imge1: "",
    imge2: ""
  });
const [pairs,setPairs]= useState(0)
  const [imgObj, setimgObj] = useState({
    images: [
      img1, img4, img2,img8,img10, img4,img10, img1, img2, img3, img3,img8,
      img9, img6,img9, img6, 
      img1, img1,img7,img7
    ]
  });

  useEffect(() => {
    setIsclicked(Array(cardsNum).fill(false));
  }, [cardsNum]);

  useEffect(() => {
    const buttons = [document.querySelector('.btn1'), document.querySelector('.btn2'), document.querySelector('.btn3')];
    buttons.forEach((btn, index) => {
      btn.style.backgroundColor = (cardsNum === 12 + index * 4) ? "red" : "gray";
    });
  }, [cardsNum]);

  useEffect(() => {
    let trueCountcards = isClicked.map((card, index) => card ? index : null);
    let trueCount = (isClicked.filter(card => card)).length;

    if (trueCount === 2) {
      let arr = trueCountcards.filter(val => val !== null);
      setCount({
        ...count,
        imge1: arr[0],
        imge2: arr[1],
        value: trueCount
      });
    }
  }, [isClicked]);

  useEffect(() => {
    if (count.value === 2) {
      if (imgObj.images[count.imge1] === imgObj.images[count.imge2]) {
        console.log("matched");
        setPairs(pairs+1)
        setTimeout(() => {
          let imagesObj = [...imgObj.images];
          imagesObj[count.imge1] = ""; // Set matched images to empty
          imagesObj[count.imge2] = ""; // Set matched images to empty
          setimgObj({ images: imagesObj });

          // Reset clicked states after a successful match
          setIsclicked(Array(cardsNum).fill(false));
          setCount({ value: 0, imge1: "", imge2: "" });
        }, 500);
      } else {
        setTimeout(() => {
          let resetClicked = [...isClicked];
          resetClicked[count.imge1] = false;
          resetClicked[count.imge2] = false;
          setIsclicked(resetClicked);
          setCount({ value: 0, imge1: "", imge2: "" });
        }, 1000);
      }
    }
  }, [count]);

  return (
    <div>
      <div className='flex justify-between w-[300px] ml-[500px] mt-[20px]'>
        <button className='text-white btn1 py-[10px] px-[30px] rounded-[20px] text-[20px]' onClick={() => setCardsnum(12)}>12</button>
        <button className='btn2 py-[10px] px-[30px] rounded-[20px] text-white text-[20px]' onClick={() => setCardsnum(16)}>16</button>
        <button className='btn3 py-[10px] px-[30px] rounded-[20px] text-white text-[20px]' onClick={() => setCardsnum(20)}>20</button>
      </div>
     <span className='pl-[600px] mt-[40px]'>No. of PAIRS  : </span> 
     <span className=' mt-[10px]'>{pairs}</span>
     {
          (cardsNum===16 && isLocked.for16 ) || (cardsNum===20 && isLocked.for20)? <p className='pl-[500px] h-[400px] bg-gray-300 pt-[200px] '>Its locked for you , clear previous round first</p>:

          <div className='grid grid-cols-4 w-[900px] mx-auto my-[30px] gap-[40px]'>
     
          {Array.from({ length: cardsNum }).map((_, index) => (
            <div className='h-[200px] w-[200px]' key={index}>
              {isClicked[index] || imgObj.images[index] === "" ? ( 
                <img src={imgObj.images[index]} className='h-[200px] w-[200px]' />
              ) : (
                <p onClick={() => {
                  let newSetindex = [...isClicked];
                  newSetindex[index] = true;
                  setIsclicked(newSetindex);
                }} className='bg-black text-white h-[200px] w-[200px] pl-[60px] pt-[70px]'>click it .!</p>
              )}
            </div>
          ))}
        </div>
        }
   
    </div>
  );
}

export default Cards;
