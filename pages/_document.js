// React imports
import React from 'react';

// Next imports
import Document, { Html, Head, Main, NextScript } from 'next/document';

// NextUI imports
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document
{
    static async getInitialProps(ctx)
    {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles])
        };
    }

    render()
    {
        return (
            <Html lang='en'>
                <Head>{CssBaseline.flush()}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
