"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUncheckedCreateWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SessionUncheckedCreateWithoutUserInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), sessionToken: zod_1.z.string(), expires: zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime()])
}).strict();
