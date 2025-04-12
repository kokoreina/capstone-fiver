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

  async findOne(idcongviec: number) {
    const listcommentwork= await this.prisma.binhLuan.findMany({
      where:{
        ma_cong_viec:idcongviec
      }
    })
    return listcommentwork;
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

  async remove(id: number) {
    const deleteComment = await this.prisma.binhLuan.delete({
      where:{
        id:id
      }
    })
    return deleteComment
  }
}
