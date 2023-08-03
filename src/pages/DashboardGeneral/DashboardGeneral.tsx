import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./DashboardGeneral.module.scss";
import table from "../../datatable.module.scss";
import {
  Card,
  Button,
  Row,
  Table,
  Col,
  Modal,
  Form,
  Dropdown,
} from "react-bootstrap";

import { BusinessDate, Day, Month, Week} from "./Dropdowns";

import iconFilter from "../../images/icon-filter.svg";

import Modals from "../../components/Modals/DashboardM";

import {
  Chart as ChartJS,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import BarChart from "./Barcharts";
import { PieChart } from "recharts";
ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
   
    y: {
      ticks: {
        major:{enabled:true},
        display: false,
        drawTicks:false,
        // tickBorderDash: [8, 4],
        tickBorderDashOffset:7,
      },
      border: {
        display:false,
        dash:[5, 5],
        dashOffset:0.0,
        color: "#348632",
      }
    },
    x: {
      // grid:{color:"red"},
      ticks: {
        display: true,
        drawTicks:false,
        tickBorderDashOffset:7,
      },
      border: {
        display:false,
        dash:[5, 5],
        dashOffset:0.0,
        color: "#348632",
      }
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  borderDashOffset: 9,
};

const labels:string[] = [
  "13 Sep",
  "14 Sep",
  "15 Sep",
  "16 Sep",
  "17 Sep",
  "18 Sep",
  "19 Sep",
];

export const data = {
  labels: labels,
  datasets: [{
    data: [54, 55, 60, 61, 65, 58, 57],
    backgroundColor:"rgba(222, 240, 259, 0.4)",
    fill: true,
    borderColor: '#5498FD',
    tension: 0.1
  }]
};

export const toppeoductpieData = {
  labels: ["#5498FD","#76ACFD","#AACBFE","#BBD6FE",   "#DDEAFF"],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 12, 4, 5, 4, 5],
      backgroundColor: [ "#5498FD","#76ACFD","#AACBFE","#BBD6FE",   "#DDEAFF"],
      borderColor: ["#ffffff", "#ffffff", "#ffffff","#ffffff", "#ffffff"],
      borderWidth: 1,
    },
  ],
};

export const toppaymentpieData = {
  labels: [ "#5498FD","#76ACFD"],
  datasets: [
    {
      label: "# of Votes",
      data: [  15 ,4],
      backgroundColor: [ "#5498FD","#76ACFD"],
      borderColor: ["#ffffff", "#ffffff"],
      borderWidth: 1,
    },
  ],
};

export const topbranchespieData = {
  labels: ["#5498FD"],
  datasets: [
    {
      label: "# of Votes",
      data: [ 19],
      backgroundColor: [ "#5498FD"],
      borderColor: ["#ffffff"],
      borderWidth: 1,
    },
  ],

};

export default function DashboardGeneral() {
  const [show, setShow] = useState(false);
  const [modalName, setModalName] = useState("");
  const handleShow = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow");
    setModalName(modalname);
    setShow(status);
  };
  const handleClose = () => {
    setModalName("");
    setShow(false);
  };

  return (
    <>
      <Row >
        <div className={`${cx.pageTitle}`}>
          <div className={`${cx.rowTitleLeft}`}></div>
          <div className={`${cx.rowTitleRight}`}>
            
            <Day/>
            <Week/>
            <Month/>
           

            <BusinessDate />
            <button
              className={`btn`}
              onClick={() => {
                handleShow("Dashboard Branches Filter", true);
              }}
            >
              <img src={iconFilter} className={`mx-1 ${st.icon}`} />
              Filters
            </button>
          </div>
        </div>
      </Row>
      <Row>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Orders</p>
            <h3>0</h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data}/>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Net Sales (SAR)</p>
            <h3>SAR 0</h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data} />
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Net Payments (SAR)</p>
            <h3>SAR 0  </h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data} />
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Return Amount (SAR)</p>
            <h3>0</h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data} />
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Discount Amount (SAR)</p>
            <h3>SAR 0</h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data} />
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Delivery Orders</p>
            <h3>0</h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data} />
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Dine-in Orders</p>
            <h3>0</h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data} />
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} xl={3}>
          <div className={`${cx.cardBox}`}>
            <p>Pickup Orders</p>
            <h3>0</h3>
            <div className={`${cx.graphBox}`}>
              <Line height={200} width={200} options={options} data={data} />
            </div>
          </div>
        </Col>
        <Row>
          <div className={`${cx.pageTitle}`}>
            <div className={`${cx.chartshead}`}>
              <h1>Hourly Sales</h1>
            </div>
          </div>
        </Row>
        <Col md={12} lg={12} xl={12}>
          <div className={`${cx.cardBox}`}>
            <BarChart />
          </div>
        </Col>

        <Col md={4} lg={4} xl={4}>
        <div className={`${cx.pageTitle}`}>
            <div className={`${cx.chartshead}`}>
              <h1>Top Products by Net Sales (SAR)</h1>
            </div>
          </div>
          <div className={`${cx.cardBox}`}>
            <Pie data={toppeoductpieData}/>
          </div>
        </Col>

        <Col md={4} lg={4} xl={4}>
        <div className={`${cx.pageTitle}`}>
            <div className={`${cx.chartshead}`}>
              <h1>Top Payments (SAR)</h1>
            </div>
          </div>
          <div className={`${cx.cardBox}`}>
            <Pie data={toppaymentpieData}/>
          </div>
        </Col>

        <Col md={4} lg={4} xl={4}>
        <div className={`${cx.pageTitle}`}>
            <div className={`${cx.chartshead}`}>
              <h1>Top Branches by Net Sales (SAR)</h1>
            </div>
          </div>
          <div className={`${cx.cardBox}`}>
            <Pie data={topbranchespieData}/>
          </div>
        </Col>
      </Row>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
}
