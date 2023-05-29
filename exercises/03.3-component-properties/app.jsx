import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	imageUrl: PropType.string,
	// 2) add here the new properties into the proptypes object
};

ReactDOM.render(
	<BootstrapCard
		title="Paul Mccartney"
		description="Paul Mccartney"
		buttonLabel="patata"
		buttonUrl="https://www.google.es/search"
		imageUrl="https://ih1.redbubble.net/image.2135620122.9997/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
	/>,
	document.querySelector("#myDiv")
);
// 3) Use ReactDOM to add the component into then DOM element #myDiv
