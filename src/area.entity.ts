// import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Subarea } from './subarea.entity';

@Entity('Area')
export class Area {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({
    unique: true,
  })
  Name: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @OneToMany(() => Subarea, (Subarea) => Subarea.Area)
  Subareas: Subarea[];
}
