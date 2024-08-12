"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAccountsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserCreateWithoutAccountsInput_schema_1 = require("./UserCreateWithoutAccountsInput.schema");
const UserUncheckedCreateWithoutAccountsInput_schema_1 = require("./UserUncheckedCreateWithoutAccountsInput.schema");
exports.UserCreateOrConnectWithoutAccountsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => UserCreateWithoutAccountsInput_schema_1.UserCreateWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutAccountsInput_schema_1.UserUncheckedCreateWithoutAccountsInputObjectSchema)])
}).strict();
