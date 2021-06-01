import { Column,  PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class UnitPower {
  @PrimaryColumn({ type: 'timestamp'})
  date_time: Date

  @PrimaryColumn({ type: 'int'})
  unit_id: number;

  @Column({type:'numeric', nullable: true})
  main: number;

  @Column({type:'numeric', nullable: true})
  solar: number;

  @Column({type:'numeric', nullable: true})
  micro: number;

  @Column({ type: 'timestamp'})
  created: Date;
}