import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./payment.entity";
import { User } from "./users.entity";

@Entity("suppliers")
class Supplier {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cnpj: string;

  @Column({ unique: true })
  IE: string;

  @Column()
  phone: string;

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

  @ManyToOne(() => User, (user) => user.suppliers)
  user: User;

  @OneToMany(() => Payment, (payment) => payment.supplier)
  payments: Payment[];
}

export { Supplier };
