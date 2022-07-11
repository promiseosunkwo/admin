import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ListTable = () => {

    const rows = [
       {
        id : 123232,
        product: "Sneakers",
        customer: "August Allen",
        img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/Q/82233_1574806415.jpg",
        date: "2 July",
        amount: 1200,
        paymentMethod: "Cash on Delivery",
        status: "Pending",
       },
       {
        id : 4443232,
        product: "Asus Gean",
        customer: "John Smith",
        img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/G/54396_1604661078.jpg",
        date: "1 March",
        amount: 5000,
        paymentMethod: "Cash on Delivery",
        status: "Approved",
        },
        {
            id : 455321,
            product: "Yeezy",
            customer: "Ken Moore",
            img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/P/180029_1637760211.jpg",
            date: "3 May",
            amount: 6500,
            paymentMethod: "Cash on Delivery",
            status: "Pending",
           },
           {
            id : 8776432,
            product: "Louis Vuition",
            customer: "Pamela Harris",
            img : "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/F/111546_1639352428.jpg",
            date: "17 Spetember",
            amount: 8000,
            paymentMethod: "Cash on Delivery",
            status: "Approved",
            },
      ];


    return <div className="table">
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Traking Id</TableCell>
                    <TableCell className="tableCell" align="right">Product</TableCell>
                    <TableCell className="tableCell" align="right">Customer</TableCell>
                    <TableCell className="tableCell" align="right">Date</TableCell>
                    <TableCell className="tableCell" align="right">Amount</TableCell>
                    <TableCell className="tableCell" align="right">Payment Method</TableCell>
                    <TableCell className="tableCell" align="right">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell className="tableCell" component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell className="tableCell" align="right">
                        <div className="cellWrapper">
                            <img src={row.img} className="image" alt="image" />
                            {row.product}
                        </div> 
                    </TableCell>
                    <TableCell className="tableCell" align="right">{row.customer}</TableCell>
                    <TableCell className="tableCell" align="right">{row.date}</TableCell>
                    <TableCell className="tableCell" align="right">{row.amount}</TableCell>
                    <TableCell className="tableCell" align="right">{row.paymentMethod}</TableCell>
                    <TableCell className="tableCell" align="right"> 
                      <span className={`status ${row.status}`}>{row.status} </span>  
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
}


export default ListTable;