"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SessionCountOrderByAggregateInput_schema_1 = require("./SessionCountOrderByAggregateInput.schema");
const SessionMaxOrderByAggregateInput_schema_1 = require("./SessionMaxOrderByAggregateInput.schema");
const SessionMinOrderByAggregateInput_schema_1 = require("./SessionMinOrderByAggregateInput.schema");
exports.SessionOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sessionToken: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), expires: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => SessionCountOrderByAggregateInput_schema_1.SessionCountOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => SessionMaxOrderByAggregateInput_schema_1.SessionMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => SessionMinOrderByAggregateInput_schema_1.SessionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
