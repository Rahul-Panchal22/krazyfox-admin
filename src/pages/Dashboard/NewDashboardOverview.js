import React, { useEffect, useState } from "react";
import { Box, Grid, Tab } from "@mui/material";
// import { toAbsoluteUrl } from "../../utils";
import OverviewCard from "./OverviewCard";
// import { Comments, Eye, Heart } from "../../svg";
// import ChartContentPerformance from "./ChartContentPerformanceBenchmark";
// import ChartGrowthRate from "./ChartGrowthRate";
// import EngagementSplit from "./CreatorsAge";
import DailyActiveUsers from "./DailyActiveUsers";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CampaignsCard from "./CampaignsCard";
import CreatorsAge from "./CreatorsAge";
import CreatorsGender from "./CreatorsGender";
import CreatorsState from "./CreatorsState";
import CreatorsGenre from "./CreatorsGenre";
import { useDispatch } from "react-redux";
import { DashboardData } from "../../actions/dashboard";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  HeatmapLayer,
  LoadScript,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const placesLibrary = ["places"];

// const placesLibrary = ['places','visualization']

const NewDashboardOverview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const [map, setMap] = React.useState(null);
  const [searchResult, setSearchResult] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);
  const [dashboardCountData, setDashBoardCountData] = useState(null);
  const [heatmapData, setHeatmapData] = useState([]);
  const [center, setCenter] = useState({
    lat: 23.0225,
    lng: 72.5714,
  });
  useEffect(() => {
    dispatch(DashboardData())
      .then((res) => {
        setDashBoardCountData(res.data);
        setHeatmapData(res.data.getUserLatLong);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB3qfOgTiJdEa5hv_l03saH8RMne_sQzqM",
    libraries: ["visualization"],
  });

  const heatmapDatas = {
    positions: heatmapData,
    options: {
      radius: 20,
      opacity: 1,
    },
  };

  return (
    <>
      <Grid container spacing={2} className="mar-bottom-40">
        <Grid item xs={6}>
          <h6 className="overview-heading">User</h6>
          <div className="border-paper padd-24 h-100--56 d-block" onClick={() => navigate('/creator')}>
            <OverviewCard
              cardHeading={dashboardCountData?.totalUser}
              averageView="Today's Active Users"
              cardIcon="active-user-icon.svg"
            />
            <h6 className="chart-heading mar-top-20">Daily Active Users</h6>
            <p className="chart-digit pink">
              {dashboardCountData?.totalUser} Users
            </p>
            <DailyActiveUsers />
          </div>
        </Grid>
        <Grid item xs={6}>
          <h6 className="overview-heading">Campaigns</h6>
          <div className="border-paper padd-24 h-100--56 d-block">
            <Box className="stack-button-tab">
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="All" value="1" />
                  <Tab label="HyperLocal" value="2" />
                  <Tab label="Campaign" value="3" />
                </TabList>
                <TabPanel value="1">
                  <div className="d-flex-center-center column-gap-16">
                    <CampaignsCard
                      campaignTitle="Completed Campaigns"
                      completedCampaign={
                        dashboardCountData?.pendingCampaignCount
                      }
                      totalCampaign={dashboardCountData?.overAllCampaignCount}
                      completedToday={0}
                      completedCard={true}
                      cardColor="green"
                      navigationPath="/campaigns"
                    />
                    <CampaignsCard
                      campaignTitle="Pending Campaigns"
                      completedCampaign={
                        dashboardCountData?.completedCampaignCount
                      }
                      // totalCampaign={160}
                      completedToday={0}
                      completedCard={true}
                      cardColor="orange"
                      navigationPath="/campaigns"
                    />
                  </div>
                  <h6 className="chart-heading mar-top-20">
                    Campaigns Applications
                  </h6>
                  <p className="chart-digit sky">580 Completed</p>
                  <DailyActiveUsers />
                </TabPanel>
                <TabPanel value="2">
                  <div className="d-flex-center-center column-gap-16">
                    <CampaignsCard
                      campaignTitle="Completed Hyper Local Campaigns"
                      completedCampaign={
                        dashboardCountData?.completedHyperLocalCampaignCount
                      }
                      totalCampaign={
                        dashboardCountData?.overAllHyperLocalCampaignCount
                      }
                      completedToday={0}
                      completedCard={true}
                      cardColor="green"
                      navigationPath="/hyperlocal"
                    />
                    <CampaignsCard
                      campaignTitle="Pending Hyper Local Campaigns"
                      completedCampaign={
                        dashboardCountData?.pendingHyperLocalCampaignCount
                      }
                      completedToday={0}
                      completedCard={true}
                      cardColor="orange"
                      navigationPath="/hyperlocal"
                    />
                  </div>
                  <h6 className="chart-heading mar-top-20">
                    Campaigns Applications
                  </h6>
                  <p className="chart-digit sky">580 Completed</p>
                  <DailyActiveUsers />
                </TabPanel>
                <TabPanel value="3">
                  <div className="d-flex-center-center column-gap-16">
                    <CampaignsCard
                      campaignTitle="Completed Campaigns"
                      completedCampaign={
                        dashboardCountData?.completedAllCampaignCountWithOut
                      }
                      totalCampaign={
                        dashboardCountData?.overAllCampaignCountWithOut
                      }
                      completedToday={0}
                      completedCard={true}
                      cardColor="green"
                      navigationPath="/campaigns"
                    />
                    <CampaignsCard
                      campaignTitle="Pending Campaigns"
                      completedCampaign={
                        dashboardCountData?.pendingCampaignCountWithOut
                      }
                      completedToday={0}
                      completedCard={true}
                      cardColor="orange"
                      navigationPath="/campaigns"
                    />
                  </div>
                  <h6 className="chart-heading mar-top-20">
                    Campaigns Applications
                  </h6>
                  <p className="chart-digit sky">580 Completed</p>
                  <DailyActiveUsers />
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2}> */}
      <h6 className="overview-heading">Creators</h6>
      <div className="border-paper padd-24 w-100 h-100">
        <Grid container item className="h-100">
          <Grid item xs={5} className="h-100">
            <OverviewCard
              cardHeading={dashboardCountData?.totalUser}
              averageView="Today's Active Users"
              cardIcon="active-user-icon.svg"
            />
            <h6 className="chart-heading mar-top-20">Daily Active Users</h6>
            <p className="chart-digit pink">6400 Users</p>
            <DailyActiveUsers />
          </Grid>
          <Grid container item xs={7} className="h-100">
            <Grid item xs={6} className="h-100">
              <CreatorsAge creatorsAgeData={dashboardCountData?.ageCount} />
            </Grid>
            <Grid item xs={6} className="h-100">
              <CreatorsGender
                creatorsGender={dashboardCountData?.genderCount}
              />
            </Grid>
            <Grid item xs={6} className="h-100">
              <CreatorsState creatorsState={dashboardCountData?.stateCount} />
            </Grid>
            <Grid item xs={6} className="h-100">
              <CreatorsGenre creatorsGenre={dashboardCountData?.genreCount} />
            </Grid>
          </Grid>
          <Grid item xs={12} className="h-100">
            <h6 className="chart-heading">Creator Locations</h6>
            <div className="map-section">
              {isLoaded ? (
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyB3qfOgTiJdEa5hv_l03saH8RMne_sQzqM",
                  }}
                  defaultZoom={11}
                  center={center}
                  heatmapLibrary={true}
                  heatmap={heatmapDatas}
                >
                </GoogleMapReact>
              ) : (
                <></>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewDashboardOverview;
