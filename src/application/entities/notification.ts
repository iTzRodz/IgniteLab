import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAT?: Date | null;
  canceledAT?: Date | null;
  createdAT: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAT?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
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

  public read() {
    this.props.readAT = new Date();
  }

  public unread() {
    this.props.readAT = null;
  }

  public get readAT(): Date | null | undefined {
    return this.props.readAT;
  }

  public cancel() {
    this.props.canceledAT = new Date();
  }

  public get canceledAT(): Date | null | undefined {
    return this.props.canceledAT;
  }

  public get CreatedAT() {
    return this.props.createdAT;
  }
}
