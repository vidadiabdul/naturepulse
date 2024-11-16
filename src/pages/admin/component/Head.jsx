import React from "react";
import DatePicker from "react-datepicker";

const Head = ({ title, editdate, startDate }) => {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <h5 className="mb-0 fw-semibold">{title}</h5>

      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Period
        </button>
        <ul class="dropdown-menu p-3">
          <li>
            <a class="dropdown-item" href="#">
              Today
            </a>
          </li>
          <li>
            <a class="dropdown-item active" href="#">
              Last 7 days
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Last 30 days
            </a>
          </li>
          <li>
            <input
              className="form-control"
              type="date"
              dateFormat="dd/MM/yy"
              selected={startDate}
              onChange={editdate}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Head;
