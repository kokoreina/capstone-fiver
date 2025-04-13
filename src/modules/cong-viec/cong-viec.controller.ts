import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CongViecService } from './cong-viec.service';
import { CreateCongViecDto } from './dto/create-cong-viec.dto';
import { UpdateCongViecDto } from './dto/update-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseSuccess } from 'src/common/decorators/response-success.decorator';

@Controller('cong-viec')
export class CongViecController {
  constructor(private readonly congViecService: CongViecService) {}
  @ResponseSuccess('post công việc thành công')
  @SkipPermission()
  @ApiBearerAuth()
  @Post()
  async create(@Body() createCongViecDto: CreateCongViecDto) {
    const result =await this.congViecService.create(createCongViecDto)
    return result;
  }
  @ResponseSuccess('get list công việc thành công')
  @SkipPermission()
  @Get('list')
  @ApiBearerAuth()
  async getListCongviec(){
    const result=await this.congViecService.getListCongviec()
    return result
  }
  @ResponseSuccess('get id công việc thành công')
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result=await this.congViecService.findOne(+id);
    return result
  }
  @ResponseSuccess('get mã chi tiết loại công việc thành công')
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':idchitietloai')
  async idchitietloai(@Param('idchitietloai') idchitietloai: string) {
    const result=await this.congViecService.findOne(+idchitietloai);
    return result
  }
  @ResponseSuccess('get tên công việc thành công')
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':tencongviecn')
  async tencongviec(@Param('tencongviec') tencongviec: string) {
    const result=await this.congViecService.findOne(+tencongviec);
    return result
  }
  @ResponseSuccess('update công việc thành công')
  @SkipPermission()
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCongViecDto: UpdateCongViecDto) {
    const result=await this.congViecService.update(+id, updateCongViecDto);
    return result
  }
  @ResponseSuccess('delete công việc thành công')
  @SkipPermission()
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await this.congViecService.remove(+id);
    return result
  }
}
