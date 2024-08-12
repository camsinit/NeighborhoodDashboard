"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateManyUserInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionCreateManyUserInput_schema_1 = require("./SessionCreateManyUserInput.schema");
exports.SessionCreateManyUserInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => SessionCreateManyUserInput_schema_1.SessionCreateManyUserInputObjectSchema),
        zod_1.z.lazy(() => SessionCreateManyUserInput_schema_1.SessionCreateManyUserInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
