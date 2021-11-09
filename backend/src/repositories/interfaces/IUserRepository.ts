import { User } from "../../entities/User";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  create(data: ICreateUser): Promise<void>;
  salt(length: number): Promise<string>;
  encryptPassword(password: string, salt: string): Promise<string>;
  findByEmail(email: string): Promise<User>;
  turnUserAdmin(id: string): Promise<void>;
  findById(id: string): Promise<User>
  login(email: string, password: string, salt: string): Promise<User>;
}

export { ICreateUser, IUserRepository };