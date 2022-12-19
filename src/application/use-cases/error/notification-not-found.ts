import { error } from "console";

export class NotificationNotFound extends Error {
    constructor() {
        super('Notification not found');
    }
}