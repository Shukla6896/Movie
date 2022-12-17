import React from "react";

function Result({ result }) {

	const openDetail =()=>{
		//  for opening opening card
		console.log("open new");
		return (
		// 	<section className="detail">
		// 	<div className="content">
		// 		<h2>{result}</h2>
		// 		<span>{result.release_date}</span>
		// 		<p className="rating">Rating: {result.vote_average}</p>
		
		// 		<div className="about">
		// 		<img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt="" />
					
		// <p>{"selected.Plot"}</p>
		
		// 		</div>
		// 		<button className="close" >
		// 		Close
		// 		</button>
		// 	</div>
		// 	</section>
		<>
		</>
		);
	}


return (
	<div className="result"  onClick={openDetail}>
	<img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.original_title} />
	<h3>{result.original_title}</h3>
	</div>
);
}

export default Result;
