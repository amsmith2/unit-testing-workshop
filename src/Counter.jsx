import React from 'react';

const Count = ({index, count}) => (
  <>
    <h1>{`Button Count ${index+1}`}</h1>
    <p>{`${count}`}</p>
  </>
)

export const Counter = ({counts}) => 
{
  const buttonCounter = counts.map((count, index) => (
    <Count key={`counter-${index}`} index={index} count={count} />
  ));

  return (
    <>
      {buttonCounter}
    </>
  )
}
