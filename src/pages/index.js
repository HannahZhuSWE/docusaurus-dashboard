import * as React from "react"
import HomePage from "../components/HomePage"
import classes from "./index.module.css"
// markup
const IndexPage = () => {
  const repos = ['status']
  return (
   <div className={classes.Background} >
      <HomePage/>
   </div>
  )
}

export default IndexPage
