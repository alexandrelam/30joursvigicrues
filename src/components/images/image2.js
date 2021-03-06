import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Image2() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  
}
