import { Content } from "./content"

describe('Notification content', () => {

    it('should be able to create a notification content', () => {
        const content = new Content('Você recebeu uma solicitção de amizade')

        expect(content).toBeTruthy(); // god good
    });

    it('should be not be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content('Oii')).toThrow();

        // god good
    });

    it('should be not be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();

        // god good
    });
})
