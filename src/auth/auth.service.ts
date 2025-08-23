import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {

    private readonly jwtSecret;

    constructor(private readonly config: ConfigService) {
        this.jwtSecret = this.config.get('JWT_SECRET')
    }

    generateToken(userId: string): string {
        return sign({ sub: userId }, this.jwtSecret, { expiresIn: '1h' });
    }

    validateToken(token: string): any {
        try {
            return verify(token, this.jwtSecret);
        } catch (error) {
            throw new UnauthorizedException('Token inválido');
        }
    }
}
