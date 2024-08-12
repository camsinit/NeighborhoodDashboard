"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionWhereInput_schema_1 = require("./SessionWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const UserRelationFilter_schema_1 = require("./UserRelationFilter.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
exports.SessionWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), sessionToken: zod_1.z.string().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema),
        zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema),
        zod_1.z.lazy(() => SessionWhereInput_schema_1.SessionWhereInputObjectSchema).array()]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), expires: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), user: zod_1.z.union([zod_1.z.lazy(() => UserRelationFilter_schema_1.UserRelationFilterObjectSchema),
        zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema)]).optional()
}).strict();
