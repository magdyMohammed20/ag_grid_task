import React, { useState, useRef, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './App.css';

const App = () => {

  const gridRef = useRef();
  const [rowData, setRowData] = useState([
    { id: 1, name: 'Magdy', last_name: 'Mohammed', status: 'no' },
    { id: 2, name: 'Magdy', last_name: 'Mohammed', status: 'no' },
    { id: 3, name: 'Magdy', last_name: 'Mohammed', status: 'no' }

  ]);

  const columnDefs = [
    { field: 'id', checkboxSelection: true, headerCheckboxSelection: true },
    { field: 'name' },
    { field: 'last_name' },
    { field: 'status' }
  ];

  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1
  }));

  const buttonListener = useCallback(e => {
    gridRef.current.api.deselectAll();
  }, []);

  const handleAdd = e => {
    setRowData([...rowData, { id: rowData.pop().id + 1, name: 'Mohammed', last_name: 'Ahmed', status: 'Yes' }])
  };

  return (
    <div>
      <div className="ag-theme-alpine-dark table-style">
        <button onClick={buttonListener}>DeSelect All</button>
        <button onClick={handleAdd}>Add Row</button>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection='multiple'
        />
      </div>
    </div>
  );
};

export default App;