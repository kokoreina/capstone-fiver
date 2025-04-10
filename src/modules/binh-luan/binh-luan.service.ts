import { Injectable } from '@nestjs/common';
import { CreateBinhLuanDto } from './dto/create-binh-luan.dto';
import { UpdateBinhLuanDto } from './dto/update-binh-luan.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BinhLuanService {
  constructor(public prisma:PrismaService){

  }

  // phương thức get comment
  async getListComment(){
    const listComment=await this.prisma.binhLuan.findMany()
    return listComment
  }
  findAll() {
    return `This action returns all binhLuan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} binhLuan`;
  }
  async create(createBinhLuanDto: CreateBinhLuanDto) {
    const{ma_cong_viec,ma_ngoi_binh_luan,noi_dung,sao_binh_luan}=createBinhLuanDto;
    const commentNew= await this .prisma.binhLuan.create({
      data:{
        ma_cong_viec:ma_cong_viec,
        ma_ngoi_binh_luan:ma_ngoi_binh_luan,
        noi_dung:noi_dung,
        sao_binh_luan:sao_binh_luan
      }
    })
    return commentNew
  }

  async update(id: number, updateBinhLuanDto: UpdateBinhLuanDto) {
    const{noi_dung,sao_binh_luan}=updateBinhLuanDto
    const updateComment=await this.prisma.binhLuan.update({
      where:{
        id:id
      },
      data:{
        noi_dung:noi_dung,
        sao_binh_luan:sao_binh_luan,
      }
    })
    return updateComment
  }

  remove(id: number) {
    return `This action removes a #${id} binhLuan`;
  }
}
