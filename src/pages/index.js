import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from '@reach/router';


import Layout from "../components/layout"
import Seo from "../components/seo"
// import Iframe from "../components/iframe";
// import loadable from '@loadable/component';

// const Iframe = loadable(() => import('../components/iframe'));


const IndexPage = () => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(false)
  console.log(location) 

  React.useEffect(() => {
    window.addEventListener("load", setLoading(true));
  }, [])

  return <Layout>
    <Seo title="Home" description='Welcome to your new Gatsby site. Kick off your next' />
    <h1>Hi people One</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <Iframe fallback={<div>Loading...</div>} /> */}
    {!loading && <h1>Loading...</h1>}
    <iframe width="560" height="315" src={ loading ? "https://www.youtube.com/embed/zi9GUHrQj2U?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=zi9GUHrQj2U" : ''} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
}

export default IndexPage
