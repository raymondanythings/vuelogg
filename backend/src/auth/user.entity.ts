import { Board } from './../boards/boards.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // eager => true 시 유저 데이터 호출 시 게시글도 함께 가져옴 => mongoose populate
  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
