import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BinhLuanService } from './binh-luan.service';
import { CreateBinhLuanDto } from './dto/create-binh-luan.dto';
import { UpdateBinhLuanDto } from './dto/update-binh-luan.dto';
import { ResponseSuccess } from 'src/common/decorators/response-success.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';

@Controller('binh-luan')
export class BinhLuanController {
  constructor(private readonly binhLuanService: BinhLuanService) {}
  @ResponseSuccess("post comment thành công")
  @SkipPermission()
  @Post(`post`)
  async create(@Body() createBinhLuanDto: CreateBinhLuanDto) {
    const result=await this.binhLuanService.create(createBinhLuanDto);
    return result
  }
  // phương thức get comment
  @ResponseSuccess("lấy list bình luận thành công")

  @SkipPermission()
  @Get('list')
  @ApiBearerAuth()
  async getListComment() {
    const result=await this.binhLuanService.getListComment()
    return result
  }@SkipPermission()
  @ApiBearerAuth()
  @ResponseSuccess("lấy bình luận theo mã công việc thành công")
  @Get(':idcongviec')
  async findOne(@Param('idcongviec') idcongviec: string) {
    const result= await this.binhLuanService.findOne(+idcongviec);
    return result
  }
  @ResponseSuccess("Cập nhập bình luận thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBinhLuanDto: UpdateBinhLuanDto) {
    const result=await this.binhLuanService.update(+id, updateBinhLuanDto)
    return result ;
  }
  @ResponseSuccess("Xoá bình luận thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result =await this.binhLuanService.remove(+id);
    return result
  }
}
