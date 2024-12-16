
import React, { useEffect, useState } from 'react';

const Cards = () => {
 const [cardsNum, setCardsnum]=   useState(12)
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

        {cardsNum ?
       Array.from({length:cardsNum}).map((card,index)=>{
        return(
            <p>hey,{index}</p>
        )
       })
        : <p></p>


        }
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
    </div>
  );
}

export default Cards;
