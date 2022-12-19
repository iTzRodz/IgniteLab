import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./error/notification-not-found";
import { UnReadNotification } from "./unread-notification";

describe('UnRead notification', () => {
    it('should be able to unRead a notification', async () => {
        const notificationRepository = new InMemoryotificationRepository();
        const unreadNotification = new UnReadNotification(notificationRepository);

        const notification = makeNotification({
            readAT: new Date(),
        });

        await notificationRepository.create(notification);
        await unreadNotification.execute({ notificationId: notification.id });

        expect(notificationRepository.notifications[0].readAT).toBeNull();
    });

    it('should not be able to unRead a non existing notification', async () => {
        const notificationRepository = new InMemoryotificationRepository();
        const unreadNotification = new UnReadNotification(notificationRepository);

        expect(() => {
            return unreadNotification.execute({
                notificationId: "fake-notification-id",
            });
        }).rejects.toThrow(NotificationNotFound)
    })
});