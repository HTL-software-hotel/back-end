import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Guest } from "./guest.entity";
import { Payment } from "./payment.entity";
import { Supplier } from "./supplier.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  phone: string;

  @Column()
  birthdate: Date;

  @Column()
  isSuperUser: boolean;

  @Column()
  isAdm: boolean;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, (address) => address.user, { eager: true })
  address: Address;

  @OneToMany(() => Guest, (guest) => guest.user)
  guesties: Guest[];

  @OneToMany(() => Supplier, (supplier) => supplier.user)
  suppliers: Supplier[];

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];
}

export { User };
