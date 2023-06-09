import React, {ReactNode} from 'react';
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

type props = {
    children: ReactNode
};

const Layout = ({children}: props) => {
    return (
        <div className='max-w-md my-0 mx-auto h-full'>
            <Header />
            <main className={`relative p-6 pb-0 flex 
                        items-stretch bg-slate-100
                        overflow-x-hidden overflow-y-auto`}>
                {children}
            </main>
            <BottomNavigation />
        </div>
    );
};

export default Layout;
