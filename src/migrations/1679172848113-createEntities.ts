import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntities1679172848113 implements MigrationInterface {
    name = 'createEntities1679172848113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "suppliers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cnpj" character varying NOT NULL, "IE" character varying NOT NULL, "phone" character varying NOT NULL, "zipCode" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "road" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying NOT NULL, "userId" uuid, CONSTRAINT "UQ_66181e465a65c2ddcfa9c00c9c7" UNIQUE ("email"), CONSTRAINT "UQ_fce20fe3509933fa1931ae7cdad" UNIQUE ("cnpj"), CONSTRAINT "UQ_52fba6c6e8c6ac67aef08f31e49" UNIQUE ("IE"), CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payments" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "type" character varying NOT NULL, "supplierId" integer, "userId" uuid, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guesties" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "phone" character varying NOT NULL, "birthdate" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_f612952ebab64d315e57d1f5e23" UNIQUE ("email"), CONSTRAINT "UQ_172d1c1e1b4d7a565c5d16a0a9a" UNIQUE ("cpf"), CONSTRAINT "PK_07f766cd22060eb0fb881858e0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD "guestId" integer`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "UQ_6c0b82a0fbd5655bb86d3eb0009" UNIQUE ("guestId")`);
        await queryRunner.query(`ALTER TABLE "suppliers" ADD CONSTRAINT "FK_8b6a94866e7d6ac179bbb67a1f8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_c93c5c654f9862a026c5249ac6a" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_d35cb3c13a18e1ea1705b2817b1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "guesties" ADD CONSTRAINT "FK_174ef80597dc720809c73b4b73d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_6c0b82a0fbd5655bb86d3eb0009" FOREIGN KEY ("guestId") REFERENCES "guesties"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_6c0b82a0fbd5655bb86d3eb0009"`);
        await queryRunner.query(`ALTER TABLE "guesties" DROP CONSTRAINT "FK_174ef80597dc720809c73b4b73d"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_d35cb3c13a18e1ea1705b2817b1"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_c93c5c654f9862a026c5249ac6a"`);
        await queryRunner.query(`ALTER TABLE "suppliers" DROP CONSTRAINT "FK_8b6a94866e7d6ac179bbb67a1f8"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "UQ_6c0b82a0fbd5655bb86d3eb0009"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "guestId"`);
        await queryRunner.query(`DROP TABLE "guesties"`);
        await queryRunner.query(`DROP TABLE "payments"`);
        await queryRunner.query(`DROP TABLE "suppliers"`);
    }

}
