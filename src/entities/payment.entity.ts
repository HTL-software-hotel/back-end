import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./supplier.entity";
import { User } from "./users.entity";

@Entity("payments")
class Payment {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  type: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.payments)
  supplier: Supplier;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;
}

export { Payment };
