import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { GetRecipientNotifications } from "./get-recipient-notifications";



describe('Get recipient notification', () => {
    it('should be able to get a recipient notifications', async () => {
        const notificationRepository = new InMemoryotificationRepository();
        const getRecipientNotifications = new GetRecipientNotifications(notificationRepository);


        await notificationRepository.create(makeNotification({ recipientId: 'recipient-1' }));
        await notificationRepository.create(makeNotification({ recipientId: 'recipient-1' }));
        await notificationRepository.create(makeNotification({ recipientId: 'recipient-2' }));


        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' })
        ]));
    });


});