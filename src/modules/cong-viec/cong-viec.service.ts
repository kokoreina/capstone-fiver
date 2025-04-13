import { Injectable } from '@nestjs/common';
import { CreateCongViecDto } from './dto/create-cong-viec.dto';
import { UpdateCongViecDto } from './dto/update-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CongViecService {
  constructor(public prisma:PrismaService){}
  async create(createCongViecDto: CreateCongViecDto) {
    const{ten_cong_viec,danh_gia,gia_tien,mo_ta,mo_ta_ngan,sao_cong_viec,ma_chi_tiet_loai}=createCongViecDto
    const createWork= await this.prisma.congViec.create({
      data:{
        ten_cong_viec:ten_cong_viec,
        danh_gia:danh_gia,
        gia_tien:gia_tien,
        mo_ta:mo_ta,
        mo_ta_ngan:mo_ta_ngan,
        sao_cong_viec:sao_cong_viec,
        ma_chi_tiet_loai:ma_chi_tiet_loai
      }
    })
    return createWork;
  }

  async getListCongviec() {
    const listCongviec=await this.prisma.congViec.findMany()
    return listCongviec
  }

  async findOne(id: number) {
    const inforidcongviec= await this.prisma.congViec.findFirst({
      where:{
        id:id
      }
    })
    return inforidcongviec;
  }

  async idchitietloai(ma_chi_tiet_loai: number) {
    const inforidmachitietloai= await this.prisma.congViec.findMany({
      where:{
        ma_chi_tiet_loai:ma_chi_tiet_loai
      }
    })
    return inforidmachitietloai;
  }
  async tencongviec(tencongviec: string) {
    const infortencongviec= await this.prisma.congViec.findMany({
      where:{
        ten_cong_viec:tencongviec
      }
    })
    return infortencongviec;
  }

  async update(id: number, updateCongViecDto: UpdateCongViecDto) {
    const{ten_cong_viec,danh_gia,gia_tien,mo_ta,mo_ta_ngan,sao_cong_viec,ma_chi_tiet_loai}=updateCongViecDto
    const updateCongviec= await this.prisma.congViec.update({
      where:{
        id:id
      },
      data:{
        ten_cong_viec:ten_cong_viec,
        danh_gia:danh_gia,
        gia_tien:gia_tien,
        mo_ta:mo_ta,
        mo_ta_ngan:mo_ta_ngan,
        sao_cong_viec:sao_cong_viec,
        ma_chi_tiet_loai:ma_chi_tiet_loai
      }
    })
    return updateCongviec;
  }

  async remove(id: number) {
    const removeWork=await this.prisma.congViec.delete({
      where:{
        id:id
      }
    })
    return removeWork;
  }
}
