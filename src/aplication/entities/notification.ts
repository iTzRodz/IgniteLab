import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAT?: Date | null;
  createdAT: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAT?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAT: props.createdAT ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAT(readAT: Date | null | undefined) {
    this.props.readAT = readAT;
  }

  public get readAT(): Date | null | undefined {
    return this.props.readAT;
  }

  public get CreatedAT() {
    return this.props.createdAT;
  }
}
