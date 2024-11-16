import React, { useEffect, useState } from "react";
import "./overview.css";
import Head from "../component/Head";
import { BarChart } from "../components/Charts/Bar";
import { LineChart } from "../components/Charts/Line";
import { DonutChart } from "../components/Charts/Donut";
import { TbMoneybag, TbEye } from "react-icons/tb";
import { PiTicket } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";

const Overview = () => {
  const [startDate, setStartDate] = useState(new Date());

  const visreg = {
    labels: ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug"],
    datasets: [
      {
        label: "Visited Users",
        data: [500, 600, 700, 800, 650, 720, 750, 780],
        backgroundColor: "#5588BB",
      },
      {
        label: "Registered Users",
        data: [350, 480, 585, 390, 575, 395, 500, 450],
        backgroundColor: "#27823B",
      },
    ],
  };

  const bookrev = {
    labels: ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug"],
    datasets: [
      {
        label: "Bookings",
        data: [40, 105, 60, 75, 90, 270, 320, 365],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: [98, 178, 80, 150, 146, 397, 420, 413],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const catper = {
    labels: [
      "Hiking",
      "Biking",
      "Festival",
      "Camping",
      "Air",
      "Climbing",
      "Winter",
      "Water",
      "Photography",
      "Wellness",
    ],
    datasets: [
      {
        data: [15, 12, 10, 8, 5, 6, 7, 9, 12, 16], // Example percentages
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#85A98D",
          "#F6AA84",
          "#4BC0C0",
          "#9966FF",
          "#546188",
          "#36A2EB",
          "#517970",
          "#FF9F40",
        ],
        hoverBackgroundColor: ["#233229"],
      },
    ],
  };

  const referralData = {
    labels: ["Direct", "Affiliate", "Search Engine", "Social Media", "Other"],
    datasets: [
      {
        data: [40, 25, 20, 10, 5],
        backgroundColor: [
          "#1e5551",
          "#4b6e6a",
          "#6ba78e",
          "#84cbac",
          "#9aca9d",
        ],
        hoverBackgroundColor: ["#233229"],
      },
    ],
  };

  return (
    <div className="container home">
      <Head
        title="Overview"
        startDate={startDate}
        ediDate={(date) => setStartDate(date)}
      />

      <div className="d-flex gap-4">
        <div className="col bg-white p-3 rounded-3 align-content-center">
          <div className="row">
            <div className="col-lg-4 align-content-center">
              <div className="icon icon-success border-success border rounded-2">
                <TbMoneybag className="text-success" />
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-0">$1500</h3>
              <p className="text-muted">Revenue</p>
            </div>
          </div>
        </div>
        <div className="col bg-white p-3 rounded-3 align-content-center">
          <div className="row">
            <div className="col-lg-4 align-content-center">
              <div className="icon icon-primary border-primary border rounded-2">
                <PiTicket className="text-primary" />
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-0">75</h3>
              <p className="text-muted">Booking</p>
            </div>
          </div>
        </div>
        <div className="col bg-white p-3 rounded-3 align-content-center">
          <div className="row">
            <div className="col-lg-4 align-content-center">
              <div className="icon icon-info border-info border rounded-2">
                <HiOutlineUser className="text-info" />
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-0">26</h3>
              <p className="text-muted">New user</p>
            </div>
          </div>
        </div>
        <div className="col bg-white p-3 rounded-3 align-content-center">
          <div className="row">
            <div className="col-lg-4 align-content-center">
              <div className="icon icon-warning border-warning border rounded-2">
                <TbEye className="text-warning" />
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-0">946</h3>
              <p className="text-muted">Visitors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-lg-6">
          <div className="card p-1">
            <div className="card-body">
              <div class="float-end d-none d-md-inline-block">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-xs btn-secondary">
                    Today
                  </button>
                  <button type="button" class="btn btn-xs btn-light">
                    Weekly
                  </button>
                  <button type="button" class="btn btn-xs btn-light">
                    Monthly
                  </button>
                </div>
              </div>
              <h6 class="align-content-center mt-1 mb-0">
                Most booked categories
              </h6>
              <div className="mt-2">
                <DonutChart chartData={catper} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card p-1">
            <div className="card-body">
              <div class="float-end d-none d-md-inline-block">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-xs btn-light">
                    Today
                  </button>
                  <button type="button" class="btn btn-xs btn-light">
                    Weekly
                  </button>
                  <button type="button" class="btn btn-xs btn-secondary">
                    Monthly
                  </button>
                </div>
              </div>
              <h6 class="align-content-center mt-1 mb-0">Referral Sources</h6>
              <div className="mt-2">
                <DonutChart chartData={referralData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-lg-6">
          <div className="card p-1">
            <div className="card-body">
              <div class="float-end d-none d-md-inline-block">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-xs btn-light">
                    Today
                  </button>
                  <button type="button" class="btn btn-xs btn-light">
                    Weekly
                  </button>
                  <button type="button" class="btn btn-xs btn-secondary">
                    Monthly
                  </button>
                </div>
              </div>
              <h6 class="align-content-center mt-1 mb-0">User Engagement</h6>
              <div className="mt-4">
                <BarChart chartData={visreg} maxY={1000} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card p-1">
            <div className="card-body">
              <div class="float-end d-none d-md-inline-block">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-xs btn-light">
                    Today
                  </button>
                  <button type="button" class="btn btn-xs btn-light">
                    Weekly
                  </button>
                  <button type="button" class="btn btn-xs btn-secondary">
                    Monthly
                  </button>
                </div>
              </div>
              <h6 class="align-content-center mt-1 mb-0">Booked / Payed</h6>
              <div className="mt-4">
                <LineChart chartData={bookrev} maxY={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
