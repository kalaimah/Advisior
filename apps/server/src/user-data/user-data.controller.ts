import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { UserService } from './user-data.service';
import { CacheService } from '../app/cache/cache-service';

@Controller('userdata')
export class UserController {
  constructor(private readonly userService: UserService, private readonly cacheService: CacheService) {}

  @Get()
  async getAllUsersData() {
    try {
      const userData = await this.userService.getAllUsersDataFromDb();
      return userData;
    } catch (error) {
      throw new HttpException(`${error.message}`,error.response.status); 
    }
  }

  @Get(':id')
  async getUserData(@Param('id') id: String) {
    try {
      const cachedData = await this.cacheService.get(id)
      if(cachedData) {
        return cachedData
      }

      const userData = await this.userService.getUserDataFromDb(id);
      if(userData.length == 0) {
        return 'No data exist for the given SSN';
      }
      await this.cacheService.set(id, userData);
      return userData;
    } catch (error) {
      throw new HttpException(`${error.message}`,error.response.status); 
    }
  }
}
