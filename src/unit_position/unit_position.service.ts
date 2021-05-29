import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UnitPosition } from './unit_position.entity';
import {UnitPositionOutput} from '../graphql';
// import {PostInput} from '../graphql'; 

@Injectable()
export class UnitPositionService {
  constructor(
    @InjectRepository(UnitPosition)
    private readonly unitPositionRepository: Repository<UnitPosition>,
  ) {}

  // create(createPostDto: PostInput): Promise<PostOutput> {
  //   const posting = new Posting();
  //   posting.title=createPostDto.title;
  // //   posting.desciption=createPostDto.desciption;
  // //   return this.postsRepository.save(posting);
  // // }

  async findAll(): Promise<UnitPositionOutput[]> {
    return this.unitPositionRepository.find();
  }

  // findOne(id: string): Promise<PostOutput> {
  //   return this.unitPositionRepository.findOne(id);
  // }

  async remove(id: string): Promise<Boolean> {
   const deletedStatus=await this.unitPositionRepository.delete(id);
   if(deletedStatus.affected>0){
     return true;
   }else{
     return false;
   }
  }
}