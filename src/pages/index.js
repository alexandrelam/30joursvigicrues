import React, { useState, useEffect } from "react"
import "antd/dist/antd.css"
import "./index.css"
import { PageHeader, Table } from "antd"

import SEO from "../components/seo"
import Addform from "../components/addform"
import Selection from "../components/selection"
import Choosetime from "../components/choosetime"

export default function IndexPage() {
  const [activeStation, setActiveStation] = useState("")
  const [data, setData] = useState([])
  const [radioValue, setRadioValue] = useState("F700000103")
  const [stationNames, setStationNames] = useState([
    { id: "F700000103", name: "Paris [Austerlitz - Station ultrason (UF)]" },
    { id: "F664000104", name: "Gournay-sur-Marne [Pont]" },
  ])
  const [time, setTime] = useState("06:00")

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

  const formatterHauteur = (hauteur) => {
    // Change les points pour des virgules
    if(hauteur.length === 1) {
      return hauteur.concat("", ",00")
    }else{
      return hauteur.replace('.',',')
    }
  }

  function parseData(apiRes) {
    let count = 0
    let dataArray = []

    apiRes.forEach((data, index) => {
      const hauteur = data.ResObsHydro
      const splitted_date_time = data.DtObsHydro.split("T")
      const date = splitted_date_time[0]

      const splitted_date = date.split("-")
      const annee = splitted_date[0]
      const mois = splitted_date[1]
      const jour = splitted_date[2]
      
      const fetchedTime = splitted_date_time[1]
      const fetchedHour = fetchedTime.split(":")[0]
      const fetchedMinute = fetchedTime.split(":")[1]
      const hour = time.split(":")[0]

      if (hour === fetchedHour && fetchedMinute === "00") {
        count++
        const dataObj = {
          key: count,
          date: jour + "/" + mois + "/" + annee,
          hauteur: formatterHauteur(hauteur.toString()),
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
        setActiveStation(res.Serie.LbStationHydro)
        parseData(res.Serie.ObssHydro)
      })
  }, [radioValue, time])

  return (
    <div>
      <SEO title="30 Jours Vigicrues" />
      <PageHeader
        className="site-page-header"
        title="30 jours Vigicrues"
        subTitle="Récupérez les données de Vigicrues facilement !"
      />
      <div className="container md">
        <Addform
          stationNames={stationNames}
          setStationNames={setStationNames}
        />
        <div className="settings">
          <div>
            <h4>Sélectionnez une station</h4>
            <Selection
              radioValue={radioValue}
              setRadioValue={setRadioValue}
              stationNames={stationNames}
            />
          </div>
          <Choosetime setTime={setTime}/>
        </div>

  <h3>Station : {activeStation} - à {time}</h3>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  )
}
