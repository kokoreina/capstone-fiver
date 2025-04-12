import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi-tiet-loai-cong-viec.service';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi-tiet-loai-cong-viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi-tiet-loai-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseSuccess } from 'src/common/decorators/response-success.decorator';

@Controller('chi-tiet-loai-cong-viec')
export class ChiTietLoaiCongViecController {
  constructor(private readonly chiTietLoaiCongViecService: ChiTietLoaiCongViecService) {}
  @ResponseSuccess("post chi tiết cv thành công")
  @SkipPermission()
  @Post('post')
  async create(@Body() createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto) {
    const result=await this.chiTietLoaiCongViecService.create(createChiTietLoaiCongViecDto)
    return result ;
  }
  @ResponseSuccess("get chi tiết cv thành công")
  @SkipPermission()
  @Get('list')
  @ApiBearerAuth()
  async getListChiTietCongViec() {
    const result= await this.chiTietLoaiCongViecService.getListChiTietCongViec()
    return result
  }
  @ResponseSuccess("get chi tiết cv theo id thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result =await this.chiTietLoaiCongViecService.findOne(+id);
    return result
  }
  @ResponseSuccess("patch chi tiết cv theo id thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChiTietLoaiCongViecDto: UpdateChiTietLoaiCongViecDto) {
    const result=await this.chiTietLoaiCongViecService.update(+id, updateChiTietLoaiCongViecDto);
    return result
  }
  @ResponseSuccess("delte chi tiết cv theo id thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result=await this.chiTietLoaiCongViecService.remove(+id);
    return result
  }
}
