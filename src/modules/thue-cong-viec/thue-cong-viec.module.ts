import { Module } from '@nestjs/common';
import { ThueCongViecService } from './thue-cong-viec.service';
import { ThueCongViecController } from './thue-cong-viec.controller';

@Module({
  controllers: [ThueCongViecController],
  providers: [ThueCongViecService],
})
export class ThueCongViecModule {}
