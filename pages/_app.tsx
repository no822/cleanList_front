import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from "../store/store";
import Layout from "../components/layout/Layout";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {getToken} from "../utils/token";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const path = router.pathname;

    useEffect(() => {
        if (!getToken()) {
            router.replace('/');
        }
    }, [path]);


    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
