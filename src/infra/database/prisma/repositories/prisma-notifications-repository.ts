import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "src/aplication/entities/notification";
import { NotificationsRepository } from "src/aplication/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements  NotificationsRepository{
    constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAT: notification.readAT,
                createdAT: notification.CreatedAT,
            },
        });
    }

}