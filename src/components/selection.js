import React from "react"
import { Radio } from "antd"

export default function Selection({ radioValue, setRadioValue, stationNames }) {
  const onChange = e => {
    setRadioValue(e.target.value)
  }

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  }

  return (
    <div>
      <Radio.Group onChange={onChange} value={radioValue}>
        {stationNames.map(({ name, id }) => (
          <Radio style={radioStyle} value={id}>
            {name}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  )
}
