import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User as UserDomain } from "@domain/user";

@Entity()
export class User implements UserDomain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
