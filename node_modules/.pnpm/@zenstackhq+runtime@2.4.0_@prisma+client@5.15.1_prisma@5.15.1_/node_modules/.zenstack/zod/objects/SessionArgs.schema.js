"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionSelect_schema_1 = require("./SessionSelect.schema");
const SessionInclude_schema_1 = require("./SessionInclude.schema");
exports.SessionArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema).optional(), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema).optional()
}).strict();
