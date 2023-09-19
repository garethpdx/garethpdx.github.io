import React, { useState, useEffect } from 'react';

const Form = ({ onToggle }) => {
    const [buttons, setButtonData] = useState([]);

    useEffect(() => {
	fetch('https://s3.us-west-2.amazonaws.com/blog.baselin.es/buttons.json')
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
    categories.sort()

    const toggleButton = (button) => {
	onToggle(button.longdesc.split('\n'));
    };
    const buttonsForCat = (cat) => {
	return buttons.filter((button) => button.category == cat);
    };
    return (
	<div className="grid md:grid-cols-2 bg-blue-50 m-10 overflow-y-scroll h-96 md:h-fit md:overflow-auto">
	{categories.map((category) => (
	    <div
	     className="category"
	     key={category}_div>
	    <h2
	      className="underline capitalize bg-pink-50 m-2 p-3"
	      key={category}_header
	    >
	    {category}
	    </h2>
	    <div
	      className="px-7 my-3"
	      key={category}_button_div
	    >
	    <ul key={category}_list>
	    {buttonsForCat(category).map((button) => (
                <li
                className="hover:bg-blue-100 active:bg-blue-200 text-sm py-1"
                key={button.key}
                   onPointerEnter={() => toggleButton(button)}
                >
                   {button.shortdesc}
                </li>
                        ))}
                    </ul>
                </div>
	    </div>
	))}
	</div>
    );
};
export default Form;
