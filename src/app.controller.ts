import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hi')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('you')
  async getHello(): Promise<any> {
    return this.appService.getHello();
  }
}
