"use client";

import { useState } from "react";
import { Stepper } from "./ui/step";
import ZoneComponent from "@/components/Zone";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectEventsCategory } from "./ui/select";
import DatePicker from "@/components/date-picker/date-picker";

const steps = [
  { title: "Step 1", description: "Create your account" },
  { title: "Step 2", description: "Verify your email" },
  { title: "Step 3", description: "Add your details" },
  { title: "Step 4", description: "Confirm and finish" },
];

// 👉 Step 1 UI
const StepOne = () => (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <Card className={"border-0"}>
          <CardHeader className={"border-0"}>
            <CardTitle className="text-2xl">Event Management</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Event Title</Label>
                  <Input
                    id="event"
                    type="text"
                    placeholder="Enter event title"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Category</Label>
                  </div>
                  <SelectEventsCategory />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventTitle1">Event Title</Label>
                    <DatePicker/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventTitle2">Event Title</Label>
                    <DatePicker/>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Capacity of ticket</Label>
                  <Input
                    id="event"
                    type="text"
                    placeholder="Enter capacity of ticket"
                    required
                  />
              </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div></div>
    </div>
  </div>
);

// 👉 Step 2 UI
const StepTwo = () => (
  <div>
    <h2 className="text-lg font-semibold mb-2">Email Verification</h2>
    <ZoneComponent />
    <p>A verification link has been sent to your email.</p>
  </div>
);

// 👉 Step 3 UI
const StepThree = () => (
  <div>
    <h2 className="text-lg font-semibold mb-2">Personal Details</h2>
    <input type="text" placeholder="Full Name" className="input" />
    <input type="text" placeholder="Phone Number" className="input mt-2" />
  </div>
);

// 👉 Step 4 UI
const StepFour = () => (
  <div>
    <h2 className="text-lg font-semibold mb-2">Review & Submit</h2>
    <p>Make sure all details are correct before submitting.</p>
    <button className="btn mt-4">Submit</button>
  </div>
);

const stepComponents = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />];

export const MyEventsPageComponents = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="container mx-auto py-10">
      {/* <h1 className="text-2xl font-bold mb-8 text-center">Stepper Demo</h1> */}
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
      <div className="mt-8 p-4">{stepComponents[currentStep]}</div>
    </div>
  );
};
