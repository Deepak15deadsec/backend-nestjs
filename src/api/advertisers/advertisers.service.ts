import { Injectable } from '@nestjs/common';
import { CreateAdvertiserDto } from './dto/create-advertiser.dto';
import { UpdateAdvertiserDto } from './dto/update-advertiser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertiser } from './entities/advertiser.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AdvertisersService {
  @InjectRepository(Advertiser)
  private readonly repository: Repository<Advertiser>;

  create(createAdvertiserDto: CreateAdvertiserDto) {
    return this.repository.save(createAdvertiserDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} advertiser`;
  }

  update(id: number, updateAdvertiserDto: UpdateAdvertiserDto) {
    return `This action updates a #${id} advertiser`;
  }

  remove(id: number) {
    return `This action removes a #${id} advertiser`;
  }
}
