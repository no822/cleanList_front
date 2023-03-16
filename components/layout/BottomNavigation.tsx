import React, {useState} from 'react';
import {useRouter} from "next/router";

const BottomNavigation = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const router = useRouter();

    const btnClickHandler = (activeIndex: number) => {
        setActiveMenu(activeIndex);
        switch (activeIndex) {
            case 0:
                router.push('/cleanlist');
                break;

            case 1:
                router.push('/map');
                break;

            case 2:
                router.push('/myPage');
                break;

            default:
                throw new Error(`invalid index : ${activeIndex}`);
        }
    };

    return (
        <div className="btm-nav drop-shadow-md my-0 mx-auto max-w-md">
            <button onClick={() => btnClickHandler(0)} className={activeMenu === 0 ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className="btm-nav-label">청소</span>
            </button>
            <button onClick={() => btnClickHandler(1)} className={activeMenu === 1 ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="btm-nav-label">도면</span>
            </button>
            <button onClick={() => btnClickHandler(2)} className={activeMenu === 2 ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <span className="btm-nav-label">마이페이지</span>
            </button>
        </div>
    );
};

export default BottomNavigation;
