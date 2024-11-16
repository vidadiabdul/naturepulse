import React from "react";

const SupCard = ({ fullname, organization, logo, contact }) => {
  return (
    <div class="rounded-3 bg-white p-4">
      <div class="text-center">
        <div class="profile my-3">
          <img
            src={logo}
            class="rounded-circle border-1"
            width="80"
          />
        </div>
      </div>
      <div class="text-center">
        <h4 class="mb-0">{organization}</h4>
        <h6 class="mb-2">{fullname}</h6>
        <span className="text-muted">{contact}</span>
        <div class="d-flex justify-content-between align-items-center mt-4 px-4">
          <div>
            <h6 class="mb-1 text-muted">Activities</h6>
            <span className="fw-medium h5">16</span>
          </div>

          <div>
            <h6 class="mb-1 text-muted">Revenue</h6>
            <span className="fw-medium h5">3000$</span>
          </div>

          <div>
            <h6 class="mb-1 text-muted">Ranks</h6>
            <span className="fw-medium h5">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupCard;
