import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const found = this.appService.login(email, password);
    if (!found) {
      throw new HttpException('NotFoundException', HttpStatus.NOT_FOUND);
    }
  }

  @Get('users')
  users() {
    return this.appService.listUsers();
  }
}
