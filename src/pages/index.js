import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from '@reach/router';


import Layout from "../components/layout"
import Seo from "../components/seo"
// import Iframe from "../components/iframe";
import loadable from '@loadable/component';

const Iframe = loadable(() => import('../components/iframe'));


const IndexPage = () => {
  const location = useLocation();
  console.log(location) 

  return <Layout>
    <Seo title="Home" description='Welcome to your new Gatsby site. Kick off your next' />
    <h1>Hi people One</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Iframe fallback={<div>Loading...</div>} />

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
