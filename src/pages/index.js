import React, { useState, useEffect } from "react"
import "antd/dist/antd.css"
import "./index.css"
import { PageHeader, Table } from "antd"

import SEO from "../components/seo"
import Selection from "../components/selection"

export default function IndexPage() {
  const [station, setStation] = useState("")
  const [apiRes, setApiRes] = useState([])
  const [data, setData] = useState([])
  const [radioValue, setRadioValue] = useState("F700000103")

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Hauteur (en m)",
      dataIndex: "hauteur",
      key: "hauteur",
    },
  ]

  function parseData(apiRes) {
    let count = 0
    let dataArray = []

    apiRes.map(data => {
      const hauteur = data.ResObsHydro
      const splitted_date_time = data.DtObsHydro.split("T")
      const date = splitted_date_time[0]
      const splitted_date = date.split("-")
      const annee = splitted_date[0]
      const mois = splitted_date[1]
      const jour = splitted_date[2]
      const time = splitted_date_time[1]
      const hour = time.split(":")[0]
      const minute = time.split(":")[1]
      if (hour === "06" && minute === "00") {
        count++
        const dataObj = {
          key: count,
          date: jour + "/" + mois + "/" + annee,
          hauteur: hauteur,
        }
        dataArray.push(dataObj)
      }
    })

    setData(dataArray)
  }

  useEffect(() => {
    fetch(
      `https://www.vigicrues.gouv.fr/services/observations.json/?CdStationHydro=${radioValue}&FormatDate=iso`
    )
      .then(res => res.json())
      .then(res => {
        setStation(res.Serie.LbStationHydro)
        setApiRes(res.Serie.ObssHydro)
        parseData(res.Serie.ObssHydro)
      })
  }, [radioValue])

  return (
    <div>
      <SEO title="30 Jours Vigicrues" />
      <PageHeader
        className="site-page-header"
        title="30 jours Vigicrues"
        subTitle="Récupérer les données de Vigicrues facilement !"
      />
      <div className="container">
        <h3>Station : {station} - à 6h</h3>
        <Selection radioValue={radioValue} setRadioValue={setRadioValue} />
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  )
}
