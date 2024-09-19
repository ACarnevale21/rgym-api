export interface IRoutine {
  name: string;
  description: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    rest: number;
  }[];

  createdBy: string;
}
