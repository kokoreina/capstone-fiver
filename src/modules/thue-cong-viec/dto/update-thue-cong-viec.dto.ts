import { PartialType } from '@nestjs/swagger';
import { CreateThueCongViecDto } from './create-thue-cong-viec.dto';

export class UpdateThueCongViecDto extends PartialType(CreateThueCongViecDto) {
    
}
