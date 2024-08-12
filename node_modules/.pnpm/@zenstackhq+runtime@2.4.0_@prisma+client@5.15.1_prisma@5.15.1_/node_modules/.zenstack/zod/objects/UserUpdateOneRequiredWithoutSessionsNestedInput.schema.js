"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutSessionsInput_schema_1 = require("./UserCreateWithoutSessionsInput.schema");
const UserUncheckedCreateWithoutSessionsInput_schema_1 = require("./UserUncheckedCreateWithoutSessionsInput.schema");
const UserCreateOrConnectWithoutSessionsInput_schema_1 = require("./UserCreateOrConnectWithoutSessionsInput.schema");
const UserUpsertWithoutSessionsInput_schema_1 = require("./UserUpsertWithoutSessionsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateToOneWithWhereWithoutSessionsInput_schema_1 = require("./UserUpdateToOneWithWhereWithoutSessionsInput.schema");
const UserUpdateWithoutSessionsInput_schema_1 = require("./UserUpdateWithoutSessionsInput.schema");
const UserUncheckedUpdateWithoutSessionsInput_schema_1 = require("./UserUncheckedUpdateWithoutSessionsInput.schema");
exports.UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutSessionsInput_schema_1.UserCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutSessionsInput_schema_1.UserUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutSessionsInput_schema_1.UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => UserUpsertWithoutSessionsInput_schema_1.UserUpsertWithoutSessionsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInput_schema_1.UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUpdateWithoutSessionsInput_schema_1.UserUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutSessionsInput_schema_1.UserUncheckedUpdateWithoutSessionsInputObjectSchema)]).optional()
}).strict();
