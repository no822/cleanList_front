import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {MdOutlineCleaningServices, MdOutlineMap, MdPersonAddAlt1 } from "react-icons/md";
import {useAppSelector} from "../../store/hooks";
import {selectIsAuth} from "../../store/authSlice";

const BottomNavigation = () => {
    const router = useRouter();
    const isAuth = useAppSelector(selectIsAuth);
    const path = router.pathname;
    const [activeMenu, setActiveMenu] = useState('/cleanlist');

    useEffect(() => {
        setActiveMenu(path);
    }, [path]);

    const btnClickHandler = (activeIndex: number) => {
        if (!isAuth) return;

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
        <div className={`btm-nav drop-shadow-md my-0 mx-auto max-w-md`}>
            <button onClick={() => btnClickHandler(0)} className={`${activeMenu.includes("/cleanlist") ? "active" : ""}`}>
                <MdOutlineCleaningServices size='1.4em' />
                <span className={`btm-nav-label 
                 ${activeMenu.includes("/cleanlist") ? 'font-bold' : ''}`}>청소</span>
            </button>
            <button onClick={() => btnClickHandler(1)} className={`${activeMenu.includes("/map") ? "active" : ""}`}>
                <MdOutlineMap size='1.4em' />
                <span className={`btm-nav-label
                  ${activeMenu.includes("/map") ? 'font-bold' : ''}`}>도면</span>
            </button>
            <button onClick={() => btnClickHandler(2)} className={`${activeMenu.includes("/myPage") ? "active" : ""}`}>
                <MdPersonAddAlt1 size='1.4em' />
                <span className={`btm-nav-label 
                  ${activeMenu.includes("/myPage") ? 'font-bold' : ''}`}>마이페이지</span>
            </button>
        </div>
    );
};

export default BottomNavigation;
