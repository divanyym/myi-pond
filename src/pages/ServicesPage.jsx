import DataHistoryComponent from "./DataHistoryComponent"
import DataHistoryTurbidity from "./DataHistoryTurbidity"
import DataHistorySuhu from "./DataHistorySuhu"
import GaugeComponent from "./SensorGauge"
import MonitoringComponent from "./Monitoring"


const ServicesPage = () => {
  return (
    <div> 
      <MonitoringComponent/>
      <GaugeComponent/>
      <DataHistoryComponent/>
      <DataHistoryTurbidity/>
      <DataHistorySuhu/>
    </div>
  )
}

export default ServicesPage