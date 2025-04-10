import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from 'src/common/decorators/is-public.decorator';
import { SKIP_PERMISSION } from 'src/common/decorators/skip-permission.decorator';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PermissionStrategy implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService, 
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id; // Lấy ID người dùng từ token
    const userRole = request.user?.role; // Lấy role người dùng từ token

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Nếu API là công khai, cho phép tất cả
    if (isPublic) {
      return true;
    }

    const skipPermission = this.reflector.getAllAndOverride<boolean>(SKIP_PERMISSION, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Nếu API bỏ qua quyền, cho phép tất cả
    if (skipPermission) {
      return true;
    }

    // Kiểm tra vai trò và quyền dựa trên ID người dùng
    const { method, params } = request; // Lấy method và params từ request

    // Chỉ admin mới có quyền sửa hoặc xóa (PUT, DELETE)
    if (userRole === 'ADMIN') {
      return true;
    }

    // Kiểm tra xem người dùng có quyền thực hiện các hành động trên đối tượng hay không
    // Dành cho USER
    if (userRole === 'USER') {
      if (method === 'POST' || method === 'GET') {
        return true; // USER có quyền POST và GET
      }

      // Kiểm tra ID trong URL có khớp với ID của người dùng trong token không
      if (method === 'PUT' || method === 'DELETE') {
        const entityId = params.id; // Lấy id từ URL
        if (userId === parseInt(entityId)) {
          return true; // Chỉ cho phép nếu ID người dùng trùng với ID trong URL
        }
        throw new ForbiddenException('You do not have permission to modify this resource');
      }
    }

    return false; // Mặc định là không cho phép nếu không thỏa mãn điều kiện
  }
}
