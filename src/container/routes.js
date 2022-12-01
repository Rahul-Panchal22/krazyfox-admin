import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AuthGuard from '../components/auth';

// const Layout = lazy(() => import('../components/layout'))
// const Dashboard = lazy(() => import('../pages/Dashboard'))
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<PageLayout />}>
          <Route path='/' element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-overview" element={<DashboardOverview />} />
          <Route path="/select-locations" element={<SelectLocations />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/add-campaign" element={<EditCampaign />} />
          <Route path="/view-campaign/:campaignId" element={<ViewCampaign />} />
          {/* <Route path="/view-campaign" element={<ViewCampaign />} /> */}
          <Route path="/edit-campaign/:campaignId" element={<EditCampaign />} />
          <Route path="/campaign-application" element={<CampaignApplication />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/view-brand/:brandId" element={<ViewBrand />} />
          <Route path="/add-brand" element={<EditBrand />} />
          <Route path="/edit-brand/:brandId" element={<EditBrand />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/add-creator" element={<AddCreator />} />
          <Route path="/view-creator/:creatorId" element={<ViewCreator />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/view-kyc" element={<ViewKyc />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments-approved" element={<PaymentsStatus />} />
          <Route path="/payments-rejection-reason" element={<PaymentsRejectionReason />} />
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
