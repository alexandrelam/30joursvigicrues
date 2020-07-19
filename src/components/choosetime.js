import React from "react"
import { TimePicker } from "antd"
import moment from "moment"

export default function Choosetime({ setTime }) {
  const format = "HH:mm"

  return (
    <TimePicker
      defaultValue={moment("06:00", format)}
      minuteStep={60}
      format={format}
      showNow={false}
      onChange={(e, s) => setTime(s)}
    />
  )
}
