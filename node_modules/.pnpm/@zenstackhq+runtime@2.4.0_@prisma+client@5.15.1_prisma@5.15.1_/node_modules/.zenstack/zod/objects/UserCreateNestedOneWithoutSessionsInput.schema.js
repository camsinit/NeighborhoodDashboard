"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSessionsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutSessionsInput_schema_1 = require("./UserCreateWithoutSessionsInput.schema");
const UserUncheckedCreateWithoutSessionsInput_schema_1 = require("./UserUncheckedCreateWithoutSessionsInput.schema");
const UserCreateOrConnectWithoutSessionsInput_schema_1 = require("./UserCreateOrConnectWithoutSessionsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
exports.UserCreateNestedOneWithoutSessionsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutSessionsInput_schema_1.UserCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutSessionsInput_schema_1.UserUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutSessionsInput_schema_1.UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional()
}).strict();
