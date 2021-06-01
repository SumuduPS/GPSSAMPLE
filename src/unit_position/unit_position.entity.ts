import { Column,  PrimaryColumn, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class UnitPosition {
  @PrimaryColumn({ type: 'timestamp'})
  date_time: Date

  @PrimaryColumn({ type: 'int'})
  unit_id: number;

  @Column({type:'numeric', nullable: true})
  latitude: number;

  @Column({type:'numeric', nullable: true})
  longitude: number;

  @Column({type:'numeric', nullable: true})
  speed: number;

  @Column({type:'numeric', nullable: true})
  bearing: number;

  @Column({type:'numeric', nullable: true})
  hdop: number;

  @Column({ type: 'smallint'})
  satellites: number;

  @Column({ type: 'timestamp'} )
  created: Date;
}