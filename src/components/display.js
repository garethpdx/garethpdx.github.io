import React from 'react';

const Display = ({ display }) => {
    if(display == ''){
	display = 'click something';
    }
    return (
	<div className="bg-gray-200 p-4">
	{display}
	</div>
    );
};

export default Display;
