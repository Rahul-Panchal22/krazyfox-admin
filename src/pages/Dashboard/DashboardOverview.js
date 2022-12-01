import React from "react";
import { Avatar, Box, Grid, Stack, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { toAbsoluteUrl } from "../../utils";
import OverviewCard from "./OverviewCard";
import { Comments, Estimate, Eye, Heart, Rate } from "../../svg";
import { Link } from "react-router-dom";


const DashboardOverview = () => {
  
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="avtar-header">
        <div className="avtar-info">
          <Avatar alt="Remy Sharp" src={toAbsoluteUrl('/images/avtar.png')} sx={{ width: 78, height: 78 }} />
          <h4 className="user-name">Harley Quinn</h4>
        </div>
      </div>
      <Box className="botdered-tab">
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Instagram" value="1" />
            <Tab label="YouTube" value="2" />
          </TabList>
          <TabPanel value="1">
          <h6 className="view-content flex-100"><Link to="/">@harleyquinn</Link>28M Followers</h6>
          <Stack direction="row" justifyContent="start" alignItems="center" className='w-100' spacing={3}>
            <OverviewCard
              cardHeading="Average Likes"
              averageView="8.5 Million+"
              cardIcon={<Heart />}
            />
            <OverviewCard
              cardHeading="Average Comments"
              averageView="6.3 Million+"
              cardIcon={<Comments />}
            />
            <OverviewCard
              cardHeading="Engagement Rate"
              averageView="2.23%"
              cardIcon={<Rate />}
            />
            <OverviewCard
              cardHeading="Estimated Reach"
              averageView="2 Million+"
              cardIcon={<Estimate />}
            />
          </Stack>
            {/* <Box className="botdered-content">
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Overview" value="11" />
                  <Tab label="Audience" value="12" />
                  <Tab label="Content" value="13" />
                </TabList>
                <TabPanel value="11">
                  <OverviewCard

                  />
                </TabPanel>
                <TabPanel value="12">
                  <OverviewCard
                    
                  />
                </TabPanel>
                <TabPanel value="13">
                  <OverviewCard
                    
                  />
                </TabPanel>
              </TabContext>
            </Box> */}
          </TabPanel>
          <TabPanel value="2">
            <Box className="botdered-content">
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Overview" value="1" />
                  <Tab label="Content" value="2" />
                </TabList>
                <TabPanel value="21">
                  <OverviewCard

                  />
                </TabPanel>
                <TabPanel value="22">
                  <OverviewCard
                    
                  />
                </TabPanel>
                <TabPanel value="23">
                  <OverviewCard
                    
                  />
                </TabPanel>
              </TabContext>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
      <h6 className="overview-heading"><img src={toAbsoluteUrl("/images/ovrer-view-plus.svg")} alt="" />Posts Overview</h6>
      <div className="border-paper padd-24">
        <Stack direction="row" justifyContent="start" alignItems="center" className='w-100' spacing={3}>
          <OverviewCard
            cardHeading="Average Likes"
            averageView="8.5 Million+"
            cardIcon={<Heart />}
          />
          <OverviewCard
            cardHeading="Average Comments"
            averageView="6.3 Million+"
            cardIcon={<Comments />}
          />
          <OverviewCard
            cardHeading="Average Views"
            averageView="7.6 Million+"
            cardIcon={<Eye />}
          />
        </Stack>
      </div>
      <h6 className="overview-heading"><img src={toAbsoluteUrl("/images/ovrer-view-plus.svg")} alt="" />Reels Overview</h6>
      <div className="border-paper padd-24">
        <Stack direction="row" justifyContent="start" alignItems="center" className='w-100' spacing={3}>
          <OverviewCard
            cardHeading="Average Likes"
            averageView="8.5 Million+"
            cardIcon={<Heart />}
          />
          <OverviewCard
            cardHeading="Average Comments"
            averageView="6.3 Million+"
            cardIcon={<Comments />}
          />
          <OverviewCard
            cardHeading="Average Views"
            averageView="7.6 Million+"
            cardIcon={<Eye />}
          />
        </Stack>
      </div>
      <Grid container direction="row-reverse" justifyContent="space-between" alignItems="center" spacing={2} className='mar-bottom-40'>
        <Grid item container direction="row" justifyContent="end" alignItems="center" xs={4}>
          <h6 className="overview-heading flex-100"><img src={toAbsoluteUrl("/images/ovrer-view-plus.svg")} alt="" />Content Performance & Benchmark</h6>          
        </Grid>
        <Grid item container direction="row" justifyContent="end" alignItems="center" xs={4}>
          <h6 className="overview-heading flex-100"><img src={toAbsoluteUrl("/images/ovrer-view-plus.svg")} alt="" />Content Performance & Benchmark</h6>          
        </Grid>
        <Grid item container direction="row" justifyContent="end" alignItems="center" xs={4}>
          <h6 className="overview-heading flex-100"><img src={toAbsoluteUrl("/images/ovrer-view-plus.svg")} alt="" />Content Performance & Benchmark</h6>          
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardOverview;
