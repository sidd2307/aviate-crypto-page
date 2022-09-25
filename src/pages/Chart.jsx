import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { CHART_API } from "../api";

export default function Chart() {
  const [timespan, settimespan] = useState(5);
  const [plotdata, setplotdata] = useState(null);
  useEffect(() => {
    axios
      .get(
        `${CHART_API}/?timespan=${timespan}weeks&rollingAverage=8hours&format=json&cors=true`
      )
      .then((response) => {
        setplotdata(response.data["values"]);
      });
  }, [timespan]);

  console.log(plotdata);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // const handleChange = (event) => {
  //   settimespan(event.target.value);
  // };

  return (
    <div className="bg-[#0D0D2B] text-white">
      {/* <div className="w-[80%] m-auto mb-5">
        <label>Choose a TimeSpan in weeks:</label>
        <select value={timespan} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div> */}

      <div className="w-[85%] m-auto mb-5 font-bold text-3xl xl:text-6xl">
        Transaction rate chart for last 8 weeks
      </div>

      <ResponsiveContainer width="90%" aspect={4 / 1.5} className="m-auto ">
        <LineChart
          width={500}
          height={300}
          data={plotdata}
          margin={{
            top: 5,
            right: 30,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#6639E4"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
