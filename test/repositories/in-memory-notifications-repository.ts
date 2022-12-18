import { Notification } from "../../src/aplication/entities/notification";
import { NotificationsRepository } from "../../src/aplication/repositories/notifications-repository";

export class InMemoryotificationRepository implements NotificationsRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);

    }
};