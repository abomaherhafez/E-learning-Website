import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";
const TEstt = () => {
  // Sample data
  const data = [
    { argument: "Monday", value: 700 },
    { argument: "Tuesday", value: 300 },
    { argument: "Wednesday", value: 250 },
    { argument: "Thursday", value: 270 },
    { argument: "Friday", value: 500 },
    { argument: "Thurhhhsday", value: 270 },
  ];
  return (
    <div>
      <Paper>
            
        <Chart data={data}>
                
          <ArgumentAxis />
                
          <ValueAxis />
                   
          <BarSeries valueField="value" argumentField="argument" />
              
        </Chart>
          
      </Paper>
    </div>
  );
};
export default TEstt;
