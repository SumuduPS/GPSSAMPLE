import { Column,  PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class UnitStatus {
  @PrimaryColumn({ type: 'timestamp'})
  date_time: Date

  @PrimaryColumn({ type: 'int'})
  unit_id: number;

  @Column({ type: 'smallint'})
  msg_type: number;

  @Column({type:'text',  nullable: true})
  msg: string;

  @Column({ type: 'timestamp'})
  created: Date;
}