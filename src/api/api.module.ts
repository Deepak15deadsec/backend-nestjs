import { Module } from '@nestjs/common';
import { AdvertisersModule } from './advertisers/advertisers.module';

@Module({
  imports: [ AdvertisersModule],
})
export class ApiModule {}
