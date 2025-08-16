import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateAccountSchema = z.object({
  number: z.number().int().positive(),
  holder: z.string().min(1, 'O titular é obrigatório'),
  balance: z.number().nonnegative(),
  limit: z.number().nonnegative(),
});

export class CreateAccountDto extends createZodDto(CreateAccountSchema) {}