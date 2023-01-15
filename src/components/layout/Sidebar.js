import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { BrandMenu, BucketMenu, CampaignMenu, CreatorMenu, DashboardMenu, KycMenu, MasterMenu, PaymentsMenu } from '../../svg';

export default function NestedList() {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    navigate('/payments')
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    // subheader={
    //   <ListSubheader component="div" id="nested-list-subheader">
    //     Nested List Items
    //   </ListSubheader>
    // }
    >
      <ListItemButton onClick={() => navigate('/dashboard')}>
        <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
          <DashboardMenu />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/campaigns')}>
        <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
          <CampaignMenu />
        </ListItemIcon>
        <ListItemText primary="Campaigns" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/brand')}>
        <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
          <BrandMenu />
        </ListItemIcon>
        <ListItemText primary="Brands" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/creator')}>
        <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
          <CreatorMenu />
        </ListItemIcon>
        <ListItemText primary="Creators" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/kyc')}>
        <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
          <KycMenu svgFill="#ffffff" />
        </ListItemIcon>
        <ListItemText primary="KYCs" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
          <PaymentsMenu />
        </ListItemIcon>
        <ListItemText primary="payments" />
        {open ? <ExpandLess style={{ background: "#ffffff" }}/> : <ExpandMore style={{ background: "#ffffff" }}/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
              <MasterMenu />
            </ListItemIcon>
            <ListItemText primary="Master Transaction" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
              <BucketMenu />
            </ListItemIcon>
            <ListItemText primary="Bucket Transaction" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => navigate('/hyperlocal')}>
        <ListItemIcon sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          fill: "#ffffff",
        }} style={{ background: "#ffffff" }}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Hyper Local" />
      </ListItemButton>
    </List>
  );
}