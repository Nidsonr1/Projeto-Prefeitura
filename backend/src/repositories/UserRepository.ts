import crypto from 'crypto';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { IUserRepository, ICreateUser } from "./interfaces/IUserRepository";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }
  
  async create(data: ICreateUser): Promise<void> {
    const { name, email, password } = data;

    const salt = await this.salt(16);

    const encrypted = await this.encryptPassword(password, salt);

    const user = this.userRepository.create({
      name,
      email,
      password: encrypted,
      salt
    });

    await this.userRepository.save(user);
  }

  async salt(length: number): Promise<string> {
    const salt = crypto.randomBytes(Math.ceil(length/2))
      .toString("hex")
      .slice(0, 16);
    return salt;
  }

  async encryptPassword(password: string, salt: string): Promise<string> {
    let hash = crypto.createHmac("sha512", salt)
    hash.update(password);

    const encryptPassword = hash.digest("hex");
    return encryptPassword;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email });
    return user;
  }
  
  async turnUserAdmin(id: string): Promise<void> {
    await createQueryBuilder().update(User).set({
      admin: true
    })
    .where({ id })
    .execute();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ id });
    return user;
  }

  async login(email: string, password: string, salt: string): Promise<User> {
    const decryptPassword = await this.encryptPassword(password, salt);

    const user = await this.userRepository.findOne({ password: decryptPassword });

    return user
  }
}

export { UserRepository }