import React from "react";
import { Avatar, Box, Button, Divider, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import ApplicationCard from "./ApplicationCard";
import { toAbsoluteUrl } from "../../utils";
import UserStatus from "./UserStatus";
import PriceFinalization from "./PriceFinalization";
import SubmitWork from "./SubmitWork";
import ApproveWork from "./ApproveWork";
import TaskCompleted from "./TaskCompleted";


const steps = [
  {
    label: 'Approve or Reject Harley’s Application',
    description: <UserStatus />,
  },
  {
    label: 'Price Finalization',
    description: <PriceFinalization />,
  },
  {
    label: 'Working on task',
    description: <PriceFinalization />,
  },
  {
    label: 'Work Submission',
    description: <SubmitWork />,
  },
  {
    label: 'Approve or Reject Harley’s Work',
    description: <ApproveWork />,
  },
  {
    label: 'Completed',
    description: <TaskCompleted />,
  },
  {
    label: 'You submitted Harley’s work.',
    description: <SubmitWork />,
  },
  {
    label: 'Approve or Reject Harley’s Work',
    description: <ApproveWork />,
  },
  {
    label: 'Is task completed?',
    description: <TaskCompleted />,
  },
];


const ApplicationStatus = () => {

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div className="avtar-header">
        <div className="avtar-info">
          <Avatar alt="Remy Sharp" src={toAbsoluteUrl('/images/avtar.png')} sx={{ width: 78, height: 78 }} />
          <h4 className="user-name">Harley Quinn</h4>
        </div>
      </div>
      <div className='border-paper'>
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <ApplicationCard
            cardHeadign="Followers"
            cardContent="900K"
          />
          <ApplicationCard
            cardHeadign="Contact Number"
            cardContent="+91 0000000000"
          />
          <ApplicationCard
            cardHeadign="Email"
            cardContent="harley@quinn.com"
          />
          <ApplicationCard
            cardHeadign="Category"
            chipList
            chipItem={['chip 1', 'chip 2', 'chip 3', 'chip 4']}
          />
          <ApplicationCard
            cardHeadign="Address"
            cardContent="Boompanda HQ, near Balewadi High Street, 422004"
          />
          <ApplicationCard
            cardHeadign="City"
            cardContent="Pune"
          />
          <ApplicationCard
            cardHeadign="State"
            cardContent="Maharashtra"
          />
          <ApplicationCard
            cardHeadign="Gender"
            cardContent="Female"
          />
          <ApplicationCard
            cardHeadign="Language"
            cardContent="Hindi"
          />
          <ApplicationCard
            cardHeadign="Genre"
            cardContent="Fashion"
          />
          <ApplicationCard
            cardHeadign="Sub-Genre"
            cardContent="Beauty"
          />
          <ApplicationCard
            cardHeadign="Social Links"
            SocialIcon
            SocialIconList={['instagram', 'youtube', 'facebook', 'moj']}
          />
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Box sx={{ maxWidth: 700 }}>
          <Stepper activeStep={activeStep} orientation="vertical" className="application-steps">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </>
  );
};

export default ApplicationStatus;
