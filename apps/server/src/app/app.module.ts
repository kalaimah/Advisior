import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDataModule } from '../user-data/user-data.module';
import * as dotenv from 'dotenv';

dotenv.config()

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_DB_CONNECTION,
        useUnifiedTopology: true,
      }),
    }),
    UserDataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
