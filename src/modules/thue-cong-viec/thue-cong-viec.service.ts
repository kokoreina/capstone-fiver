import { Injectable } from '@nestjs/common';
import { CreateThueCongViecDto } from './dto/create-thue-cong-viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ThueCongViecService {
  constructor(public prisma:PrismaService){

  }
  async create(createThueCongViecDto: CreateThueCongViecDto) {
    const{ma_cong_viec,ma_ngoi_thue,ngay_thue,hoan_thanh}=createThueCongViecDto
    const postThueCongViec= await this.prisma.thueCongViec.create({
      data:{
        ma_cong_viec:ma_cong_viec,
        ma_ngoi_thue:ma_ngoi_thue,
        ngay_thue:ngay_thue,
        hoan_thanh:hoan_thanh
      }
    })
    return postThueCongViec
  }

  async getListThue() {
    const listThue= await this.prisma.thueCongViec.findMany()
    return listThue
  }

  async findOne(id: number) {
    const inforIdThue= await this.prisma.thueCongViec.findFirst({
      where:{
        id:id
      }
    })
    return inforIdThue
  }

  async update(id: number, updateThueCongViecDto: UpdateThueCongViecDto) {
    const{ma_cong_viec,ma_ngoi_thue,ngay_thue,hoan_thanh}=updateThueCongViecDto
    const updateIdthue=await this.prisma.thueCongViec.update({
      where:{
        id:id
      },
      data:{
        ma_cong_viec:ma_cong_viec,
        ma_ngoi_thue:ma_ngoi_thue,
        ngay_thue:ngay_thue,
        hoan_thanh:hoan_thanh
      }
    })
    return updateIdthue ;
  }

  async remove(id: number) {
    const removeIdthue=await this.prisma.thueCongViec.delete({
      where:{
        id:id
      }
    })
    return removeIdthue;
  }
}
