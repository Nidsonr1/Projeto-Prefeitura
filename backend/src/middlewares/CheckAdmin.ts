import { NextFunction, Request, Response } from "express";

import { UserRepository } from "../repositories/UserRepository";

async function checkAdmin(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request.headers;

  const userRepository = new UserRepository();

  const user = await userRepository.findById(String(user_id));

  if(!user) {
    return response.status(404).json({ error: "Usuário não encontrado" });
  }

  if(!user.admin) {
    return response.status(403).json({ error: "Você não tem permissão" });
  }

  next();
}

export { checkAdmin }