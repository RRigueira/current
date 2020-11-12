import React from "react"
import Slideshow from "~components/boil/slideshow"
import RichTextEditor from "../components/boil/richTextEditor"
import Cards from "../components/boil/cards/Cards"
import Video from "../components/boil/videoBlock/Video"
import Accordion from "../components/boil/accordion"
import Hero from "../components/boil/hero"
import Form from "../components/boil/form"
import Maps from "../components/boil/maps"
import Newsletter from "../components/boil/newsletter"
import Nav from "../components/boil/header/nav"
import Lang from "../components/boil/lang"
import Button from "../components/boil/button"

import CreateHead from "../components/boil/createHead/CreateHead"
const Index = props => {
  let modules = props.pageContext.Modules.modules
  console.log(props)
  return (
    <main>
      <Lang data={props.pageContext}></Lang>
      <Nav
        data={props.data.allWpMenu.edges}
        lang={props.pageContext.language.code}
      ></Nav>

      <CreateHead
        title={props.pageContext.seo.seoTitle}
        description={props.pageContext.seo.seoDescription}
        image={
          props.pageContext.seo.seoImage
            ? props.pageContext.seo.seoImage.localFile.childImageSharp.fixed.src
            : null
        }
      ></CreateHead>
      {modules.map((module, index) => {
        switch (module.fieldGroupName) {
          case "page_Modules_Modules_Slideshow":
            return <Slideshow data={module} key={index}></Slideshow>
          case "page_Modules_Modules_TextBlock":
            return <RichTextEditor data={module} key={index}></RichTextEditor>
          case "page_Modules_Modules_Cards":
            return <Cards data={module} key={index}></Cards>
          case "page_Modules_Modules_Video":
            return <Video data={module} key={index}></Video>
          case "page_Modules_Modules_Accordion":
            return <Accordion data={module} key={index}></Accordion>
          case "page_Modules_Modules_Hero":
            return <Hero data={module} key={index}></Hero>
          case "page_Modules_Modules_ContactForm":
            return (
              null//<Form key={index} lang={props.pageContext.language.code}></Form>
            )
          case "page_Modules_Modules_Newsletter":
            return <Newsletter key={index}></Newsletter>
          case "page_Modules_Modules_GoogleMaps":
            return <Maps data={module} key={index}></Maps>
          case "page_Modules_Modules_Button":
            return <Button data={module} key={index}></Button>
        }
      })}
    </main>
  )
}


export default Index
