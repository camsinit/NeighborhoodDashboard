"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserCreateNestedOneWithoutSessionsInput_schema_1 = require("./UserCreateNestedOneWithoutSessionsInput.schema");
exports.SessionCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), sessionToken: zod_1.z.string(), expires: zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime()]), user: zod_1.z.lazy(() => UserCreateNestedOneWithoutSessionsInput_schema_1.UserCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict();
