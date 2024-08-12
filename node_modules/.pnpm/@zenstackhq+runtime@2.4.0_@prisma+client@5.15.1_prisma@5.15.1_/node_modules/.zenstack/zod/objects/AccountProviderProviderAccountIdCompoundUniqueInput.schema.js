"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema = zod_1.z.object({
    provider: zod_1.z.string(), providerAccountId: zod_1.z.string()
}).strict();
