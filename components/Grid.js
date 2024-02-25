"use client";

import { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const Grid = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("../src/data/gridTestdata")
      .then((response) => response.json())
      .then((data) => setRowData(data.rows));
  }, []);

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };

  const [columnDefs] = useState([
    { headerName: "First Name", field: "first_name" },
    { headerName: "Last Name", field: "last_name" },
    { headerName: "Job Title", field: "job_title" },
    { field: "office" },
    { field: "email" },
    { field: "phone" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: "600px" }}>
      <AgGridReact
        id="staff_grid"
        ref={gridRef}
        rowData={rowData}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        rowSelection={"single"}
        style={{ height: "100%", width: "100%" }}
      ></AgGridReact>
    </div>
  );
};

export default Grid;
