import 'module-alias/register';
import { UserRepository } from '@adapters/repositories/user-repository';
import {GetUsersUserCase} from '@usecases/user/getUsers';

describe("Find user Use case", () => {

    it("Find a user", () => {
        const user = {
            firstName: "true"
        };
        const userRepository: jest.Mocked<UserRepository>  = {
            findAll: jest.fn().mockReturnValue(user),
            findByName: jest.fn(),
        };
        const usecase = new GetUsersUserCase({userRepository });

        expect(usecase.run()).toBe(user);
    });
});