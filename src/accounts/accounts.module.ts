import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Accounts, AccountsSchema } from 'src/schemas/accounts.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, MongooseModule.forFeature([{ name: Accounts.name, schema: AccountsSchema }])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
