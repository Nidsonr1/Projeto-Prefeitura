import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAnswers1637628142418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "answers",
            columns: [
                {
                    name: "id",
                    type: "uuid", 
                    isPrimary: true
                },
                {
                    name: "answers",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "questionId",
                    isUnique: true,
                    type: "int"
                },
                {
                    name: "userId",
                    isUnique: true,
                    type: "uuid"
                }
            ],
            foreignKeys: [ 
                new TableForeignKey({
                    columnNames: ["userId"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }),

                new TableForeignKey({
                    columnNames: ["questionId"],
                    referencedTableName: "questions",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                })
            ] 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("answers")
    }

}
