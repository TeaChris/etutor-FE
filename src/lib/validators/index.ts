/*
 * ############################################################################### *
 * Created Date: Th Mar 2025                                                   *
 * Author: Boluwatife Olasunkanmi O.                                           *
 * -----                                                                       *
 * Last Modified: Thu Mar 06 2025                                              *
 * Modified By: Boluwatife Olasunkanmi O.                                      *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                               *
 * ############################################################################### *
 */

import * as z from 'zod';

export const createAccountSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: 'First name cannot be less than three characters' })
      .nonempty({ message: 'First name cannot be empty' }),
    lastName: z
      .string()
      .min(3, { message: 'Last name cannot be less than three characters' })
      .nonempty({ message: 'Last name cannot be empty' }),
    username: z
      .string()
      .min(3, { message: 'Username cannot be less than three characters' })
      .nonempty({ message: 'Username cannot be empty' }),
    email: z
      .string()
      .email({ message: 'Please enter a valid email' })
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Email must include the @ symbol',
      )
      .nonempty({ message: 'Email cannot be empty' }),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@.!#$%&*])[A-Za-z\d@.!#$%&*]{8,}$/,
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (@, ., !, #, $, %, &, *)',
      ),
    confirmPassword: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@.!#$%&*])[A-Za-z\d@.!#$%&*]{8,}$/,
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (@, ., !, #, $, %, &, *)',
      )
      .transform((value) => value.trim()),
    termsAndConditions: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type TCreateAccountSchema = z.infer<typeof createAccountSchema>;
