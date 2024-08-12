"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutAccountsInput_schema_1 = require("./UserCreateWithoutAccountsInput.schema");
const UserUncheckedCreateWithoutAccountsInput_schema_1 = require("./UserUncheckedCreateWithoutAccountsInput.schema");
const UserCreateOrConnectWithoutAccountsInput_schema_1 = require("./UserCreateOrConnectWithoutAccountsInput.schema");
const UserUpsertWithoutAccountsInput_schema_1 = require("./UserUpsertWithoutAccountsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateToOneWithWhereWithoutAccountsInput_schema_1 = require("./UserUpdateToOneWithWhereWithoutAccountsInput.schema");
const UserUpdateWithoutAccountsInput_schema_1 = require("./UserUpdateWithoutAccountsInput.schema");
const UserUncheckedUpdateWithoutAccountsInput_schema_1 = require("./UserUncheckedUpdateWithoutAccountsInput.schema");
exports.UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutAccountsInput_schema_1.UserCreateWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutAccountsInput_schema_1.UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutAccountsInput_schema_1.UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => UserUpsertWithoutAccountsInput_schema_1.UserUpsertWithoutAccountsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInput_schema_1.UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUpdateWithoutAccountsInput_schema_1.UserUpdateWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutAccountsInput_schema_1.UserUncheckedUpdateWithoutAccountsInputObjectSchema)]).optional()
}).strict();
