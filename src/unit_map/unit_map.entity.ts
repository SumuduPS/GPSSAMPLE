import { Column,  PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class UnitMap {
  @PrimaryColumn({ type: 'int'})
  id: number

  @Column({ type: 'smallint'})
  version: number;

  @Column()
  poly_j: string;

  @Column()
  poly_t: string;

  @Column({ type: 'timestamp'} )
  created: Date;
}