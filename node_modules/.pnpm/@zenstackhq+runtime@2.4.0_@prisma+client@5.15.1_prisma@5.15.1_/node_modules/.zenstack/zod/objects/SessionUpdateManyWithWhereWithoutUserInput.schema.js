"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateManyWithWhereWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionScalarWhereInput_schema_1 = require("./SessionScalarWhereInput.schema");
const SessionUpdateManyMutationInput_schema_1 = require("./SessionUpdateManyMutationInput.schema");
const SessionUncheckedUpdateManyWithoutUserInput_schema_1 = require("./SessionUncheckedUpdateManyWithoutUserInput.schema");
exports.SessionUpdateManyWithWhereWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SessionScalarWhereInput_schema_1.SessionScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => SessionUpdateManyMutationInput_schema_1.SessionUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => SessionUncheckedUpdateManyWithoutUserInput_schema_1.SessionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
