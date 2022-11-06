import React, { useState, useEffect } from 'react'
import Search from '../search/Search'
import './table.scss'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import users from '../../data/users.json'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ReactPaginate from 'react-paginate';


const TableData = () => {
  const [searchValue, setSearchValue] = useState('');
  const [clickValue, setclickValue] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [contacts, setContacts] = useState(users.data.users.slice(0, 31))

  //slice Page
  const [pageNumber, setPageNumber] = useState(0)
  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage

  const pageCount = Math.ceil(contacts.length / userPerPage)
  const changPage = ({ selected }) => {
    setPageNumber(selected);
  }

  const displayUsers = filterData.slice(pageVisited, pageVisited + userPerPage).map((contact, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{contact.code}</TableCell>
        <TableCell>{contact.project_name}</TableCell>
        <TableCell>{contact.data}</TableCell>
        <TableCell>{contact.first_name}</TableCell>
        <TableCell>{contact.payment}</TableCell>
        <TableCell><InsertDriveFileIcon /></TableCell>
        <TableCell>{contact.status.name_status}</TableCell>
      </TableRow>
    )
  });
    

  useEffect(() => {
    // onChangeCliclk()
    onFilterdata()
  }, [searchValue, clickValue]);

  const onChangeSearch = (value) => {
    setSearchValue(value)
  };

  const onChangeCliclk = (value) => {
    setclickValue(value)
  };

  const onFilterdata = () => {
    if (searchValue) {
      const newData = () => contacts.filter(users => users.first_name.toLowerCase().includes(searchValue.toLowerCase()))
      setFilterData(newData)
    }
    else if (clickValue) {
      const newData = () => contacts.filter(users => users.status.name_status.toLowerCase().includes(clickValue.toLowerCase()))
      setFilterData(newData)
    }
    else {
      setFilterData(contacts)
    }
  };

  return (
    <div>
      <Search onChangeSearch={onChangeSearch} onChangeCliclk={onChangeCliclk}/>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> No. <br /> ลำดับที่</TableCell>
              <TableCell> Code <br /> เลขที่บิล</TableCell>
              <TableCell> Project Name <br /> ชื่อโปรเจค</TableCell>
              <TableCell> Date <br /> วันที่ออกบิล</TableCell>
              <TableCell> Custom Name <br /> ชื่อลูกค้า</TableCell>
              <TableCell> Payment Amount <br /> ยอดชำระ</TableCell>
              <TableCell> Slipe <br /> หลักฐานการโอน</TableCell>
              <TableCell> Status <br /> สถานะ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayUsers}
          </TableBody>
        </Table>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changPage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisable"}
          activeClassName={"paginationActive"}
        />
      </TableContainer>

    </div>
  );
}

export default TableData


