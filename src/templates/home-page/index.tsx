// import SEO from "../components/seo"
import { graphql } from "gatsby"
import { IHomePageTemplateProps } from "./interfaces/IHomePageTemplateProps"
import { withBaseLayout } from "../../layout"
import Container from "../../components/conatiner"
import React from "react"
import {
  GitHub,
  Instagram,
  Twitter,
  Linkedin
} from "react-feather"


const IndexPageTemplate =  ({ data: homeData }: IHomePageTemplateProps) => {
  const { frontmatter } = homeData.markdownRemark;
  return (
    <>
      {/* <SEO title="Home" /> */}
      <section className="
        w-screen
        h-screen
        flex
        flex-colum
        items-center
        justify-center
        bg-primary-100
        splash
      ">
        <Container>
          <div className="spalsh-main">
            <h1 className="text-3xl lg:text-5xl text-center md:text-left text-white font-rubik font-bold">
              {frontmatter.title}
            </h1>
            <div className="flex flex-col items-center md:flex-start ml-0 md:ml-8 mt-4">
              <p className="
                w-full
                text-xl
                text-center
                md:text-left
                lg:text-3xl
                px-12
                md:p-0
                text-white
                font-karla
                font-bold">
                {frontmatter.description}
              </p>
              <div className="flex justify-center md:justify-start mt-3 splash-social w-full">
                <a
                  className="ml-0"
                  href={frontmatter.linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHub size={30} className="text-white" />
                </a>
                <a
                  className="ml-3"
                  href={frontmatter.instagramURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Instagram size={30} className="text-white" />
                </a>
                <a
                  className="ml-3"
                  href={frontmatter.twitterURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Twitter size={30} className="text-white" />
                </a>
                <a
                  className="ml-3"
                  href={frontmatter.linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Linkedin size={30} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        githubURL
        instagramURL
        twitterURL
        linkedinURL
        mediumURL
      }
    }
  }
`

export default withBaseLayout(IndexPageTemplate);