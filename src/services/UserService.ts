import config from 'config';
import jwt from 'jsonwebtoken';


export default class UserService {
    private users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

    async authenticate(username: string, password: string) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            const token = jwt.sign({ sub: user.id }, config.get('api.secret'));
            const { password, ...userWithoutPassword } = user;
            return {
                ...userWithoutPassword,
                token
            };
        }
    }
}
