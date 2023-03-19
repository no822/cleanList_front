import React from 'react';
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            // html 태그에 언어 설정
            <Html>
                <Head>
                    <title>CleanList</title>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="viewport" content="width=device-width maximum-scale=1.0 initial-scale=1.0" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
