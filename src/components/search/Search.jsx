import "./search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GridViewIcon from '@mui/icons-material/GridView';
import React, { useState, useEffect } from 'react'
import './search.scss'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Search = ({ onChangeSearch, onChangeCliclk }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Search">
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" onChange={(e) => onChangeSearch(e.target.value)} placeholder="Search..." />
        </div>
      </div>

      <Box sx={{ width: '100%', bgcolor: 'background.paper', justifyContent: 'flex-start', display: 'flex',marginTop: '20px' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="ทั้งหมด" onClick={() => onChangeCliclk('')} />
          <Tab label="รอชำระเงิน" onClick={() => onChangeCliclk('รอชำระเงิน')}/>
          <Tab label="รอตรวจสอบ"  onClick={() => onChangeCliclk('รอตรวจสอบ')}/>
          <Tab label="จ่ายแล้ว" onClick={() => onChangeCliclk('จ่ายแล้ว')}/>
          <Tab label="ไม่สำเร็จ"  onClick={() => onChangeCliclk('ไม่สำเร็จ')}/>
          <Tab label="ยกเลิก" onClick={() => onChangeCliclk('ยกเลิก')} />
        </Tabs>
      </Box>
    </div>
  );
};

export default Search;