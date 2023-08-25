import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user-data.controller';
import { UserService } from './user-data.service';
import { UserData, UserModel } from './user-data.schema'; // Import the UserModel
import { CacheService } from '../app/cache/cache-service';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserData.name, schema: UserModel }])],
  controllers: [UserController],
  providers: [UserService, CacheService],
})
export class UserDataModule {}