import { getWorkoutLibrary } from "@/Fetchlib/workouts";

export async function GET() {
  try {
    const workouts = await getWorkoutLibrary();
    return Response.json(workouts, {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Failed to load the workout library from the API:", error);
    return Response.json(
      { error: "The workout library is temporarily unavailable." },
      { status: 503, headers: { "Retry-After": "60" } },
    );
  }
}
