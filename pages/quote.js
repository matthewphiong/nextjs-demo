import Head from 'next/head'

const RandomQuote = ({ quote }) => (
  <div className="container">
    <Head>
      <title>Random Quote</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h2 className="quote">
        {quote.quote}
      </h2>
      <h3 className="author">
        {quote.character}
      </h3>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .quote {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        text-align: center;
      }

      .author {
        line-height: 1.5;
        font-size: 1.5rem;
        color: grey;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default RandomQuote

export const getServerSideProps = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
  const data = await res.json()

  console.log(data)

  return {
    props: {quote: data[0]}
  }
}