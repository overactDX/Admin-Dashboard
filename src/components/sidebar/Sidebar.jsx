import "./sidebar.scss";
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
// import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <ul >
          <span className="logo">NVLS - IMS</span>
        </ul>
      </div>
      <div className="center">
        <ul>
          <ul >
            <li>
              <GridViewIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </ul>
          <ul>
            <li>
              <PeopleOutlineIcon className="icon" />
              <span>Partner</span>
            </li>
          </ul>
          <li>
            <DescriptionIcon className="icon" />
            <span>Invoice</span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;