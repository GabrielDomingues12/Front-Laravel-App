import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex"> 
                {children}     
        </div>
    );
};

export default Container;
