import {Header} from "@/components/header";
import React, {PropsWithChildren} from 'react';

const Layout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;