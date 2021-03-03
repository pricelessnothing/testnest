import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';

@Controller()
@ApiTags('users')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [User],
  })
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
