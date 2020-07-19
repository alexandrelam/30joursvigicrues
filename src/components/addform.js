import React from "react"
import { Input } from "antd"
import { Link } from "gatsby"

export default function Addform({ stationNames, setStationNames }) {
  const { Search } = Input

  const addStation = value => {
    fetch(
      `https://www.vigicrues.gouv.fr/services/observations.json/?CdStationHydro=${value}&FormatDate=iso`
    )
      .then(res => res.json())
      .then(res => {
        if (res.Serie !== undefined) {
          let newArray = [...stationNames]
          const newRes = {
            name: res.Serie.LbStationHydro,
            id: value,
          }
          newArray.push(newRes)
          setStationNames(newArray)
        }
      })
  }

  return (
    <div className="search-container">
      <h2>Ajoutez une station !</h2>
      <Search
        placeholder="id de la station"
        enterButton="Ajouter"
        size="large"
        onSearch={value => addStation(value)}
      />
      <Link to="/guide/">Comment trouver l'id de la station ?</Link>
    </div>
  )
}
