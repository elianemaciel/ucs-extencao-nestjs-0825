import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() conta: CreateAccountDto) {
    return this.accountsService.create(conta);
  }

  @Get('all')
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.accountsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() conta: UpdateAccountDto) {
    return this.accountsService.update(id, conta);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.accountsService.remove(id);
  }
}
