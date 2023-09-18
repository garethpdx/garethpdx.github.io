import React, { useState } from 'react';

const Form = ({ onToggle }) => {
    const buttons = [
	{
	    key: 1,
	    shortdesc:"Python",
	    longdesc:"I've used python a lot.",
	    category: 'languages'
	},
	{
	    key: 2,
	    shortdesc: "React",
	    longdesc:"This is the first time I've used react.",
	    category:"frameworks"
	}
    ];

    const toggleButton = (button) => {
	onToggle(button.longdesc);
    };
    return (
	        <div>
	      	    <a
			key={button.key}
			onClick={() => toggleButton(button)}
		    >
			{button.shortdesc}
		    </a>
	        </div>
	</div>
    );
};
export default Form;
