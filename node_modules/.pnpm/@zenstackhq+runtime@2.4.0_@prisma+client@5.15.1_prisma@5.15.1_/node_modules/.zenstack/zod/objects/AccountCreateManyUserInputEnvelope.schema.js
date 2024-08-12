"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateManyUserInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountCreateManyUserInput_schema_1 = require("./AccountCreateManyUserInput.schema");
exports.AccountCreateManyUserInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => AccountCreateManyUserInput_schema_1.AccountCreateManyUserInputObjectSchema),
        zod_1.z.lazy(() => AccountCreateManyUserInput_schema_1.AccountCreateManyUserInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
