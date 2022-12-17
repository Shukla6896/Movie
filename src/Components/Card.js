import React from 'react'
import Results from './Results';

const Card = (props) => {
  const results=props.results;
    
  return (
    <>
        <Results results={results}/>
        

        
    </>
  )
}

export default Card;