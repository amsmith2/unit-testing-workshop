import React from 'react';

export const Button = ({onClick, name, text}) => (
  <button name={name} onClick={onClick} type="button">{text}</button>
)
