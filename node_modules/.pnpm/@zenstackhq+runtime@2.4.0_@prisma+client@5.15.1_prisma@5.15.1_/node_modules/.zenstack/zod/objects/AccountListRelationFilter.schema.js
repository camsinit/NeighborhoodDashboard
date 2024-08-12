"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountWhereInput_schema_1 = require("./AccountWhereInput.schema");
exports.AccountListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => AccountWhereInput_schema_1.AccountWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => AccountWhereInput_schema_1.AccountWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => AccountWhereInput_schema_1.AccountWhereInputObjectSchema).optional()
}).strict();
