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
import { db1 } from "../../firebase";
import moment from "moment";

const DataHistoryComponent = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const dataref = ref(db1, "/Data_MyIpond/Data_Json");
    const unsubscribedata = onValue(dataref, (snapshot) => {
      const fetchdata = snapshot.val();
      const chartdata = Object.keys(fetchdata)
        .map((key) => ({
          date: moment(fetchdata[key].Tanggal).toDate(),
          pH: parseFloat(fetchdata[key].pH),
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
      <h4 className="text-center mb-4">Data History pH</h4>

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
                <Button variant="warning" className="rounded-pill px-3 py-2 fw-bold" style={{ fontSize: "1rem" }}>
                  pH Level
                </Button>
              </Col>
              <Col md={10}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#007bff" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#4b2a7b" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => moment(date).format("DD/MM")}
                      style={{ fontSize: "0.9rem", color: "#888" }}
                    />
                    <YAxis
                      style={{ fontSize: "0.9rem", color: "#888" }}
                      label={{ value: "pH Level", angle: -90, position: 'insideLeft', dy: -10, fontSize: "0.9rem", fill: "#888" }}
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
                      dataKey="pH"
                      stroke="url(#colorLine)"
                      strokeWidth={3}
                      dot={{
                        stroke: "#007bff",
                        strokeWidth: 2,
                        fill: "#ffffff",
                        r: 5,
                      }}
                      activeDot={{
                        r: 8,
                        fill: "#007bff",
                        stroke: "#ffffff",
                        strokeWidth: 2,
                        boxShadow: "0px 0px 10px rgba(0, 123, 255, 0.5)",
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DataHistoryComponent;
