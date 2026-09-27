import type { LibraryItem } from "@/Types/type";

const LIBRARY_API_URL = "https://api.abcz.workers.dev/api/fitlog";

const isLibraryItem = (value: unknown): value is LibraryItem => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "number" &&
    typeof item.name === "string" &&
    typeof item.image === "string" &&
    Array.isArray(item.muscleGroups) &&
    item.muscleGroups.every((muscle) => typeof muscle === "string") &&
    typeof item.equipment === "string" &&
    typeof item.difficulty === "string" &&
    typeof item.duration === "number" &&
    typeof item.caloriesBurned === "number" &&
    typeof item.sets === "number" &&
    typeof item.reps === "string" &&
    typeof item.rating === "number" &&
    typeof item.description === "string" &&
    Array.isArray(item.instructions) &&
    item.instructions.every((instruction) => typeof instruction === "string")
  );
};

export const getWorkoutLibrary = async (): Promise<LibraryItem[]> => {
  const response = await fetch(LIBRARY_API_URL, {
    next: { revalidate: 300 },
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Workout service returned ${response.status}`);
  }

  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Workout service returned an invalid response");
  }

  const workouts = data.filter(isLibraryItem);
  if (workouts.length === 0 && data.length > 0) {
    throw new Error("Workout service returned no valid workout records");
  }

  if (workouts.length !== data.length) {
    console.warn(`Ignored ${data.length - workouts.length} invalid workout record(s).`);
  }

  return workouts;
};

export const getWorkoutLibraryOrEmpty = async (): Promise<LibraryItem[]> => {
  try {
    return await getWorkoutLibrary();
  } catch (error) {
    console.error("Failed to load the workout library from the API:", error);
    return [];
  }
};
