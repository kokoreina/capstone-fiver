import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThueCongViecService } from './thue-cong-viec.service';
import { CreateThueCongViecDto } from './dto/create-thue-cong-viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue-cong-viec.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ResponseSuccess } from 'src/common/decorators/response-success.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('thue-cong-viec')
export class ThueCongViecController {
  constructor(private readonly thueCongViecService: ThueCongViecService) {}
  @ResponseSuccess("post thuê công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Post()
  async create(@Body() createThueCongViecDto: CreateThueCongViecDto) {
    const result= await this.thueCongViecService.create(createThueCongViecDto);
    return result
  }
  @ResponseSuccess("get list thuê công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get('list')
  async getListThue() {
    const result=await this.thueCongViecService.getListThue();
    return result
  }
  @ResponseSuccess("get infor id thuê công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.thueCongViecService.findOne(+id);
    return result
  }
  @ResponseSuccess("update thuê công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateThueCongViecDto: UpdateThueCongViecDto) {
    const result = await this.thueCongViecService.update(+id, updateThueCongViecDto);
    return result
  }
  @ResponseSuccess("delete thuê công việc thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.thueCongViecService.remove(+id);
    return result
  }
}
