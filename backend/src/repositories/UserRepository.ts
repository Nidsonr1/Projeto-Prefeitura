import crypto from 'crypto';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { IUserRepository, ICreateUser, IRequestProfile } from "./interfaces/IUserRepository";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }
  
  /**Cria novo Usuário */
  async create(data: ICreateUser): Promise<void> {
    const { name, email, password } = data;

    const salt = await this.salt(16);

    const encrypted = await this.encryptPassword(password, salt);

    const user = this.userRepository.create({
      name,
      email,
      password: encrypted,
      salt,
    });

    await this.userRepository.save(user);
  }

  /**Cria salt para senha criptografada */
  async salt(length: number): Promise<string> {
    const salt = crypto.randomBytes(Math.ceil(length/2))
      .toString("hex")
      .slice(0, 16);
    return salt;
  }

  /**Criptografa Senha do usuário */
  async encryptPassword(password: string, salt: string): Promise<string> {
    let hash = crypto.createHmac("sha512", salt)
    hash.update(password);

    const encryptPassword = hash.digest("hex");
    return encryptPassword;
  }

  /**Encontra um usuário a partir do Email */
  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email });
    return user;
  }
  
  /**Torna um usuário Admin */
  async turnUserAdmin(id: string): Promise<void> {
    await createQueryBuilder().update(User).set({
      admin: true
    })
    .where({ id })
    .execute();
  }

  /**Encontra um usuário pelo ID */
  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ id });
    return user;
  }

  /**Loga um usuário */
  async login(email: string, password: string, salt: string): Promise<User> {
    const decryptPassword = await this.encryptPassword(password, salt);

    const user = await this.userRepository.findOne({ password: decryptPassword });

    return user
  }
  
  /**Retorna usuário para perfil*/
  async profile(id: string): Promise<IRequestProfile> {
    const  { name, email } = await this.userRepository.findOne({ id });
    return { id, name, email}
  }
}

export { UserRepository }