import 'module-alias/register';
import { UserRepository } from '@user/domain/user-repository';
import {FindUserUserCase} from '@user/application/findUser';

describe("Find user Use case", () => {

    it("Find a user", () => {
        const user = {
            firstName: "true"
        };
        const userRepository: jest.Mocked<UserRepository>  = {
            findAll: jest.fn(),
            findByName: jest.fn().mockReturnValue(user),
        };
        const usecase = new FindUserUserCase(userRepository);

        expect(usecase.run("first name", "last name")).toBe(user);
    });
});