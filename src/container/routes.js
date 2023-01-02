import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const PageLayout = lazy(() => import("../pages/Layout"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const DashboardOverview = lazy(() => import("../pages/Dashboard/DashboardOverview"));
const SelectLocations = lazy(() => import("../pages/Dashboard/SelectLocations"));
const Campaigns = lazy(() => import("../pages/Campaigns"));
const EditCampaign = lazy(() => import("../pages/Campaigns/EditCampaign"));
const ViewCampaign = lazy(() => import("../pages/Campaigns/ViewCampaign"));
const CampaignApplication = lazy(() => import("../pages/Campaigns/CampaignApplication"));
const ApplicationStatus = lazy(() => import("../pages/Campaigns/ApplicationStatus"));
const Brand = lazy(() => import("../pages/Brand"));
const ViewBrand = lazy(() => import("../pages/Brand/ViewBrand"));
const EditBrand = lazy(() => import("../pages/Brand/EditBrand"));
const Creator = lazy(() => import("../pages/Creator"));
const AddCreator = lazy(() => import("../pages/Creator/AddCreator"));
const ViewCreator = lazy(() => import("../pages/Creator/ViewCreator"));
const Kyc = lazy(() => import("../pages/Kyc"));
const ViewKyc = lazy(() => import("../pages/Kyc/ViewKyc"));
const Payments = lazy(() => import("../pages/Payments"));
const PaymentsStatus = lazy(() => import("../pages/Payments/PaymentsStatus"));
const PaymentsRejectionReason = lazy(() => import("../pages/Payments/PaymentsRejectionReason"));

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Navigate replace to='/signin' />} />
      {/* <Route path="/" element={<Navigate replace to="/dashboard" />}></Route> */}
        <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
        <Route path="/" element={<PageLayout />}>
          <Route path='/' element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/dashboard-overview" element={<PrivateRoute><DashboardOverview /></PrivateRoute>} />
          <Route path="/select-locations" element={<PrivateRoute><SelectLocations /></PrivateRoute>} />
          <Route path="/campaigns" element={<PrivateRoute><Campaigns /></PrivateRoute>} />
          <Route path="/add-campaign" element={<PrivateRoute><EditCampaign /></PrivateRoute>} />
          <Route path="/view-campaign/:campaignId" element={<PrivateRoute><ViewCampaign /></PrivateRoute>} />
          {/* <Route path="/view-campaign" element={<ViewCampaign />} /> */}
          <Route path="/edit-campaign/:campaignId" element={<PrivateRoute><EditCampaign /></PrivateRoute>} />
          <Route path="/campaign-application/:campaignId" element={<PrivateRoute><CampaignApplication /></PrivateRoute>} />
          <Route path="/application-status/:creatorId" element={<PrivateRoute><ApplicationStatus /></PrivateRoute>} />
          <Route path="/brand" element={<PrivateRoute><Brand /></PrivateRoute>} />
          <Route path="/view-brand/:brandId" element={<PrivateRoute><ViewBrand /></PrivateRoute>} />
          <Route path="/add-brand" element={<PrivateRoute><EditBrand /></PrivateRoute>} />
          <Route path="/edit-brand/:brandId" element={<PrivateRoute><EditBrand /></PrivateRoute>} />
          <Route path="/creator" element={<PrivateRoute><Creator /></PrivateRoute>} />
          <Route path="/add-creator/:creatorId" element={<PrivateRoute><AddCreator /></PrivateRoute>} />
          <Route path="/view-creator/:creatorId" element={<PrivateRoute><ViewCreator /></PrivateRoute>} />
          <Route path="/kyc" element={<PrivateRoute><Kyc /></PrivateRoute>} />
          <Route path="/view-kyc/:kycId" element={<PrivateRoute><ViewKyc /></PrivateRoute>} />
          <Route path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>} />
          <Route path="/payments-approved/:payment" element={<PrivateRoute><PaymentsStatus /></PrivateRoute>} />
          <Route path="/payments-rejection-reason" element={<PrivateRoute><PaymentsRejectionReason /></PrivateRoute>} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
      
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Routing;
