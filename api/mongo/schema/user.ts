import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: Types.ObjectId, auto: true })
  _id?: Types.ObjectId;
  
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'participant' })
  role: 'admin' | 'organizer' | 'staff_leader' | 'staff' | 'speaker' | 'participant';

  @Prop()
  profilePicture?: string;

  @Prop({ default: () => new Date() })
  registrationDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
