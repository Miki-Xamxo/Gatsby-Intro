import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useLocation } from '@reach/router';


const SecondPage = () => {
  const location = useLocation();
  console.log(location)

  return (<Layout>
    <Seo title="Page two" description='Hi from the second page.This barebones starter ships with the main Gatsby configuration files you might need.'/>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
}

export default SecondPage
