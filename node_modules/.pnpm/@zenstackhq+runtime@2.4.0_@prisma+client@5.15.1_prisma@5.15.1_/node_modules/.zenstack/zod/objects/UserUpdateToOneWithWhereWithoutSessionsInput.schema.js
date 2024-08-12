"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const UserUpdateWithoutSessionsInput_schema_1 = require("./UserUpdateWithoutSessionsInput.schema");
const UserUncheckedUpdateWithoutSessionsInput_schema_1 = require("./UserUncheckedUpdateWithoutSessionsInput.schema");
exports.UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => UserUpdateWithoutSessionsInput_schema_1.UserUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutSessionsInput_schema_1.UserUncheckedUpdateWithoutSessionsInputObjectSchema)])
}).strict();
