import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {UnitPositionService} from './unit_position.service';

@Resolver('UnitPosition')
export class UnitPositionResolver {
  constructor(private readonly unitPositionService: UnitPositionService) {}


  @Query()
  async getUnitPosition() {
    // console.log('getUnitPosition')
    return this.unitPositionService.findAll();
  }

// // @Mutation()
// // async createPost(
// //   @Args('createPostInput') createPostInput: PostInput){
// //   return this.postsService.create(createPostInput);
// // }

// @Query()
// async getPostByID(
//   @Args('id') id: string){
//   return this.unitPositionService.findOne(id);
// }

@Mutation()
async deletePost(
  @Args('id') id: string){
  return this.unitPositionService.remove(id);
}

}