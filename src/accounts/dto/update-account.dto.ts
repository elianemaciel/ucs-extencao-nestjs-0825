import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateAccountSchema = z.object({
  number: z.number().int().positive().optional(),
  holder: z.string().min(1).optional(),
  balance: z.number().nonnegative().optional(),
  limit: z.number().nonnegative().optional(),
});

export class UpdateAccountDto extends createZodDto(UpdateAccountSchema) {}