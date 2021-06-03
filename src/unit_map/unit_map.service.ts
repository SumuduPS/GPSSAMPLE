import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitMap } from './unit_map.entity';
import { UnitMapOutput, Upload } from '../graphql';
import { UnitMapInput } from '../graphql';
const fs = require('fs');

@Injectable()
export class UnitMapService {
  constructor(
    @InjectRepository(UnitMap)
    private readonly unitMapRepository: Repository<UnitMap>,
  ) {}

  async getUnitMap(): Promise<UnitMapOutput[]> {
    return await this.unitMapRepository.find();
  }

  /**
   * Inserts unit map
   * @param mapInput
   * @returns UnitMapOutput
   */
  async addUnitMap(mapInput: UnitMapInput): Promise<UnitMapOutput> {
    var data = '';

    var readStream = mapInput.poly_t.file.createReadStream();
 
    readStream
      .on('data', function (chunk) {
        data += chunk;
      })
      .on('end', function () {
       const content=data;
       mapInput.poly_t=content;
      });
    
    mapInput['created'] = new Date();
    return this.unitMapRepository.save(mapInput);
  }
}
