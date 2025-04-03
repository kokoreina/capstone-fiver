
// import {  Strategy } from 'passport-custom';
// import { PassportStrategy } from '@nestjs/passport';
// import { BadRequestException, Injectable } from '@nestjs/common';
// import { ACCESS_TOKEN_SECRET } from 'src/common/constant/app.constant';
// import { PrismaService } from 'src/modules/prisma/prisma.service';


// @Injectable()
// export class CheckPermissionStrategy extends PassportStrategy(Strategy,"check-permission") {
//   constructor(public prisma:PrismaService) {
//     super();
//   }

//   async validate(req: any) {
//     console.log("PERMISSION-validate")

//     const user=req.user
//     const role_id=user.role_id
//     const endpoint= req.route.path
//     const method=req.method
//     // Nếu là ADMIN (role_id ===1 ) thì cho qua 
//     // Bắt buộc phải có return nếu không code sẽ chạy tiếp tục
//     if(role_id ===1){
//       return true
//     }
//     console.log({
//       role_id,
//       endpoint,
//       method
//     })
//     // Đi tìm id của permission thông qua fullpath,method
//     const permission=await this.prisma.nguoiDung.findFirst({
//       where:{
//         endpoint:endpoint,
//         method:method
//       }
//     })
//     if(!permission) throw new BadRequestException(`Bạn không đủ quyền để sử dụng tài nguyên api`)
//     const role_permissions = await this.prisma.role_permissions.findFirst({
//       where :{
//         permission_id: permission.permission_id,
//         role_id: role_id,
//         is_active: true
//       }
//     })
//     if(!role_permissions){
//       throw new BadRequestException(`Bạn không đủ quyền để sử dụng tài nguyên api`)
//     }
//     return true;
//   }
// }
