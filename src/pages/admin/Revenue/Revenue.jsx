import React, { useEffect, useState } from "react";
import Head from "../component/Head"

const Revenue = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container">
    <Head
      title="Revenue"
      startDate={startDate}
      ediDate={(date) => setStartDate(date)}
    />
  </div>
  )
}

export default Revenue