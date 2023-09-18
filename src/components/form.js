import React, { useState } from 'react';

const Form = ({ onToggle }) => {
    return (
	<div className="bg-gray-100 p-4">
	    <input
		type="checkbox"
		className="bg-orange-100 p-4"
		name="checkone"
		/>
	</div>
    );
};
export default Form;
