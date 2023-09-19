import React, { useState } from 'react';


import Display from '../components/display';
import Form from '../components/form';
import Intro from '../components/intro';


const IndexPage = () => {
    const [content, setContent] = useState('');
    const handleToggle = (description) => {
	setContent((prevContent) => description);
    };
    return (	
	    <div>
		<Intro />
		<Display display={content} />
		<Form onToggle={handleToggle} />
	    </div>
    );
};
export default IndexPage;
