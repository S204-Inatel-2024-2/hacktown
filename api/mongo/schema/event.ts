import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type EventDocument = HydratedDocument<Event>;

@Schema({ timestamps: true })
export class Event {
  @Prop({ type: Types.ObjectId, auto: true })
  _id?: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  organizers: Types.ObjectId[]; // Referência para organizadores (usuários)

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Venue' }] })
  venues: Types.ObjectId[]; // Referência para os locais (venues)
}

export const EventSchema = SchemaFactory.createForClass(Event);
