import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @ApiBody({ type: CreateAccountDto })
  @ApiBearerAuth('access-token') 
  @UseGuards(AuthGuard)
  create(@Body() conta: CreateAccountDto) {
    return this.accountsService.create(conta);
  }

  @Get('all')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.accountsService.findOne(id);
  }

  @Put(':id')
  @ApiBody({ type: UpdateAccountDto })
  @ApiBearerAuth('access-token') 
  @UseGuards(AuthGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() conta: UpdateAccountDto) {
    return this.accountsService.update(id, conta);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.accountsService.remove(id);
  }
}
