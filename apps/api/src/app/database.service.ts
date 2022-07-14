import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import * as path from 'path';
import { LowdbAsync } from 'lowdb';
import lowdb = require('lowdb/lib/main');
import FileAsync = require('lowdb/adapters/FileAsync');

export interface User {
  id: number;
  email: string;
  name: string;
  password: string | null;
}

type Data = {
  users: User[];
};

@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  db: LowdbAsync<Data>;

  async onApplicationBootstrap() {
    const adapter = new FileAsync<Data>(
      path.join(__dirname, 'database', 'db.json')
    );
    this.db = await lowdb(adapter);
    await this.db
      .defaults({
        users: [],
      })
      .write();
  }
}
