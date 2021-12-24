import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class reminders1640165747440 implements MigrationInterface {
    private readonly tableName = "reminders";
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
                name: "reminder_name",
                type: "varchar",
                isNullable: true,
                isUnique: false,
            },
            {
                name: "description",
                type: "varchar",
                isNullable: true,
            },
            {
                name: "reminder_date",
                type: "varchar",
                isNullable: true,
            },
            {
                name: "status",
                type: "varchar",
                isNullable: true,
            },
            {
                name: "user",
                type: "uuid",
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
        foreignKeys: [
            new TableForeignKey({
              name: 'reminders_user_fk',
              columnNames: ['user'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
            })
          ],
      })
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
