import React, {ReactNode} from 'react';
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";
import InformModal from "../ui/InformModal";

type props = {
    children: ReactNode
};

const Layout = ({children}: props) => {
    return (
        <div className='max-w-md my-0 mx-auto h-full'>
            <Header />
            <main className='relative p-6 flex items-stretch bg-slate-100 overflow-auto'>{children}</main>
            <BottomNavigation />
        </div>
    );
};

export default Layout;
