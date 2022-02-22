import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "@user/infra/typeorm/entity";

export class InsertUsers1645228203798 implements MigrationInterface {
  values: any[];
  constructor() {
    this.values = [
      { firstName: "Timber", lastName: "Saw", age: 45 },
      { firstName: "Phantom", lastName: "Lancer", age: 56 },
    ];
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(this.values)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const deleteQueryBuilder = await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(User);

    const namesClauses = this.values.map(
      (_, index) => `(firstName = :first${index} AND lastName = :last${index})`
    );
    const namesClauseVariables = this.values.reduce(
      (value: any, user, index) => {
        value[`first${index}`] = user.firstName;
        value[`last${index}`] = user.lastName;
        return value;
      },
      {}
    );

    await deleteQueryBuilder
      .where(namesClauses.join(" OR "), namesClauseVariables)
      .execute();
  }
}
