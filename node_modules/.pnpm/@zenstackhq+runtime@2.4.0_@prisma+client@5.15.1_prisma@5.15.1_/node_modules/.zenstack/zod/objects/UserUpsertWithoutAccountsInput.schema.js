"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAccountsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserUpdateWithoutAccountsInput_schema_1 = require("./UserUpdateWithoutAccountsInput.schema");
const UserUncheckedUpdateWithoutAccountsInput_schema_1 = require("./UserUncheckedUpdateWithoutAccountsInput.schema");
const UserCreateWithoutAccountsInput_schema_1 = require("./UserCreateWithoutAccountsInput.schema");
const UserUncheckedCreateWithoutAccountsInput_schema_1 = require("./UserUncheckedCreateWithoutAccountsInput.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.UserUpsertWithoutAccountsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutAccountsInput_schema_1.UserUpdateWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutAccountsInput_schema_1.UserUncheckedUpdateWithoutAccountsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutAccountsInput_schema_1.UserCreateWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutAccountsInput_schema_1.UserUncheckedCreateWithoutAccountsInputObjectSchema)]), where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional()
}).strict();
