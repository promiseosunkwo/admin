import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "./DataTableData";
import { Link } from "react-router-dom";



const DataTable = () => {

    //this action button is the butons for edit and delete whch is added diffrently from other fields
    const actionButtons = [{

        field: 'action',
        headerName: 'Action', 
        width: 220,
    
        renderCell: () =>{
            return (
                <div className="cellAction">
                    <Link to="/products/view" style={{textDecoration:"none"}} >
                    <div className="viewButton">View</div>
                    </Link>
                    <Link to="/products/delete" style={{textDecoration:"none"}} >
                    <div className="deleteButton">Delete</div>
                    </Link>
                </div>
            );
        }
    }];

    return <div className="datatable">
            <div className="dataTableTitle">
                Add New User <Link to="/users/new" style={{textDecoration:"none"}} className="link" >Add New</Link>
            </div>
            <div className="cellWithTable" style={{ height: 400, width: '100%' }}>
                <DataGrid
                className="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionButtons)} //use contact to add extra field to the datatable, the extra field is for edit and delete
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection/>
            </div>
            </div>;
}

export default DataTable;