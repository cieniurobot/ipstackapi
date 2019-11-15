import UserService from "../../src/services/UserService";

describe('UserService test', () => {
    describe('UserService init', () => {
        it('should initialised', () => {
            const userService = new UserService();
            expect(userService).toBeInstanceOf(UserService);
        });
    });

    describe('authenticate method test', () => {
        it('should authenticated', async () => {
            const expectedResult = {
                "firstName": "Test",
                "id": 1,
                "lastName": "User",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3Mzg0NjgwN30.fFdrscoqoPWq73JYzqbQsEekgsJmgqeO2bwWry31Hl0",
                "username": "test"
            };

            const userService = new UserService();
            const user = await userService.authenticate('test', 'test');
            expect(user.id).toEqual(expectedResult.id);
            expect(user.firstName).toEqual(expectedResult.firstName);
            expect(user.lastName).toEqual(expectedResult.lastName);
            expect(user.username).toEqual(expectedResult.username);
            expect(user.token).not.toBeNull();
        });

        it('should not authenticated', async () => {
            const userService = new UserService();
            const user = await userService.authenticate('test2', 'test2');
            expect(user).toBeNull();
        });
    });
});
