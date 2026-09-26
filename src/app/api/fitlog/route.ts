import { fallbackWorkouts } from "@/data/fallbackWorkouts";

const LIBRARY_API_URL = "https://api.abcz.workers.dev/api/fitlog";
const CACHE_DURATION_MS = 5 * 60 * 1000;

let cachedLibrary: unknown[] | null = null;
let cacheExpiresAt = 0;
let libraryRequest: Promise<unknown[]> | null = null;

const loadLibrary = async (): Promise<unknown[]> => {
  const response = await fetch(LIBRARY_API_URL, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Workout service returned ${response.status}`);
  }

  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Workout service returned invalid data");
  }

  return data;
};

export async function GET() {
  if (cachedLibrary && Date.now() < cacheExpiresAt) {
    return Response.json(cachedLibrary, {
      headers: { "Cache-Control": "private, max-age=300" },
    });
  }

  try {
    libraryRequest ??= loadLibrary();
    const data = await libraryRequest;
    cachedLibrary = data;
    cacheExpiresAt = Date.now() + CACHE_DURATION_MS;

    return Response.json(data, {
      headers: { "Cache-Control": "private, max-age=300" },
    });
  } catch (error) {
    // Keep the library available during upstream rate limits or outages without
    // caching fallback data as though it came from the API.
    console.warn("Using fallback workout data because the API is unavailable:", error);
    return Response.json(cachedLibrary ?? fallbackWorkouts, {
      headers: { "Cache-Control": "private, max-age=30" },
    });
  } finally {
    libraryRequest = null;
  }
}
