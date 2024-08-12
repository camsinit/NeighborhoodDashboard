/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { z } from 'zod';
import { checkRead, checkMutate } from '@/helpers/helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

import { z } from 'zod';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    const AccountInputSchema = z.object({
        // Define your Account schema here
        // For example:
        // id: z.string().optional(),
        // email: z.string().email(),
        // name: z.string(),
        // ... other fields
    });

    return router({
        createMany: procedure.input(z.array(AccountInputSchema)).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.createMany({ data: input }))),

        create: procedure.input(AccountInputSchema).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.create({ data: input }))),

        deleteMany: procedure.input(z.object({ where: z.any() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.deleteMany(input))),

        delete: procedure.input(z.object({ where: z.object({ id: z.string() }) })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.delete(input))),

        findFirst: procedure.input(z.object({ where: z.any(), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).account.findFirst(input))),

        findMany: procedure.input(z.object({ where: z.any(), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).account.findMany(input))),

        findUnique: procedure.input(z.object({ where: z.object({ id: z.string() }), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).account.findUnique(input))),

        updateMany: procedure.input(z.object({ where: z.any(), data: AccountInputSchema.partial() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.updateMany(input))),

        update: procedure.input(z.object({ where: z.object({ id: z.string() }), data: AccountInputSchema.partial() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.update(input))),
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AccountCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AccountCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccountGetPayload<T>, Context>) => Promise<Prisma.AccountGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AccountDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AccountDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccountGetPayload<T>, Context>) => Promise<Prisma.AccountGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AccountFindFirstArgs, TData = Prisma.AccountGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AccountFindManyArgs, TData = Array<Prisma.AccountGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AccountGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AccountGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AccountGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AccountFindUniqueArgs, TData = Prisma.AccountGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AccountUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AccountUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccountGetPayload<T>, Context>) => Promise<Prisma.AccountGetPayload<T>>
            };

    };
}
