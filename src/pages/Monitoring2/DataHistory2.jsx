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

const CombinedHistoryChart2 = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const dataref = ref(db1, "/Data_MyIpond/Data_Historical");
    const unsubscribedata = onValue(dataref, (snapshot) => {
        const fetchdata = snapshot.val();
        console.log("Fetched Data:", fetchdata); // Debugging untuk memeriksa data
        console.time('loading');
        if (!fetchdata) {
          setData([]);
          return;
        }
      
        const chartdata = Object.entries(fetchdata || {})
          .flatMap(([dateKey, timeData]) =>
            Object.entries(timeData || {}).map(([timeKey, values]) => {
              const dateTime = moment(
                `${dateKey} ${timeKey}`,
                "MM-DD-YYYY HH:mm:ss"
              );
      
              return {
                date: dateTime.isValid() ? dateTime.toDate() : null,
                pH: parseFloat(values?.pH?.replace(",", ".")) || 0,
                Temperature: parseFloat(values?.Temperature?.replace(",", ".")) || 0,
                Turbidity: parseFloat(values?.["Turbidity"]?.replace(",", ".")) || 0,
              };
            })
          )
          .filter((item) => item.date) // Hapus entri tanpa tanggal
          .filter((item) => {
            if (startDate && endDate) {
              return (
                moment(item.date).isSameOrAfter(startDate) &&
                moment(item.date).isSameOrBefore(endDate)
              );
            }
            return true;
          })
          .sort((a, b) => b.date - a.date) // Urutkan data dari yang terbaru
          .reduce((acc, curr) => {
            // Filter hanya satu data per jam
            const lastItem = acc[acc.length - 1];
            if (!lastItem || moment(curr.date).hour() !== moment(lastItem.date).hour()) {
              acc.push(curr);
            }
            return acc;
          }, [])
          .slice(0, 100); // Ambil 100 data terakhir
      
        setData(chartdata.reverse()); // Balik urutan agar data terbaru di akhir
        console.timeEnd('loading'); 
      });
      

    return () => {
      unsubscribedata();
    };
  }, [startDate, endDate]);

  const handleDateFilter = (start, end) => {
    setStartDate(start ? moment(start).startOf("day") : null);
    setEndDate(end ? moment(end).endOf("day") : null);
  };

  const renderChart = (dataKey, color, title) => (
    <Col md={100} className="mb-4">
      <Card
        className="p-4 shadow"
        style={{
          borderRadius: "15px",
          border: "none",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Row>
          <Col md={30} className="d-flex align-items-center justify-content-center">
            <Button
              variant="primary"
              className="rounded-pill px-3 py-2 fw-bold"
              style={{ fontSize: "1rem", backgroundColor: color }}
            >
              {title}
            </Button>
          </Col>
          <Col md={100}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => moment(date).format("DD/MM HH:mm")}
                  style={{ fontSize: "0.9rem", color: "#888" }}
                />
                <YAxis
                  style={{ fontSize: "0.9rem", color: "#888" }}
                  label={{
                    value: title,
                    angle: -90,
                    position: "insideLeft",
                    dy: -10,
                    fontSize: "0.9rem",
                    fill: "#888",
                  }}
                />
                <Legend verticalAlign="top" height={36} />
                <Tooltip
                  labelFormatter={(date) => moment(date).format("DD/MM/YYYY HH:mm")}
                  contentStyle={{
                    borderRadius: "10px",
                    backgroundColor: "#ffffffcc",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke={color}
                  strokeWidth={3}
                  dot={{
                    stroke: color,
                    strokeWidth: 2,
                    fill: "#ffffff",
                    r: 1,
                  }}
                  activeDot={{
                    r: 4,
                    fill: color,
                    stroke: "#ffffff",
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Card>
    </Col>
  );

  return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
          <h4 className="text-center mb-4" style={{ color: "#333", fontWeight: "bold" }}>Data History</h4>
      
          {/* Filter Section */}
          <div
            className="date-filter mb-4 p-4 shadow-sm"
            style={{
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div className="filter-item">
              <label className="fw-bold" style={{ color: "#555", marginBottom: "5px" }}>
                Tanggal Mulai:
              </label>
              <input
                type="date"
                onChange={(e) =>
                  handleDateFilter(new Date(e.target.value), endDate?.toDate())
                }
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              />
            </div>
      
            <div className="filter-item">
              <label className="fw-bold" style={{ color: "#555", marginBottom: "5px" }}>
                Tanggal Berakhir:
              </label>
              <input
                type="date"
                onChange={(e) =>
                  handleDateFilter(startDate?.toDate(), new Date(e.target.value))
                }
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              />
            </div>
      
            <div className="filter-item">
              <label className="fw-bold" style={{ color: "#555", marginBottom: "5px" }}>
                Jam Mulai:
              </label>
              <input
                type="time"
                onChange={(e) =>
                  handleDateFilter(
                    moment(startDate)
                      .set("hour", e.target.value.split(":")[0])
                      .set("minute", e.target.value.split(":")[1]),
                    endDate?.toDate()
                  )
                }
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              />
            </div>
      
            <div className="filter-item">
              <label className="fw-bold" style={{ color: "#555", marginBottom: "5px" }}>
                Jam Berakhir:
              </label>
              <input
                type="time"
                onChange={(e) =>
                  handleDateFilter(
                    startDate?.toDate(),
                    moment(endDate)
                      .set("hour", e.target.value.split(":")[0])
                      .set("minute", e.target.value.split(":")[1])
                  )
                }
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              />
            </div>
          </div>
      
          {/* Chart Section */}
          <Row className="justify-content-center">
            {renderChart("pH", "#007bff", "pH Level")}
            {renderChart("Temperature", "#FFA500", "Temperature (°C)")}
            {renderChart("Turbidity", "#4b2a7b", "Turbidity")}
          </Row>
        </div>
      );
      
};

export default CombinedHistoryChart2;
