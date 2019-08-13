import React from 'react';

const Count = ({ index, count }) => (
  <>
    <h1 data-testid={`count-header-${index}`}>{`Button Count ${index+1}`}</h1>
    <p data-testid={`count-text-${index}`}>{`${count}`}</p>
  </>
);

export const Counter = ({ counts }) => (
  counts.map((count, index) => (
    <Count key={`counter-${index}`} index={index} count={count} />
  ))
)
