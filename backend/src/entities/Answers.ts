import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

import { User } from "./User";
import { Questions } from "./Questions";


@Entity()
class Answers {

  @PrimaryColumn()
  id?: string;

  @Column()
  answers: string;

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.id)
  user:User;

  @ManyToOne(() => Questions, question => question.id)
  question: Questions;
}

export { Answers }