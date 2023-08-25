
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData, UserDocument } from './user-data.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserData.name) private readonly userModel: Model<UserDocument>) {}

  async getAllUsersDataFromDb(): Promise<UserData[]> {
    
    try {
      return await this.userModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, error.response.status);
    }
  }

  async getUserDataFromDb(SSN: String): Promise<UserData[]> {
    try {
      return await this.userModel.find({'SSN':SSN});
    } catch (error) {
      throw new HttpException(`${error.message}`, error.response.status);
    }
  }
}