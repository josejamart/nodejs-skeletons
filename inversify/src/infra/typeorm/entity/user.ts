import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User as UserDomain } from "@domain/user";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class User implements UserDomain {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => Number)
  @Column()
  age: number;
}
