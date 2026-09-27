import React from 'react';
import Banner from "@/app/components/Homepage/Banner";
import Library from './components/Homepage/Library';
import { getWorkoutLibraryOrEmpty } from "@/Fetchlib/workouts";

const page = async () => {
  const workouts = await getWorkoutLibraryOrEmpty();

  return (
    <div>
      <Banner />
      <Library initialData={workouts} />
    </div>
  );
};

export default page;
