import { createConnection } from "typeorm";
import * as typeorm from 'typeorm';
import { UserRepository } from "./typeorm.repository";

describe('UserRepository', () => {
    it('findByName', async () => {

        const dbConnection = await createConnection();

        const repository = dbConnection.getCustomRepository(UserRepository)

        repository.createQueryBuilder = jest.fn().mockReturnValue({
            where: jest.fn().mockReturnThis(),
            andWhere: jest.fn().mockReturnThis(),
            getMany: jest.fn().mockReturnValue([])
        })

        expect((repository as any).findByName("first name", "last name")).toEqual([])

        const qBuilder = repository.createQueryBuilder()
        expect(qBuilder.where).toHaveBeenNthCalledWith(1, "user.firstName = :firstName", { firstName: "first name" })
        expect(qBuilder.andWhere).toHaveBeenNthCalledWith(1, "user.lastName = :lastName", { lastName: "last name" })
        expect(qBuilder.getMany).toHaveBeenNthCalledWith(1)
    })
})
