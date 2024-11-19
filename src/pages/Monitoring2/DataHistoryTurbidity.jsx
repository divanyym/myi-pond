import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ref, onValue } from "firebase/database";
import { db2 } from "../../firebase";
import moment from "moment";

function HistoryChartTurbidity() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const dataref = ref(db2, "/Data_Alat2/Data_Historical");
    const unsubscribedata = onValue(dataref, (snapshot) => {
      const fetchdata = snapshot.val();
      const chartdata = Object.keys(fetchdata)
        .map((key) => ({
          date: moment(fetchdata[key].Tanggal).toDate(), // Use moment to parse the date
          Kekeruhan: parseFloat(fetchdata[key].Turbidity),
        }))
        .filter((item) => {
          if (startDate && endDate) {
            return (
              item.date >= startDate.startOf("day").toDate() &&
              item.date <= endDate.endOf("day").toDate()
            );
          }
          return true;
        });
      setData(chartdata);
    });
    return () => {
      unsubscribedata();
    };
  }, [startDate, endDate]);

  const handleDateFilter = (start, end) => {
    setStartDate(start ? moment(start).startOf("day") : null);
    setEndDate(end ? moment(end).endOf("day") : null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h4 className="text-center mb-4">Data History Kekeruhan</h4>

      <div className="date-filter mb-3 d-flex justify-content-center">
        <label className="me-2 fw-bold" style={{ color: "#555" }}>Tanggal Mulai:</label>
        <input
          type="date"
          onChange={(e) =>
            handleDateFilter(new Date(e.target.value), endDate?.toDate())
          }
          className="me-3"
          style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <label className="me-2 fw-bold" style={{ color: "#555" }}>Tanggal Berakhir:</label>
        <input
          type="date"
          onChange={(e) =>
            handleDateFilter(startDate?.toDate(), new Date(e.target.value))
          }
          style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
      </div>

      <Row className="justify-content-center">
        <Col md={10} className="mb-4">
          <Card
            className="p-4 shadow"
            style={{
              borderRadius: "15px",
              border: "none",
              backgroundColor: "#f8f9fa",
            }}
          >
            <Row>
              <Col md={2} className="d-flex align-items-center justify-content-center">
                <Button variant="success" className="rounded-pill px-3 py-2 fw-bold" style={{ fontSize: "1rem" }}>
                  Kekeruhan
                </Button>
              </Col>
              <Col md={10}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => moment(date).format("DD/MM")}
                      style={{ fontSize: "0.9rem", color: "#888" }}
                    />
                    <YAxis
                      style={{ fontSize: "0.9rem", color: "#888" }}
                      label={{ value: "Kekeruhan (NTU)", angle: -90, position: 'insideLeft', dy: -10, fontSize: "0.9rem", fill: "#888" }}
                    />
                    <Legend verticalAlign="top" height={36} />
                    <Tooltip
                      labelFormatter={(date) => moment(date).format("DD/MM/YYYY")}
                      contentStyle={{
                        borderRadius: "10px",
                        backgroundColor: "#ffffffcc",
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Kekeruhan"
                      stroke="url(#colorTurbidityLine)"
                      strokeWidth={3}
                      dot={{
                        stroke: "#28a745",
                        strokeWidth: 2,
                        fill: "#ffffff",
                        r: 5,
                      }}
                      activeDot={{
                        r: 8,
                        fill: "#28a745",
                        stroke: "#ffffff",
                        strokeWidth: 2,
                        boxShadow: "0px 0px 10px rgba(40, 167, 69, 0.5)",
                      }}
                    />
                    <defs>
                      <linearGradient id="colorTurbidityLine" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#28a745" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6c757d" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HistoryChartTurbidity;
