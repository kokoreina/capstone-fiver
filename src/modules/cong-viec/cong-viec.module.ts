import { Module } from '@nestjs/common';
import { CongViecService } from './cong-viec.service';
import { CongViecController } from './cong-viec.controller';

@Module({
  controllers: [CongViecController],
  providers: [CongViecService],
})
export class CongViecModule {}
