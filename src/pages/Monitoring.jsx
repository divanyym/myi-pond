import CombinedHistoryChart from "./Monitoring1/DataHistory"
import GaugeComponent from "./Monitoring1/SensorGauge"




const MonitoringPage = () => {
  return (
    <div> 
      <GaugeComponent/>

      <CombinedHistoryChart/>
   
      
    </div>
  )
}

export default MonitoringPage