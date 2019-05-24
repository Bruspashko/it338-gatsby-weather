import React from "react"
import ReactAnimatedWeather from 'react-animated-weather'
import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
  weatherData{
    latitude
    longitude
    timezone
    currently {
      time
      summary
      icon
      nearestStormDistance
      precipIntensity
      precipProbability
      temperature
      apparentTemperature
      dewPoint
      humidity
      pressure
      windSpeed
      windGust
      windBearing
      cloudCover
      uvIndex
      visibility
      ozone
    }
  }
  
}  `
}
    render={data => (
  <div >
    <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    
    {/*    <Link to="/">Home </Link> */}
    <div class="box">
      <div class="info">  
        <h3>Chicago</h3><br/>
        <h3 class="temperature">{parseInt(data.weatherData.currently.temperature)}</h3>
      </div>
      <div class="icon">
        <ReactAnimatedWeather
          icon={data.weatherData.currently.icon.toUpperCase().replace(/-/g, '_')}
          color="goldenrod"
          size="64"
          animate="true"
        /><br/>
        <h3>{data.weatherData.currently.summary}</h3>
      </div>
  
    </div>
  </div>
    )}
  />
    )