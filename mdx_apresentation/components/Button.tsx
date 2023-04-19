import React from 'react'
import { useState } from 'react';

interface ButtonProps {
  text: string,
  stateBtn?: boolean,
  type?: 'submit' | 'button' | 'reset'
  onClick?: (b : boolean) => void;
}

export function Button(props: ButtonProps) {

  const [clicked, setClicked] = useState(props.stateBtn);

  function handleClick() {
    setClicked(!clicked)
    if(props.onClick) {
      props.onClick(!clicked)
    }
  }

  return (
    <button  
    onClick={handleClick}
    type={props.type}>
      {props.text}
    </button>
  );
}