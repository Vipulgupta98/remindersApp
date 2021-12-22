import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class user1640165722440 implements MigrationInterface {
    private readonly tableName = "users";
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
        new Table({
            name: this.tableName,
            columns: [
            {
                name: "id",
                type: "uuid",
                isPrimary: true,
                isNullable: false,
                default: "uuid_generate_v4()",
            },
            {
                name: "email",
                type: "varchar",
                isNullable: true,
                isUnique: false,
            },
            {
                name: "password",
                type: "varchar",
                isNullable: true,
            },
            {
                name: "first_name",
                type: "varchar",
                isNullable: true,
            },
            {
                name: "last_name",
                type: "varchar",
                isNullable: true,
            },
            {
                name: "dob",
                type: "varchar",
                isNullable: true,
            },

            {
                name: "created_at",
                type: "timestamptz",
                isNullable: false,
                default: "now()",
            },
            {
                name: "updated_at",
                type: "timestamptz",
                isNullable: false,
                default: "now()",
            },
        ],
      })
    );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
