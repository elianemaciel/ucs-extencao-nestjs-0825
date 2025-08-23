import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() body: { userId: string }) {
        const token = this.authService.generateToken(body.userId);
        return { accessToken: token };
    }
}
