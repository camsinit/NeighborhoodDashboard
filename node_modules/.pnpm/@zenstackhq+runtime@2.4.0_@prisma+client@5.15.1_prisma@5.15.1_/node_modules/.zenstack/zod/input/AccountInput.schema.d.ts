import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type AccountInputSchemaType = {
    findUnique: z.ZodType<Prisma.AccountFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.AccountFindFirstArgs>;
    findMany: z.ZodType<Prisma.AccountFindManyArgs>;
    create: z.ZodType<Prisma.AccountCreateArgs>;
    createMany: z.ZodType<Prisma.AccountCreateManyArgs>;
    delete: z.ZodType<Prisma.AccountDeleteArgs>;
    deleteMany: z.ZodType<Prisma.AccountDeleteManyArgs>;
    update: z.ZodType<Prisma.AccountUpdateArgs>;
    updateMany: z.ZodType<Prisma.AccountUpdateManyArgs>;
    upsert: z.ZodType<Prisma.AccountUpsertArgs>;
    aggregate: z.ZodType<Prisma.AccountAggregateArgs>;
    groupBy: z.ZodType<Prisma.AccountGroupByArgs>;
    count: z.ZodType<Prisma.AccountCountArgs>;
};
export declare const AccountInputSchema: AccountInputSchemaType;
export {};
