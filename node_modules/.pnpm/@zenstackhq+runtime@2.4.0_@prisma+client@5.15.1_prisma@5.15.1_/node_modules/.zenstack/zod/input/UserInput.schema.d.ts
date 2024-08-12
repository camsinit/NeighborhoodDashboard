import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type UserInputSchemaType = {
    findUnique: z.ZodType<Prisma.UserFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.UserFindFirstArgs>;
    findMany: z.ZodType<Prisma.UserFindManyArgs>;
    create: z.ZodType<Prisma.UserCreateArgs>;
    createMany: z.ZodType<Prisma.UserCreateManyArgs>;
    delete: z.ZodType<Prisma.UserDeleteArgs>;
    deleteMany: z.ZodType<Prisma.UserDeleteManyArgs>;
    update: z.ZodType<Prisma.UserUpdateArgs>;
    updateMany: z.ZodType<Prisma.UserUpdateManyArgs>;
    upsert: z.ZodType<Prisma.UserUpsertArgs>;
    aggregate: z.ZodType<Prisma.UserAggregateArgs>;
    groupBy: z.ZodType<Prisma.UserGroupByArgs>;
    count: z.ZodType<Prisma.UserCountArgs>;
};
export declare const UserInputSchema: UserInputSchemaType;
export {};
