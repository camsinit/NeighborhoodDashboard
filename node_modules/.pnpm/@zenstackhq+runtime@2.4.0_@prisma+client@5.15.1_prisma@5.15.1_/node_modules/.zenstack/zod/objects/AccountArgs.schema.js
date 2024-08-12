"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountSelect_schema_1 = require("./AccountSelect.schema");
const AccountInclude_schema_1 = require("./AccountInclude.schema");
exports.AccountArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => AccountSelect_schema_1.AccountSelectObjectSchema).optional(), include: zod_1.z.lazy(() => AccountInclude_schema_1.AccountIncludeObjectSchema).optional()
}).strict();
