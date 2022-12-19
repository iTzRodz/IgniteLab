import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notification";



describe('Count recipient notification', () => {
    it('should be able to count a recipient notifications', async () => {
        const notificationRepository = new InMemoryotificationRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationRepository);


        await notificationRepository.create(makeNotification({ recipientId: 'recipient-1' }));
        await notificationRepository.create(makeNotification({ recipientId: 'recipient-1' }));
        await notificationRepository.create(makeNotification({ recipientId: 'recipient-2' }));

        
        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2);
    });


});