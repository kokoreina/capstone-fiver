import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CongViecService } from './cong-viec.service';
import { CreateCongViecDto } from './dto/create-cong-viec.dto';
import { UpdateCongViecDto } from './dto/update-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('cong-viec')
export class CongViecController {
  constructor(private readonly congViecService: CongViecService) {}

  @Post()
  create(@Body() createCongViecDto: CreateCongViecDto) {
    return this.congViecService.create(createCongViecDto);
  }
  @SkipPermission()
  @Get('list')
  @ApiBearerAuth()
  async getListCongviec(){
    const result=await this.congViecService.getListCongviec()
    return result
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.congViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCongViecDto: UpdateCongViecDto) {
    return this.congViecService.update(+id, updateCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.congViecService.remove(+id);
  }
}
