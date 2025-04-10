import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('nguoi-dung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService) {}

  @Post()
  create(@Body() createNguoiDungDto: CreateNguoiDungDto) {
    return this.nguoiDungService.create(createNguoiDungDto);
  }
  @SkipPermission()
  @Get('list')
  @ApiBearerAuth()
  async getListUser() {
    const result=await this.nguoiDungService.getListUser();
    return result
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nguoiDungService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNguoiDungDto: UpdateNguoiDungDto) {
    return this.nguoiDungService.update(+id, updateNguoiDungDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nguoiDungService.remove(+id);
  }
}
