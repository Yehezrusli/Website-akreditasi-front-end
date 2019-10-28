import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import { Chart } from "react-google-charts";
import './Home.css';
import leftPad from 'left-pad';

var x = 10;

const data = [
  ["Year", "Visitations", { role: "style" }],
  ["2010", x, "color: gray"],
  ["2020", 14, "color: #76A7FA"],
  ["2030", 16, "color: blue"],
  ["2040", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  [
    "2050",
    28,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
  ]
];

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Col md={6} >
          <Chart chartType="BarChart" width="100%" height="400px" data={data} />
        </Col>

        <Col md={6} style={{float: "left"}}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['City', '2010 Population', '2000 Population'],
              ['New York City, NY', 8175000, 8008000],
              ['Los Angeles, CA', 3792000, 3694000],
              ['Chicago, IL', 2695000, 2896000],
              ['Houston, TX', 2099000, 1953000],
              ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
              title: 'Population of Largest U.S. Cities',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Total Population',
                minValue: 0,
              },
              vAxis: {
                title: 'City',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
          />
        </Col>
      </>
    )
  }
}
Home.propTypes = {
}

export default Home;