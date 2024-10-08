/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createEventRouter from "./Event.router";
import createResponseRouter from "./Response.router";
import createGroupRouter from "./Group.router";
import createOfferingRouter from "./Offering.router";
import createEmergencyInfoRouter from "./EmergencyInfo.router";
import createNeedWantRouter from "./NeedWant.router";
import createInterestRouter from "./Interest.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as EventClientType } from "./Event.router";
import { ClientType as ResponseClientType } from "./Response.router";
import { ClientType as GroupClientType } from "./Group.router";
import { ClientType as OfferingClientType } from "./Offering.router";
import { ClientType as EmergencyInfoClientType } from "./EmergencyInfo.router";
import { ClientType as NeedWantClientType } from "./NeedWant.router";
import { ClientType as InterestClientType } from "./Interest.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        event: createEventRouter(router, procedure),
        response: createResponseRouter(router, procedure),
        group: createGroupRouter(router, procedure),
        offering: createOfferingRouter(router, procedure),
        emergencyInfo: createEmergencyInfoRouter(router, procedure),
        needWant: createNeedWantRouter(router, procedure),
        interest: createInterestRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    event: EventClientType<AppRouter>;
    response: ResponseClientType<AppRouter>;
    group: GroupClientType<AppRouter>;
    offering: OfferingClientType<AppRouter>;
    emergencyInfo: EmergencyInfoClientType<AppRouter>;
    needWant: NeedWantClientType<AppRouter>;
    interest: InterestClientType<AppRouter>;
}
