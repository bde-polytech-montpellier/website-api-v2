import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './roles.enum';
import { ROLES_KEY } from './roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.gard';
import { ExtractJwt } from 'passport-jwt';
import * as jwt from 'jsonwebtoken';
import { TokenPayloadDto } from '../auth/dto/token-payload.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class RolesGuard extends JwtAuthGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UsersService) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true;

    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(
      context.switchToHttp().getRequest(),
    );
    if (!token) return false;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const payload = jwt.verify(token, process.env.SECRET!) as TokenPayloadDto;
    const hasRole = requiredRoles.some(
      (role) => role.toString() === payload.role_name,
    );
    if (!hasRole) return false;

    const hasRight = this.userService
      .findOne(payload.sub)
      .then((user) => user?.role_id === payload.role_id);

    return hasRight;
  }
}
