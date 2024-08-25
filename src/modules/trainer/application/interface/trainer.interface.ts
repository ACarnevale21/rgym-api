export interface ITrainer extends Document {
  name: string;
  email: string;
  password: string;
  routinesCreated: Array<string>;
}
