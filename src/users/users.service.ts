import { Injectable } from '@nestjs/common';
import { users, User } from 'src/database/users';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UsersService {
  create(user: CreateUserDto) {
    const new_user = new User(user.login, user.password);
    users.push(new_user);
    return {
      id: new_user.id,
      login: new_user.login,
      version: new_user.version,
      createdAt: new_user.createdAt,
      updatedAt: new_user.updatedAt,
    };
  }

  findAll() {
    const allUsers = users.map(user => ({
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
    return allUsers;
  }

  findOne(id: string) {
    const user = users.find(u => u.id === id);
    if (!user) return null;
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = users.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    if (user.password === updateUserDto.oldPassword) {
      user.password = updateUserDto.newPassword;
      user.updatedAt = Date.now();
      user.version++;
    } else {
      throw new Error('old password is incorrect');
    }
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  remove(id: string) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) throw new Error('User not found');
    users.splice(index, 1);
    return this.findAll();
  }
}