import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DocmentText from "../../../Assets/document-text.svg";
import "../index.css";
import { StatusTag } from "../../StatusTag/index";
import { Button } from "../../Button/Index";
import { useHistory } from "react-router-dom";
export default function List({ data }) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const Action = (data) => {
    return (
      <div
        className="table-btn-details px-1 text-center"
        onClick={() => {
          history.push(`/user-details?id=${data?.id}`);
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <div className="d-flex align-items-center">
              <div className="pr-2">
                <img src={DocmentText} />
              </div>
              <div>Details</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <DataTable
        value={data}
        tableStyle={{ minWidth: "50rem" }}
        className="table-sizee"
      >
        <Column field="index" header="S/N"></Column>
        <Column field="fullName" header="Full Name"></Column>
        <Column field="dateRegistered" header="Date Joined"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phoneNumber" header="Phone Number"></Column>
        <Column field="subscriptionPlan" header="Subscription Plan"></Column>
        <Column field="status" header="Status" body={StatusTag}></Column>
        <Column field="Action" header="Action" body={Action} />
      </DataTable>
    </div>
  );
}
