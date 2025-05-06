interface Exercise {
  name: string;
  type: string;
  duration: number;
  caloriesBurned: number;
}

interface DailyWorkout {
  day: string;
  exercises: Exercise[];
}

export const weeklyWorkouts: DailyWorkout[] = [
  {
    day: "Monday",
    exercises: [
      {
        name: "Bench Press",
        type: "strength",
        duration: 45,
        caloriesBurned: 300,
      },
      {
        name: "Incline Dumbbell Press",
        type: "strength",
        duration: 30,
        caloriesBurned: 200,
      },
      {
        name: "Tricep Dips",
        type: "strength",
        duration: 15,
        caloriesBurned: 100,
      },
    ],
  },
  {
    day: "Tuesday",
    exercises: [
      {
        name: "Pull-Ups",
        type: "strength",
        duration: 30,
        caloriesBurned: 250,
      },
      {
        name: "Barbell Rows",
        type: "strength",
        duration: 40,
        caloriesBurned: 300,
      },
      {
        name: "Bicep Curls",
        type: "strength",
        duration: 20,
        caloriesBurned: 150,
      },
    ],
  },
  {
    day: "Wednesday",
    exercises: [
      {
        name: "Running",
        type: "cardio",
        duration: 30,
        caloriesBurned: 400,
      },
      {
        name: "Cycling",
        type: "cardio",
        duration: 45,
        caloriesBurned: 500,
      },
    ],
  },
  {
    day: "Thursday",
    exercises: [
      {
        name: "Squats",
        type: "strength",
        duration: 40,
        caloriesBurned: 350,
      },
      {
        name: "Lunges",
        type: "strength",
        duration: 30,
        caloriesBurned: 250,
      },
      {
        name: "Deadlifts",
        type: "strength",
        duration: 30,
        caloriesBurned: 300,
      },
    ],
  },
  {
    day: "Friday",
    exercises: [
      {
        name: "Plank",
        type: "core",
        duration: 10,
        caloriesBurned: 50,
      },
      {
        name: "Sit-Ups",
        type: "core",
        duration: 20,
        caloriesBurned: 100,
      },
      {
        name: "Russian Twists",
        type: "core",
        duration: 15,
        caloriesBurned: 80,
      },
    ],
  },
  {
    day: "Saturday",
    exercises: [
      {
        name: "Yoga",
        type: "flexibility",
        duration: 60,
        caloriesBurned: 200,
      },
      {
        name: "Stretching",
        type: "flexibility",
        duration: 30,
        caloriesBurned: 100,
      },
    ],
  },
  {
    day: "Sunday",
    exercises: [
      {
        name: "Rest Day",
        type: "rest",
        duration: 0,
        caloriesBurned: 0,
      },
    ],
  },
];