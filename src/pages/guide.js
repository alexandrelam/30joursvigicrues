import React, { Fragment } from "react"
import { Link } from "gatsby"
import { PageHeader, Typography } from "antd"

import SEO from "../components/seo"
import Image1 from "../components/images/image1"
import Image2 from "../components/images/image2"
import Image3 from "../components/images/image3"
import Image4 from "../components/images/image4"
import Image5 from "../components/images/image5"

export default function guide() {
  const { Text } = Typography

  return (
    <Fragment>
      <SEO title="30 Jours Vigicrues" />
      <PageHeader
        className="site-page-header"
        title="30 jours Vigicrues"
        subTitle="Récupérez les données de Vigicrues facilement !"
      />
      <div className="container">
        <Link to="/">Retour à la page principale</Link>

        <h1>Comment trouver l'id d'une station ?</h1>
        <h2>
          1. Rendez-vous sur le site{" "}
          <a href="https://www.vigicrues.gouv.fr/">vigicrues.gouv.fr</a>
        </h2>
        <Image1 />
        <h2>2. Sélectionnez la station de votre choix à partir de la carte</h2>
        <Image2 />
        <h2>
          3. Dans la barre de navigation, 4 onglets apparaissent : Graphique,
          Observation, Prévision, Info Station. Cliquez sur <Text mark>"Info Station"</Text> !{" "}
        </h2>
        <Image3 />
        <h2>4. Copiez l'ID de la station. Ici : F712000102.</h2>
        <h3 className="guide-h3">Ici : <strong>Station principale : </strong>Chatou [Barrage (aval)] (<Text mark>F712000102</Text>)</h3>
        <Image4 />
        <h2>
          5. Retournez sur la page précédente et entrez l'id de la station dans
          la barre de recherche. La nouvelle station apparaît dans la liste des
          stations. Cliquez dessus pour consulter les informations la
          concernant.
        </h2>
        <Image5 />

        <Link to="/">Retour à la page principale</Link>
      </div>
    </Fragment>
  )
}
