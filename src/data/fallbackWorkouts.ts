import type { LibraryItem } from "@/Types/type";

const createWorkoutArt = (id: number, name: string) => {
  const accents = ["#a3e635", "#84cc16", "#bef264", "#65a30d"];
  const accent = accents[(id - 1) % accents.length];
  const title = name.toUpperCase().replaceAll("&", "&amp;");
  const poses = [
    `<path d="M140 155h520m-470-25v50m-25-42v34m450-42v50m25-42v34M400 185l-5 76m-4-49-75-24m82 24 72-27m-75 76-65 80m65-80 75 80"/>`,
    `<path d="M160 305h460m-425-150v55m-25-45v35m415-45v55m25-45v35M300 270h180m-150-5-55-40m190 40 48-54m-174 59h145m-110 0-5 39m5-39 84 39"/>`,
    `<path d="M140 310h520m-470-24v48m-25-40v32m450-40v48m25-40v32M400 150l-38 77m38-77 70 40m-70-40 4-46m-4 123-85 19m85-19 90 66m-175-47-55 31m230-50 75 12"/>`,
    `<path d="M250 100v190m-25-170h50m-25-20 175-20v86m-175 214h250m-190-12v-64m130 76v-76m-55-180h175m-150-18v36m-25-28v20m135-28v36m25-28v20M430 210l-10 65m0-35-65-50m65 50 45 43m-45-8-65 75m65-75 68 71"/>`,
    `<path d="M250 315h300M395 175v95m0-85-80-55m80 55 80-55m-160 0h-35m35 0v-25m160 25h35m-35 0v-25m-80 140-60 70m60-70 65 70"/>`,
    `<path d="M180 320h430m-360 0v-70m290 70v-70m-290 5h290m-290-20h290M390 175l-5 95m0-55-75-45m75 45 90-42m-90 97-65 68m65-68 70 58m-165-98h-95"/>`,
    `<path d="M210 155v35m-20-28v20m390-27v35m20-28v20M230 174h360M370 200l-30 75m30-75-70 30m70-30 65 45m-65 30-80 70m80-70 100 60"/>`,
    `<path d="M210 275h390M275 275l-28 75m28-75 66 75m210-75 40 75m-40-75-75 75M330 220l85 25 85-25m-170 0-50 55m220-55 50 55"/>`,
    `<path d="M285 160v80m-20-70h40m-20-10 110-20v75m-110 180h265m-205-5v-95m130 100v-100m-90-105 55 50m-55-50-47 42m47-42v-48m0 98-55 65m55-65 64 58m-64-118 110-20"/>`,
    `<path d="M280 100v230m-22-210h44m-22-20 130-20v70m-130 205h290m-230-8v-72m150 80v-80m-65-175 2 82m0-42-55 35m55-35 42 40m-42 2-34 54m34-54 38 54m10-175h150"/>`,
    `<path d="M210 320h385m-40 0 55-110m-265 10 90 0 90 100m-180-100-70 100m195-100-30-75m-110 75 30-75m-30 75 90 0m-45-85h-50m50 0v-32m0 32h55m-55 0v-32"/>`,
    `<path d="M185 310h430m-390-30v60m-25-50v40m380-50v60m25-50v40M400 170l-35 74m35-74 80 34m-80-34 5-45m-5 119-65 72m65-72 95 53m-145-81-45 27m195-37 60 5"/>`,
  ];
  const illustration = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#20232c"/><stop offset="1" stop-color="#101116"/></linearGradient><linearGradient id="glow"><stop stop-color="${accent}" stop-opacity=".24"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></linearGradient></defs><rect width="800" height="480" fill="url(#bg)"/><circle cx="590" cy="210" r="205" fill="url(#glow)"/><path d="M0 390 260 255l180 80 360-195v340H0Z" fill="#0b0c10" opacity=".55"/><g fill="none" stroke="${accent}" stroke-linecap="round" stroke-linejoin="round" stroke-width="15">${poses[id - 1]}</g><circle cx="400" cy="125" r="28" fill="#e4e4e7"/><g fill="none" stroke="#d4d4d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="19">${poses[id - 1]}</g><rect x="45" y="38" width="72" height="42" rx="21" fill="${accent}"/><text x="81" y="66" text-anchor="middle" fill="#111" font-family="Arial,sans-serif" font-size="20" font-weight="700">${String(id).padStart(2, "0")}</text><text x="45" y="432" fill="#fff" font-family="Arial,sans-serif" font-size="29" font-weight="700">${title}</text><text x="45" y="461" fill="#a1a1aa" font-family="Arial,sans-serif" font-size="15" letter-spacing="3">FITLOG WORKOUT</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(illustration)}`;
};

