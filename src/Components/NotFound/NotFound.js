import React from 'react';

import notFound from '../../Images/pageNotFund.png';

const NotFound = () => {
    return (
        <div className='container mx-auto flex items-center justify-center mt-10'>
            <img src={notFound}  alt="Not Found Images"></img>
        </div>
    );
};

export default NotFound;