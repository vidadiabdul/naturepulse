import React, { useEffect, useState } from "react";
import { getAllSuppliers } from "../../../services/suppliers";
import SupCard from "../components/SupCard";
import { PuffLoader } from "react-spinners";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  const showAllSuppliers = async () => {
    const resp = await getAllSuppliers();
    setSuppliers(resp.data);
  };

  useEffect(() => {
    showAllSuppliers();
  }, []);

  return (
    <div className="container">
      <h5>Suppliers</h5>
      {suppliers && suppliers.length > 0 ? (
        <div className="row gy-4 my-4">
          {suppliers.map((sup) => (
            <div className="col-lg-4 col-sm-12 col-md-6">
              <SupCard
                logo={`https://naturepulse.xyz/${sup.logo}`}
                fullname={sup.fullname}
                organization={sup.organization}
                contact={sup.contact}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="loader">
          <PuffLoader color="#355d5f" />
        </div>
      )}
    </div>
  );
};

export default Suppliers;
