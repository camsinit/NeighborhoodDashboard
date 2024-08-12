"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSessionsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserCreateWithoutSessionsInput_schema_1 = require("./UserCreateWithoutSessionsInput.schema");
const UserUncheckedCreateWithoutSessionsInput_schema_1 = require("./UserUncheckedCreateWithoutSessionsInput.schema");
exports.UserCreateOrConnectWithoutSessionsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutSessionsInput_schema_1.UserCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutSessionsInput_schema_1.UserUncheckedCreateWithoutSessionsInputObjectSchema)])
}).strict();
