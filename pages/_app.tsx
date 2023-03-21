import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import store from "../store/store";
import Layout from "../components/layout/Layout";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {getToken} from "../utils/token";

export let persistor = persistStore(store);

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
            <PersistGate persistor={persistor} loading={null}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    )
}

export default MyApp
