import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/common/decorators/is-public.decorator';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ResponseSuccess } from 'src/common/decorators/response-success.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('login')
  async login(@Body() createUserDto: CreateUserDto) {
    return await this.authService.login(createUserDto);
  }
  @Public()
  @Post('register')
  @ResponseSuccess("Đăng ký tài khoản thành công")
  async create(@Body() createAuthDto: CreateAuthDto) {
    return await this.authService.register(createAuthDto);
  }
}
