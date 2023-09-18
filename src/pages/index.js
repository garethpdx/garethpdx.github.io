import React, { useState } from 'react';

import Display from '../components/Display';
import Form from '../components/Form';

const IndexPage = () => {
    const [content, setContent] = useState('');
    const handleToggle = (description) => {
	setContent((prevContent) => prevContent + description);
    };
    return (
	<div>
	    <Display content={content} />
	    <Form onToggle={handleToggle} />
	</div>
    );
};
export default IndexPage;
