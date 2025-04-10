import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi-tiet-loai-cong-viec.service';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi-tiet-loai-cong-viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi-tiet-loai-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('chi-tiet-loai-cong-viec')
export class ChiTietLoaiCongViecController {
  constructor(private readonly chiTietLoaiCongViecService: ChiTietLoaiCongViecService) {}
  @SkipPermission()
  @Post('post')
  async create(@Body() createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto) {
    const result=await this.chiTietLoaiCongViecService.create(createChiTietLoaiCongViecDto)
    return result ;
  }
  @SkipPermission()
  @Get('list')
  @ApiBearerAuth()
  async getListChiTietCongViec() {
    const result= await this.chiTietLoaiCongViecService.getListChiTietCongViec()
    return result
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chiTietLoaiCongViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChiTietLoaiCongViecDto: UpdateChiTietLoaiCongViecDto) {
    return this.chiTietLoaiCongViecService.update(+id, updateChiTietLoaiCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chiTietLoaiCongViecService.remove(+id);
  }
}
