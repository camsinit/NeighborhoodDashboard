"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAccountsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateWithoutAccountsInput_schema_1 = require("./UserCreateWithoutAccountsInput.schema");
const UserUncheckedCreateWithoutAccountsInput_schema_1 = require("./UserUncheckedCreateWithoutAccountsInput.schema");
const UserCreateOrConnectWithoutAccountsInput_schema_1 = require("./UserCreateOrConnectWithoutAccountsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
exports.UserCreateNestedOneWithoutAccountsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutAccountsInput_schema_1.UserCreateWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutAccountsInput_schema_1.UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => UserCreateOrConnectWithoutAccountsInput_schema_1.UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional()
}).strict();
