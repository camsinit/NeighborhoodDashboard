"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const UserUpdateWithoutAccountsInput_schema_1 = require("./UserUpdateWithoutAccountsInput.schema");
const UserUncheckedUpdateWithoutAccountsInput_schema_1 = require("./UserUncheckedUpdateWithoutAccountsInput.schema");
exports.UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutAccountsInput_schema_1.UserUpdateWithoutAccountsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutAccountsInput_schema_1.UserUncheckedUpdateWithoutAccountsInputObjectSchema)])
}).strict();
