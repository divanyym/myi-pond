import DataHistoryComponent from "./Monitoring1/DataHistoryComponent"
import DataHistoryTurbidity from "./Monitoring1/DataHistoryTurbidity"
import DataHistorySuhu from "./Monitoring1/DataHistorySuhu"
import GaugeComponent from "./Monitoring1/SensorGauge"




const MonitoringPage = () => {
  return (
    <div> 
      <GaugeComponent/>
   
      <DataHistoryComponent/>
      <DataHistoryTurbidity/>
      <DataHistorySuhu/>
    </div>
  )
}

export default MonitoringPage