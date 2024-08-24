export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age: number;
  weight: number;
  height: number;
  goal: 'Perder peso' | 'Ganar musculo' | 'Mantenerme en forma';
}
