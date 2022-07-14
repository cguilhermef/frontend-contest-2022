import { Injectable } from '@nestjs/common';
import { DatabaseService, User } from './database.service';

@Injectable()
export class AppService {
  constructor(private dbService: DatabaseService) {}

  login(email: string, password: string): boolean {
    const user = this.dbService.db
      .get('users')
      .find({
        email,
        password,
      })
      .value();
    return user !== undefined;
  }

  listUsers(): User[] {
    const users = this.dbService.db.get('users').value();
    return users.map((user) => {
      const { id, email, name } = user;
      return {
        id,
        email,
        name,
        password: null,
      };
    });
  }

  createUser(user: User): User {
    const count = this.listUsers().length;
    const newUser = {
      ...user,
      id: count,
    };
    this.dbService.db.get('users').push(newUser).write();
    return newUser;
  }

  editUser(user: User): User {
    this.dbService.db.get('users').find({ id: user.id }).assign(user).write();
    return this.dbService.db.get('users').find({ id: user.id }).value();
  }
}
