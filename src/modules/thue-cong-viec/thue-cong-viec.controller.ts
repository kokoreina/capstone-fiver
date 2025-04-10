import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThueCongViecService } from './thue-cong-viec.service';
import { CreateThueCongViecDto } from './dto/create-thue-cong-viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';

@Controller('thue-cong-viec')
export class ThueCongViecController {
  constructor(private readonly thueCongViecService: ThueCongViecService) {}

  @Post()
  create(@Body() createThueCongViecDto: CreateThueCongViecDto) {
    return this.thueCongViecService.create(createThueCongViecDto);
  }
  @SkipPermission()
  @Get('list')
  async getListThue() {
    const result=await this.thueCongViecService.getListThue();
    return result
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thueCongViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThueCongViecDto: UpdateThueCongViecDto) {
    return this.thueCongViecService.update(+id, updateThueCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thueCongViecService.remove(+id);
  }
}
