import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoaiCongViecService } from './loai-cong-viec.service';
import { CreateLoaiCongViecDto } from './dto/create-loai-cong-viec.dto';
import { UpdateLoaiCongViecDto } from './dto/update-loai-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseSuccess } from 'src/common/decorators/response-success.decorator';

@Controller('loai-cong-viec')
export class LoaiCongViecController {
  constructor(private readonly loaiCongViecService: LoaiCongViecService) {}
  @ResponseSuccess("post loại công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Post()
  create(@Body() createLoaiCongViecDto: CreateLoaiCongViecDto) {
    return this.loaiCongViecService.create(createLoaiCongViecDto);
  }
  @ResponseSuccess("get list loại công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get('list')
  async getListLoai() {
    const result=await this.loaiCongViecService.getListLoai();
    return result
  }
  @ResponseSuccess("get id loại công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loaiCongViecService.findOne(+id);
  }
  @ResponseSuccess("update loại công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoaiCongViecDto: UpdateLoaiCongViecDto) {
    return this.loaiCongViecService.update(+id, updateLoaiCongViecDto);
  }
  @ResponseSuccess("delete loại công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loaiCongViecService.remove(+id);
  }
}
