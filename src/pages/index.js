import React from "react"
import 'antd/dist/antd.css';
import "./index.css"
import { PageHeader } from "antd"


import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <div>
      <SEO title="30 Jours Vigicrues" />
      <PageHeader
        className="site-page-header"
        title="30 jours Vigicrues"
        subTitle="Récupérer les données de Vigicrues facilement !"
      />
    </div>
  )
}
