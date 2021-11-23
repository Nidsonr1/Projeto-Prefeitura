import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Answers } from "./Answers";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;
  
  @Column()
  admin?: boolean;

  @Column()
  salt?: string;

  @CreateDateColumn()
  created_at: Date;
  
  @CreateDateColumn()
  updated_at: Date;
  
  @OneToMany(() => Answers, answers => answers.question)
  
  @OneToMany(() => Answers, answers => answers.user)
  answers: Answers;


  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
    if(!this.admin) {
      this.admin = false;
    }
  }
}

export { User }