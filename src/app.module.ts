import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import PrismaModule from './modules/prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BinhLuanController } from './modules/binh-luan/binh-luan.controller';
import { BinhLuanModule } from './modules/binh-luan/binh-luan.module';
import { ChiTietLoaiCongViecModule } from './modules/chi-tiet-loai-cong-viec/chi-tiet-loai-cong-viec.module';
import { CongViecModule } from './modules/cong-viec/cong-viec.module';
import { NguoiDungModule } from './modules/nguoi-dung/nguoi-dung.module';
import { ThueCongViecModule } from './modules/thue-cong-viec/thue-cong-viec.module';
import { BinhLuanService } from './modules/binh-luan/binh-luan.service';
import { CheckTokenStrategy } from './modules/auth/tokens/token-strategy';
import { PermissionStrategy } from './modules/auth/permission/permission-strategy';
import { LoaiCongViecModule } from './modules/loai-cong-viec/loai-cong-viec.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname)
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,
    BinhLuanModule,
    ChiTietLoaiCongViecModule,
    CongViecModule,
    NguoiDungModule,
    ThueCongViecModule,
    LoaiCongViecModule
  ],
  controllers: [AppController],
  providers: [AppService,CheckTokenStrategy,PermissionStrategy],
})
export class AppModule {}
