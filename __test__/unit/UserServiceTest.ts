import UserService from "../../src/services/UserService";

describe('UserService test', () => {
    describe('UserService init', () => {
        it('should initialised', () => {
            const userService = new UserService();
            expect(userService).toBeInstanceOf(UserService);
        });
    });
});
