import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import users from '../../data/users.json'
import Search from '../search/Search'
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './tab.scss'
import Card from '../card/Card';

const columns = [
  { id: 'id', label: 'No.', minWidth: 100 },
  { id: 'code', label: 'Code', minWidth: 100 },
  { id: 'project_name', label: 'Project Name', minWidth: 100 },
  { id: 'data', label: 'Date', minWidth: 100 },
  { id: 'first_name', label: 'Custom Name', minWidth: 100 },
  { id: 'payment', label: 'Pay Amount', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },

];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const data = users.data.users;
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [rowPer, setRowPer] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const totalPage = data.length / pageSize
  const [clickValue, setclickValue] = useState('');



  const onChangeSearch = (value) => {
    setSearchValue(value)
  };

  useEffect(() => {
    onFilterdata()
  }, [searchValue, setRowPer, page,clickValue]);

  const onChangeCliclk = (value) => {
    setclickValue(value)
  };

  const onFilterdata = () => {
    if (searchValue) {
      const newData = () => data.filter(users => users.first_name.toLowerCase().includes(searchValue.toLowerCase()))
      setFilterData(newData)
    }
    else if (clickValue) {
      const newData = () => data.filter(users => users.status.name_status.toLowerCase().includes(clickValue.toLowerCase()))
      setFilterData(newData)
    }
    else {
      setFilterData(data)
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div>
      <Search onChangeSearch={onChangeSearch} onChangeCliclk={onChangeCliclk} />

      <Paper sx={{ width: '100%' }}>
        <div className='head-table'>
          <div className='card'>
            <Card />
          </div>
          <div class="select">
            <p>Show</p>
            <select onChange={handleChangeRowsPerPage} className='setRowPage' id="standard-select">
              <option >10</option>
              <option >15</option>
              <option >30</option>
            </select>
            <p>Entries</p>
          </div>
        </div>

        <TableContainer sx={{ maxHeight: 590 }} className="Table">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody >
              {filterData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : (value?.id !== undefined ? value?.name_status : value)}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination count={totalPage} color="primary" onChange={handleChangePage} />
      </Paper>
    </div>
  );
}
