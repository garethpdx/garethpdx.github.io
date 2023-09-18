import React, { useState } from 'react';

const Form = ({ onToggle }) => {
    const [activeButtons, setActiveButtons] = useState({});

    const myButton = {
	id:1,
	shortdesc:"short desc",
	longdesc:"a longer description"
    }
    const toggleButton = (button) => {
	if(activeButtons[myButton.id]){
	    delete activeButtons[myButton.id];
	} else {
	    activeButtons[myButton.id] = true;
	}
	setActiveButtons(activeButtons);
	let desc = '';
	if(activeButtons[myButton.id]){
	    desc = myButton.longdesc;
	};
	onToggle(desc);
    };    
    return (
	<div className="bg-gray-100 p-4">
	    <p>
		{myButton.shortdesc}
	    </p>
	    <input
		onClick={toggleButton}
			type="checkbox"
			className="bg-orange-100 p-4"
			name="checkone"
	    />
	</div>
    );
};
export default Form;
