import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => {
  const isSSR = typeof window !== "undefined";
  const [laoding, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 5000);
  }, [])

  return <Layout>
    <Seo title="Home" description='Welcome to your new Gatsby site. Kick off your next' />
    <h1>Hi people One</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
 
    {/* {laoding && <iframe className="iframe" width="560" height="315" data-src='https://www.youtube.com/embed/zi9GUHrQj2U?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=zi9GUHrQj2U' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>} */}
   <iframe className="iframe" width="560" height="315" data-src='https://www.youtube.com/embed/zi9GUHrQj2U?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=zi9GUHrQj2U' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    {/* <video src={vimeo.srcset[0].link} controls autoPlay loop /> */}

    {/* <iframe src="https://player.vimeo.com/video/759133513?h=6fd9098f14&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="3840" height="2160" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="signax.mp4"></iframe> */}
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
