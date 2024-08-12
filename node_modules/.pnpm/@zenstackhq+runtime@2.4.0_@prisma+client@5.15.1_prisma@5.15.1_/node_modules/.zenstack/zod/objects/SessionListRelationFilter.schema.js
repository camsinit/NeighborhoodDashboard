"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionWhereInput_schema_1 = require("./SessionWhereInput.schema");
exports.SessionListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema).optional()
}).strict();
