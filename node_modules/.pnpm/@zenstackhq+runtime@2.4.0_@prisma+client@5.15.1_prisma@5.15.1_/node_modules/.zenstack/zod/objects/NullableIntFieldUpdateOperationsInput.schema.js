"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableIntFieldUpdateOperationsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.NullableIntFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), increment: zod_1.z.number().optional(), decrement: zod_1.z.number().optional(), multiply: zod_1.z.number().optional(), divide: zod_1.z.number().optional()
}).strict();
