import { useRouteError } from "react-router-dom";
import React from 'react'

const ErrorElement = () => {

    const error=useRouteError()
  return (
    <h4 className="max-w-7xl mx-auto text-3xl capitalize px-5"> There was an error....</h4>
  )
}

export default ErrorElement