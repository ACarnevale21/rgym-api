export class RoutineDomain {
  name: string;
  description: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    rest: number;
  }[];
  createdBy: string;
  createdAt?: Date; // Estos campos opcionales, ya que los maneja Mongoose
  updatedAt?: Date;
}