export const fallbackWorkouts: LibraryItem[] = [
  {
    id: 1, name: "Barbell Back Squat", image: createWorkoutArt(1, "Barbell Back Squat"), muscleGroups: ["Quadriceps", "Glutes"], equipment: "Barbell", difficulty: "Intermediate", duration: 12, caloriesBurned: 90, sets: 4, reps: "8-10", rating: 4.9,
    description: "A compound lower-body lift that builds strength in the legs and hips.", instructions: ["Stand with the bar across your upper back.", "Bend your hips and knees while keeping your chest lifted.", "Drive through your feet to return to standing."],
  },
  {
    id: 2, name: "Dumbbell Bench Press", image: createWorkoutArt(2, "Dumbbell Bench Press"), muscleGroups: ["Chest", "Triceps"], equipment: "Dumbbells", difficulty: "Beginner", duration: 10, caloriesBurned: 70, sets: 3, reps: "10-12", rating: 4.8,
    description: "A pressing exercise for building chest and arm strength.", instructions: ["Lie on a bench with a dumbbell in each hand.", "Lower the weights beside your chest with control.", "Press the dumbbells upward until your arms are extended."],
  },
  {
    id: 3, name: "Romanian Deadlift", image: createWorkoutArt(3, "Romanian Deadlift"), muscleGroups: ["Hamstrings", "Glutes"], equipment: "Barbell", difficulty: "Intermediate", duration: 12, caloriesBurned: 85, sets: 4, reps: "8-10", rating: 4.8,
    description: "A hip-hinge movement that strengthens the hamstrings and glutes.", instructions: ["Hold the bar in front of your thighs.", "Push your hips back and lower the bar along your legs.", "Squeeze your glutes to stand tall again."],
  },
  {
    id: 4, name: "Lat Pulldown", image: createWorkoutArt(4, "Lat Pulldown"), muscleGroups: ["Back", "Biceps"], equipment: "Cable Machine", difficulty: "Beginner", duration: 10, caloriesBurned: 60, sets: 3, reps: "10-12", rating: 4.7,
    description: "A machine-based pull that targets the upper back and arms.", instructions: ["Sit tall and grip the bar wider than shoulder width.", "Pull the bar toward your upper chest.", "Return the bar slowly until your arms are extended."],
  },
  {
    id: 5, name: "Dumbbell Shoulder Press", image: createWorkoutArt(5, "Dumbbell Shoulder Press"), muscleGroups: ["Shoulders", "Triceps"], equipment: "Dumbbells", difficulty: "Beginner", duration: 9, caloriesBurned: 55, sets: 3, reps: "10-12", rating: 4.6,
    description: "An overhead press for shoulder strength and stability.", instructions: ["Hold dumbbells at shoulder height.", "Brace your core and press the weights overhead.", "Lower them slowly back to shoulder height."],
  },
  {
    id: 6, name: "Cable Seated Row", image: createWorkoutArt(6, "Cable Seated Row"), muscleGroups: ["Back", "Biceps"], equipment: "Cable Machine", difficulty: "Beginner", duration: 10, caloriesBurned: 60, sets: 3, reps: "10-12", rating: 4.7,
    description: "A horizontal pull that develops the middle back.", instructions: ["Sit with your feet supported and hold the handle.", "Pull the handle toward your torso while keeping your back tall.", "Extend your arms slowly to return to the start."],
  },
  {
    id: 7, name: "Dumbbell Walking Lunge", image: createWorkoutArt(7, "Dumbbell Walking Lunge"), muscleGroups: ["Quadriceps", "Glutes"], equipment: "Dumbbells", difficulty: "Intermediate", duration: 10, caloriesBurned: 75, sets: 3, reps: "10 each leg", rating: 4.6,
    description: "A single-leg exercise for balance and lower-body strength.", instructions: ["Hold dumbbells at your sides and stand tall.", "Step forward and lower until both knees are bent.", "Push through the front foot and step into the next lunge."],
  },
  {
    id: 8, name: "Plank", image: createWorkoutArt(8, "Plank"), muscleGroups: ["Core", "Shoulders"], equipment: "Bodyweight", difficulty: "Beginner", duration: 5, caloriesBurned: 30, sets: 3, reps: "30-45 sec", rating: 4.5,
    description: "An isometric core exercise that trains whole-body bracing.", instructions: ["Place your forearms on the floor with elbows under shoulders.", "Keep your body in a straight line from head to heels.", "Brace your midsection and hold without letting your hips sag."],
  },
  {
    id: 9, name: "Dumbbell Biceps Curl", image: createWorkoutArt(9, "Dumbbell Biceps Curl"), muscleGroups: ["Biceps"], equipment: "Dumbbells", difficulty: "Beginner", duration: 8, caloriesBurned: 40, sets: 3, reps: "10-12", rating: 4.5,
    description: "A simple curl that strengthens the front of the upper arms.", instructions: ["Stand with dumbbells by your sides and palms forward.", "Bend your elbows to curl the weights upward.", "Lower the weights slowly without swinging."],
  },
  {
    id: 10, name: "Cable Triceps Pushdown", image: createWorkoutArt(10, "Cable Triceps Pushdown"), muscleGroups: ["Triceps"], equipment: "Cable Machine", difficulty: "Beginner", duration: 8, caloriesBurned: 40, sets: 3, reps: "10-12", rating: 4.5,
    description: "A cable isolation exercise for the back of the upper arms.", instructions: ["Stand at a cable station and hold the attachment at chest height.", "Keep your elbows close to your sides and press down.", "Return the attachment with control."],
  },
  {
    id: 11, name: "Leg Press", image: createWorkoutArt(11, "Leg Press"), muscleGroups: ["Quadriceps", "Glutes"], equipment: "Leg Press Machine", difficulty: "Beginner", duration: 10, caloriesBurned: 70, sets: 3, reps: "10-12", rating: 4.6,
    description: "A machine exercise for building strength through the legs.", instructions: ["Sit with your back against the pad and feet shoulder width apart.", "Lower the platform until your knees are comfortably bent.", "Press through your feet without locking your knees."],
  },
  {
    id: 12, name: "Dumbbell Romanian Deadlift", image: createWorkoutArt(12, "Dumbbell Romanian Deadlift"), muscleGroups: ["Hamstrings", "Glutes"], equipment: "Dumbbells", difficulty: "Beginner", duration: 10, caloriesBurned: 65, sets: 3, reps: "10-12", rating: 4.6,
    description: "A dumbbell hip hinge for strengthening the posterior chain.", instructions: ["Hold dumbbells in front of your thighs.", "Push your hips back and lower the weights while keeping your back neutral.", "Drive your hips forward to stand upright."],
  },
];
