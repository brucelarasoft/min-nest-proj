// import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Area } from './area.entity';

@Entity('Subarea')
export class Subarea {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column()
  Name: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @ManyToOne(() => Area, (Area) => Area.Subareas) // note: we will create author property in the Photo class below
  @JoinColumn({ name: 'AreaId', referencedColumnName: 'Id' })
  Area: Area;
}
