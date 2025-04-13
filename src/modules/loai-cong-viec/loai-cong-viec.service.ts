import { Injectable } from '@nestjs/common';
import { CreateLoaiCongViecDto } from './dto/create-loai-cong-viec.dto';
import { UpdateLoaiCongViecDto } from './dto/update-loai-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoaiCongViecService {
  constructor(public prisma:PrismaService){

  }
  async create(createLoaiCongViecDto: CreateLoaiCongViecDto) {
    const{ten_loai_cong_viec}=createLoaiCongViecDto
    const postLoaiCongViec=await this.prisma.loaiCongViec.create({
      data:{
        ten_loai_cong_viec:ten_loai_cong_viec
      }
    })
    return postLoaiCongViec
  }

  async getListLoai() {
    const listLoaiCongViec=await this.prisma.loaiCongViec.findMany()
    return listLoaiCongViec
  }

  async findOne(id: number) {
    const inforidloaicongviec=await this.prisma.loaiCongViec.findFirst({
      where:{
        id:id
      }
    })
    return inforidloaicongviec;
  }

  async update(id: number, updateLoaiCongViecDto: UpdateLoaiCongViecDto) {
    const {ten_loai_cong_viec}=updateLoaiCongViecDto
    const updateloaicongviec=await this.prisma.loaiCongViec.update({
      where:{
        id:id
      },
      data:{
        ten_loai_cong_viec:ten_loai_cong_viec
      }
    })
    return updateloaicongviec
  }

  async remove(id: number) {
    const deleteloaicongviec=await this.prisma.loaiCongViec.delete({
      where:{
        id:id
      }
    })
    return deleteloaicongviec
  }
}
