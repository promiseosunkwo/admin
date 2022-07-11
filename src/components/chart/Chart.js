import "./chart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; //use npm install recharts --legacy-peer-deps.


const Chart = ({aspect, title}) => {

    const data = [
        { name: 'January', Total: 4000, },
        { name: 'February', Total: 2500, },
        { name: 'March', Total: 3700, },
        { name: 'April', Total: 4500, },
        { name: 'May', Total: 5000, },
        { name: 'June', Total: 3000, },
      
      ];

    return <div className="chart">
        <div className="title"> {title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" aspect={2/1} stroke="gray" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>;
}


export default Chart;