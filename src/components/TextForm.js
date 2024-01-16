import React, { useState } from 'react'

export default function Form() {
  const [Text, setText] = useState("");
  let uc = Text.toUpperCase()
    const clickedup = () => {
       setText(uc);
    }
    const clickeddown = () =>{
      setText(Text.toLowerCase());
    }
    const clicked = (event) => {
       setText(event.target.value)
    }
    const clear = () =>{
      setText("");
    }
    let n = Text.length;
    let min = n * 0.001;
  return (
      <>

      <div className='my-3'>
      <textarea className="form-control" rows="8" value= {Text} onChange={clicked} placeholder='Enter Your Text here...'></textarea>
      </div>
      <button className='btn btn-primary my-3 btn-lg' onClick={clickedup}>Convert To Upper Case</button>
      <button className='btn btn-success my-3 mx-4 btn-lg' onClick={clickeddown}>Convert To Lower Case</button>
      <button className='btn btn-warning my-3 mx-1.8 btn-lg' onClick={clear}>Clear</button>
      <p className='Para'>Your Sentence have {Text.length} Characters And {Text.split(" ").length} Words.</p>
      <p className='Para'><i>WOW WE SAVED YOU {min} MINUTES OF READING!!!.</i></p>
      </>
    
  )
}
