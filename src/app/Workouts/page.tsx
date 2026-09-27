import Library from "@/app/components/Homepage/Library";
import { getWorkoutLibraryOrEmpty } from "@/Fetchlib/workouts";

const WorkoutsPage = async () => {
  const workouts = await getWorkoutLibraryOrEmpty();
  return <Library initialData={workouts} />;
};

export default WorkoutsPage;
