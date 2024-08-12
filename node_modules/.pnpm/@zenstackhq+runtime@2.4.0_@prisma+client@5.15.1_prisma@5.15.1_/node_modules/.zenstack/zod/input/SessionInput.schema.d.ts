import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type SessionInputSchemaType = {
    findUnique: z.ZodType<Prisma.SessionFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.SessionFindFirstArgs>;
    findMany: z.ZodType<Prisma.SessionFindManyArgs>;
    create: z.ZodType<Prisma.SessionCreateArgs>;
    createMany: z.ZodType<Prisma.SessionCreateManyArgs>;
    delete: z.ZodType<Prisma.SessionDeleteArgs>;
    deleteMany: z.ZodType<Prisma.SessionDeleteManyArgs>;
    update: z.ZodType<Prisma.SessionUpdateArgs>;
    updateMany: z.ZodType<Prisma.SessionUpdateManyArgs>;
    upsert: z.ZodType<Prisma.SessionUpsertArgs>;
    aggregate: z.ZodType<Prisma.SessionAggregateArgs>;
    groupBy: z.ZodType<Prisma.SessionGroupByArgs>;
    count: z.ZodType<Prisma.SessionCountArgs>;
};
export declare const SessionInputSchema: SessionInputSchemaType;
export {};
