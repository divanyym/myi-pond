import DataHistoryComponent from "./Monitoring2/DataHistoryComponent"
import DataHistoryTurbidity from "./Monitoring2/DataHistoryTurbidity"
import DataHistorySuhu from "./Monitoring2/DataHistorySuhu"
import GaugeComponent from "./Monitoring2/SensorGauge"



const MonitoringPage2 = () => {
  return (
    <div> 
      <GaugeComponent/>
      <DataHistoryComponent/>
      <DataHistoryTurbidity/>
      <DataHistorySuhu/>
    </div>
  )
}

export default MonitoringPage2