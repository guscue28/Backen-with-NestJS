import { Document } from 'mongoose';

export interface MensajeInterface extends Document {
  readonly fullName: string;
  readonly email: string;
  readonly text: string;
}
