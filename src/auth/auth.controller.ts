import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @ApiBody({ schema: {
        type: 'object',
        properties: {
        userId: { type: 'string', example: '12345' },
        },
        required: ['userId'],
    }, })
    login(@Body() body: { userId: string }) {
        const token = this.authService.generateToken(body.userId);
        return { accessToken: token };
    }
}
