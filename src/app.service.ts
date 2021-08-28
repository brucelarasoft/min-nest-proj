import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { AreasRepository } from './areas.repository';
import { SubareasRepository } from './subareas.repositiory';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AreasRepository)
    private areasRepository: AreasRepository,
    @InjectRepository(SubareasRepository)
    private subareasRepository: SubareasRepository,
  ) {}

  async getHello(): Promise<any> {
    await this.areasRepository.insert({
      Id: randomUUID(),
    });
    await this.subareasRepository.insert({
      Id: randomUUID(),
    });
    await this.areasRepository.findOne({});
    return this.subareasRepository.findOne({});
  }
}
