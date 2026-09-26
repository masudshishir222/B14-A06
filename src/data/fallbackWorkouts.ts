import workoutImage from "@/assets/banner.png";
import type { LibraryItem } from "@/Types/type";

const image = workoutImage.src;

export const fallbackWorkouts: LibraryItem[] = [
  {
    id: 1, name: "Barbell Back Squat", image, muscleGroups: ["Quadriceps", "Glutes"], equipment: "Barbell", difficulty: "Intermediate", duration: 12, caloriesBurned: 90, sets: 4, reps: "8-10", rating: 4.9,
    description: "A compound lower-body lift that builds strength in the legs and hips.", instructions: ["Stand with the bar across your upper back.", "Bend your hips and knees while keeping your chest lifted.", "Drive through your feet to return to standing."],
  },
  {
    id: 2, name: "Dumbbell Bench Press", image, muscleGroups: ["Chest", "Triceps"], equipment: "Dumbbells", difficulty: "Beginner", duration: 10, caloriesBurned: 70, sets: 3, reps: "10-12", rating: 4.8,
    description: "A pressing exercise for building chest and arm strength.", instructions: ["Lie on a bench with a dumbbell in each hand.", "Lower the weights beside your chest with control.", "Press the dumbbells upward until your arms are extended."],
  },
  {
    id: 3, name: "Romanian Deadlift", image, muscleGroups: ["Hamstrings", "Glutes"], equipment: "Barbell", difficulty: "Intermediate", duration: 12, caloriesBurned: 85, sets: 4, reps: "8-10", rating: 4.8,
    description: "A hip-hinge movement that strengthens the hamstrings and glutes.", instructions: ["Hold the bar in front of your thighs.", "Push your hips back and lower the bar along your legs.", "Squeeze your glutes to stand tall again."],
  },
  {
    id: 4, name: "Lat Pulldown", image, muscleGroups: ["Back", "Biceps"], equipment: "Cable Machine", difficulty: "Beginner", duration: 10, caloriesBurned: 60, sets: 3, reps: "10-12", rating: 4.7,
    description: "A machine-based pull that targets the upper back and arms.", instructions: ["Sit tall and grip the bar wider than shoulder width.", "Pull the bar toward your upper chest.", "Return the bar slowly until your arms are extended."],
  },
  {
    id: 5, name: "Dumbbell Shoulder Press", image, muscleGroups: ["Shoulders", "Triceps"], equipment: "Dumbbells", difficulty: "Beginner", duration: 9, caloriesBurned: 55, sets: 3, reps: "10-12", rating: 4.6,
    description: "An overhead press for shoulder strength and stability.", instructions: ["Hold dumbbells at shoulder height.", "Brace your core and press the weights overhead.", "Lower them slowly back to shoulder height."],
  },
  {
    id: 6, name: "Cable Seated Row", image, muscleGroups: ["Back", "Biceps"], equipment: "Cable Machine", difficulty: "Beginner", duration: 10, caloriesBurned: 60, sets: 3, reps: "10-12", rating: 4.7,
    description: "A horizontal pull that develops the middle back.", instructions: ["Sit with your feet supported and hold the handle.", "Pull the handle toward your torso while keeping your back tall.", "Extend your arms slowly to return to the start."],
  },
  {
    id: 7, name: "Dumbbell Walking Lunge", image, muscleGroups: ["Quadriceps", "Glutes"], equipment: "Dumbbells", difficulty: "Intermediate", duration: 10, caloriesBurned: 75, sets: 3, reps: "10 each leg", rating: 4.6,
    description: "A single-leg exercise for balance and lower-body strength.", instructions: ["Hold dumbbells at your sides and stand tall.", "Step forward and lower until both knees are bent.", "Push through the front foot and step into the next lunge."],
  },
  {
    id: 8, name: "Plank", image, muscleGroups: ["Core", "Shoulders"], equipment: "Bodyweight", difficulty: "Beginner", duration: 5, caloriesBurned: 30, sets: 3, reps: "30-45 sec", rating: 4.5,
    description: "An isometric core exercise that trains whole-body bracing.", instructions: ["Place your forearms on the floor with elbows under shoulders.", "Keep your body in a straight line from head to heels.", "Brace your midsection and hold without letting your hips sag."],
  },
  {
    id: 9, name: "Dumbbell Biceps Curl", image, muscleGroups: ["Biceps"], equipment: "Dumbbells", difficulty: "Beginner", duration: 8, caloriesBurned: 40, sets: 3, reps: "10-12", rating: 4.5,
    description: "A simple curl that strengthens the front of the upper arms.", instructions: ["Stand with dumbbells by your sides and palms forward.", "Bend your elbows to curl the weights upward.", "Lower the weights slowly without swinging."],
  },
  {
    id: 10, name: "Cable Triceps Pushdown", image, muscleGroups: ["Triceps"], equipment: "Cable Machine", difficulty: "Beginner", duration: 8, caloriesBurned: 40, sets: 3, reps: "10-12", rating: 4.5,
    description: "A cable isolation exercise for the back of the upper arms.", instructions: ["Stand at a cable station and hold the attachment at chest height.", "Keep your elbows close to your sides and press down.", "Return the attachment with control."],
  },
  {
    id: 11, name: "Leg Press", image, muscleGroups: ["Quadriceps", "Glutes"], equipment: "Leg Press Machine", difficulty: "Beginner", duration: 10, caloriesBurned: 70, sets: 3, reps: "10-12", rating: 4.6,
    description: "A machine exercise for building strength through the legs.", instructions: ["Sit with your back against the pad and feet shoulder width apart.", "Lower the platform until your knees are comfortably bent.", "Press through your feet without locking your knees."],
  },
  {
    id: 12, name: "Dumbbell Romanian Deadlift", image, muscleGroups: ["Hamstrings", "Glutes"], equipment: "Dumbbells", difficulty: "Beginner", duration: 10, caloriesBurned: 65, sets: 3, reps: "10-12", rating: 4.6,
    description: "A dumbbell hip hinge for strengthening the posterior chain.", instructions: ["Hold dumbbells in front of your thighs.", "Push your hips back and lower the weights while keeping your back neutral.", "Drive your hips forward to stand upright."],
  },
];
