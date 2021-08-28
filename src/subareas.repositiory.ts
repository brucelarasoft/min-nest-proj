import { EntityRepository, Repository } from 'typeorm';
import { Subarea } from './subarea.entity';

@EntityRepository(Subarea)
export class SubareasRepository extends Repository<Subarea> {}
