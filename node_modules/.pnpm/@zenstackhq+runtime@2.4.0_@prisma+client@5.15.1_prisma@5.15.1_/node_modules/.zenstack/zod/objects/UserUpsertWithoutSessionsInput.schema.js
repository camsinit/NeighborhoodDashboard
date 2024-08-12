"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSessionsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserUpdateWithoutSessionsInput_schema_1 = require("./UserUpdateWithoutSessionsInput.schema");
const UserUncheckedUpdateWithoutSessionsInput_schema_1 = require("./UserUncheckedUpdateWithoutSessionsInput.schema");
const UserCreateWithoutSessionsInput_schema_1 = require("./UserCreateWithoutSessionsInput.schema");
const UserUncheckedCreateWithoutSessionsInput_schema_1 = require("./UserUncheckedCreateWithoutSessionsInput.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.UserUpsertWithoutSessionsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutSessionsInput_schema_1.UserUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutSessionsInput_schema_1.UserUncheckedUpdateWithoutSessionsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutSessionsInput_schema_1.UserCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutSessionsInput_schema_1.UserUncheckedCreateWithoutSessionsInputObjectSchema)]), where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional()
}).strict();
