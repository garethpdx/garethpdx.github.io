import '../app/globals.css'

import React, { useState } from 'react';

import GA from '../components/ga4.js';
import Display from '../components/display';
import Form from '../components/form';
import Intro from '../components/intro';


const IndexPage = () => {
    const [content, setContent] = useState('');
    const handleToggle = (description) => {
	setContent(() => description);
    };
    return (	
	    <div>
		<GA />
		<Intro />
		<Display display={content} />
		<Form onToggle={handleToggle} />
	    </div>
    );
};
export default IndexPage;
