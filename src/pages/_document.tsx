import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head >
        <link rel="shortcut icon" href="favicon.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500;600;700&display=swap" rel="stylesheet"/>
        <title>Motion Always</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument