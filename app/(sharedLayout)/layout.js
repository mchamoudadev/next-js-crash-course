import React from 'react';

const VipLayout = ({ children }) => {
    return (
        <div className='bg-orange-400 p-20'>
            <h1>Currently you're at the VIP Area enjoy!</h1>
            {children}
        </div>
    );
};

export default VipLayout;