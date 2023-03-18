import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Guest } from "./guest.entity";
import { User } from "./users.entity";

@Entity()
class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  zipCode: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  road: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @OneToOne(() => User, (user) => user.address, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;

  @OneToOne(() => Guest, (guest) => guest.address, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  guest: Guest;
}

export { Address };
