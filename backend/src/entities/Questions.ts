import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("questions")
class Questions {
  @PrimaryColumn()
  id: number;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
  
  @CreateDateColumn()
  updated_at: Date;
}

export { Questions }