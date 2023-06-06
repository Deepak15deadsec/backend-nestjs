import { Module } from '@nestjs/common';
import { AdvertisersService } from './advertisers.service';
import { AdvertisersController } from './advertisers.controller';
import { Advertiser } from './entities/advertiser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Advertiser])],
  controllers: [AdvertisersController],
  providers: [AdvertisersService]
})
export class AdvertisersModule {}
