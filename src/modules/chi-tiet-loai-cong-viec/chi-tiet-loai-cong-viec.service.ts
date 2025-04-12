import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi-tiet-loai-cong-viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi-tiet-loai-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChiTietLoaiCongViecService {
  constructor(public prisma:PrismaService){

  }
  async create(createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto) {
    const {ten_chi_tiet}=createChiTietLoaiCongViecDto
    const chiTietExits= await this.prisma.chiTietLoaiCongViec.findFirst({
      where:{
        ten_chi_tiet:ten_chi_tiet,
      }
    })
    if(chiTietExits){
      throw new BadRequestException("tên chi tiết đã tồn tại")
    }
    const chiteitnew= await this.prisma.chiTietLoaiCongViec.create({
      data:{
        ten_chi_tiet:ten_chi_tiet,
      }
    })
    return chiteitnew
  }

  async getListChiTietCongViec() {
    const listChiTietCongViec=await this.prisma.chiTietLoaiCongViec.findMany()
    return listChiTietCongViec
  }

  async findOne(id: number) {
    const chitietcongviecid=await this.prisma.chiTietLoaiCongViec.findFirst({
      where:{
        id:id
      }
    })
    return chitietcongviecid
  }

  async update(id: number, updateChiTietLoaiCongViecDto: UpdateChiTietLoaiCongViecDto) {
    const{ten_chi_tiet}=updateChiTietLoaiCongViecDto
    const updateChiTietLoaiCongViec=await this.prisma.chiTietLoaiCongViec.update({
      where:{
        id:id
      },
      data:{
        ten_chi_tiet:ten_chi_tiet
      }
    })
    return updateChiTietLoaiCongViec;
  }

  async remove(id: number) {
    const deleteChiTietCongviec=await this.prisma.chiTietLoaiCongViec.delete({
      where:{
        id:id
      }
    })
    return deleteChiTietCongviec;
  }
}
