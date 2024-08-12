"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const UserArgs_schema_1 = require("./UserArgs.schema");
exports.SessionSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), sessionToken: zod_1.z.boolean().optional(), userId: zod_1.z.boolean().optional(), expires: zod_1.z.boolean().optional(), user: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => UserArgs_schema_1.UserArgsObjectSchema)]).optional()
}).strict();
