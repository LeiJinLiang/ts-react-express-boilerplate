import * as React from "react";
import './Hello.css'

const getExclamationMarks = (numChars: number): string => (
  Array(numChars + 1).join('!')
)
export interface HelloPorps {
  name: string;
  enthusiasmLevel?: number;
}

const Hello = ({ name, enthusiasmLevel = 1}:HelloPorps) => {
  if(enthusiasmLevel <=0){
     throw new Error('You could be a little more enthusiastic. :D')
  }
  return(
    <div className='hello'>
      <div className='greeting'>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

export default Hello