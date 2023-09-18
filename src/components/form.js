import React, { useState, useEffect } from 'react';

const Form = ({ onToggle }) => {
    const [buttons, setButtonData] = useState([]);

    useEffect(() => {
	fetch('/buttons.json')
	    .then((response) => response.json())
	    .then((data) => {
		setButtonData(data);
	    })
	    .catch((error) => {
		console.error('Error fetching button data:', error);
	    });
    }, []);

    // languages, frameworks, databases, leadership
    let categories = [... new Set(buttons.map((button) => button.category))];

    const toggleButton = (button) => {
	onToggle(button.longdesc);
    };
    const buttonsForCat = (cat) => {
	return buttons.filter((button) => button.category == cat);
    };
    return (
	<div>
	{categories.map((category) => (
	    <div className="category">
	    <h2>{category}</h2>
	    <div className="bg-gray-100 p-4">
	    {buttonsForCat(category).map((button) => (
	        <div>
	      	    <a
			key={button.key}
			onClick={() => toggleButton(button)}
		    >
			{button.shortdesc}
		    </a>
	        </div>
	    ))}
	</div>
	</div>
	))}
	</div>
    );
};
export default Form;
