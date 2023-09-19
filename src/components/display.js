import React from 'react';

const Display = ({ display }) => {
    if(display == ''){
	display = ['Mouse over a topic for details.'];
    }
    return (
	<div className="bg-white p-10 h-48">
	   <p className="text-xl">
	   {display.map((l) => (
	       <span key="{l}">
	   	{l}<br />
	       </span>
	   ))}
	   </p>
	</div>
    );
};

export default Display;
