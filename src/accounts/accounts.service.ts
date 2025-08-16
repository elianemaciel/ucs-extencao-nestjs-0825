import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Accounts } from 'src/schemas/accounts.schema';
import { Model } from 'mongoose';

@Injectable()
export class AccountsService {

  constructor(@InjectModel(Accounts.name) private accountModel: Model<Accounts>) {}
  
  create(conta: CreateAccountDto)  {
    const createdConta = new this.accountModel(conta);
    return createdConta.save();
  }

  findAll()  {
    return this.accountModel.find().exec();
  }

  findOne(accountNumber: number)  {
    return this.accountModel.findOne({ number: accountNumber }).exec();
  }

  async update(accountNumber: number, account: UpdateAccountDto)  {
    const accountResult = await this.accountModel.findOneAndUpdate({ number: accountNumber }, account).exec();
    return accountResult
  }
  
  async remove(accountNumber: number)  {
    const conta = await this.accountModel.findOneAndDelete({ number: accountNumber }).exec();
    return conta
  }
}
