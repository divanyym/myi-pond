import GaugeComponent from "./Monitoring2/SensorGauge"
import CombinedHistoryChart2 from "./Monitoring2/DataHistory2"



const MonitoringPage2 = () => {
  return (
    <div> 
      <GaugeComponent/>
      <CombinedHistoryChart2/>
    </div>
  )
}

export default MonitoringPage2