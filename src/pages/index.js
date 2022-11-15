import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import scrollTo from 'gatsby-plugin-smoothscroll';



import Layout from "../components/layout"
import Seo from "../components/seo"
import loadable, { loadableReady } from '@loadable/component'
// import Iframe from "../components/iframe";
const Iframe = loadable(() => import('../components/iframe'), { ssr: false })




const IndexPage = () => {
  const isSSR = typeof window !== "undefined";
  const [laoding, setLoading] = React.useState(false)
  const ref = React.useRef(null)

  console.log(isSSR)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", setLoading(true))
    }
  }, [])

  // const handleScroll = () => {
  //   alert('click')
  //   window.scrollTo({
  //     top: 800,
  //     behavior: 'smooth',
  //   })
  // }

  function handleScroll() {
    alert('click')
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    })
  }


  // React.useEffect(() => {
  //   console.log('render')
  //   setTimeout(() => {
  //     setLoading(true)      
  //   }, 1000);
  // }, [])

  return <Layout>
    <Seo title="Home" description='Welcome to your new Gatsby site. Kick off your next' />
    <button onClick={handleScroll}>200px</button>
    <h1>Hi people One</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <iframe loading="lazy" data-vimeo-defer src="https://player.vimeo.com/video/59777392" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="You'll never guess what this video is!" ></iframe> */}
    {/* <iframe className="iframe"  loading="lazy" src={!laoding ? '' : "https://player.vimeo.com/video/59777392?&background=1&loop=1"} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="You'll never guess what this video is!" ></iframe> */}
    {/* <iframe src="https://player.vimeo.com/video/757871918?transparent=true" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cXYVYK_s5Ro?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;disablekb=1&amp;modestbranding=1&amp;mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    {/* {laoding && <iframe className="iframe" width="560" height="315" src='https://www.youtube.com/embed/zi9GUHrQj2U?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=zi9GUHrQj2U' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>} */}
    {/* <iframe ref={iframeRef} loading="lazy" className="iframe" width="560" height="315" src={loading ? 'https://player.vimeo.com/video/59777392?loop=1&background=1': ''} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
    {/* <video src={vimeo.srcset[0].link} controls autoPlay loop /> */}

    {/* <object width="640" height="360">
      <param name="movie" value="https://player.vimeo.com/video/59777392?loop=1&background=1"/>
      <param name="allowFullScreen" value="true"/>
      <param name="allowscriptaccess" value="always"/>
      <embed width="640" height="360" src="http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" className="youtube-player" type="text/html" allowscriptaccess="always" allowfullScreen="true"/>
    </object> */}
    {/* <iframe src={laoding ? 'https://player.vimeo.com/video/759133513?h=6fd9098f14&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' : ''} width="3840" height="2160" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="signax.mp4"></iframe> */}
    {/* {laoding && <Iframe />} */}
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      id='image'
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
    <div>
      <StaticImage
      src="../images/gatsby-astronaut.png"
      width={1500}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      />
    </div>
  </Layout>
}

export default IndexPage
