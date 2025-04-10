import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoaiCongViecService } from './loai-cong-viec.service';
import { CreateLoaiCongViecDto } from './dto/create-loai-cong-viec.dto';
import { UpdateLoaiCongViecDto } from './dto/update-loai-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('loai-cong-viec')
export class LoaiCongViecController {
  constructor(private readonly loaiCongViecService: LoaiCongViecService) {}

  @Post()
  create(@Body() createLoaiCongViecDto: CreateLoaiCongViecDto) {
    return this.loaiCongViecService.create(createLoaiCongViecDto);
  }
  @SkipPermission()
  @Get('list')
  @ApiBearerAuth()
  async getListLoai() {
    const result=await this.loaiCongViecService.getListLoai();
    return result
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loaiCongViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoaiCongViecDto: UpdateLoaiCongViecDto) {
    return this.loaiCongViecService.update(+id, updateLoaiCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loaiCongViecService.remove(+id);
  }
}
