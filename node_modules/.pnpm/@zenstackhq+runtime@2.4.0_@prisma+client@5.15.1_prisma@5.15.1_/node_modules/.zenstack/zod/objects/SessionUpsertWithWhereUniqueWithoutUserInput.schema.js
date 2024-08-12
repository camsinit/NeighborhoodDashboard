"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionWhereUniqueInput_schema_1 = require("./SessionWhereUniqueInput.schema");
const SessionUpdateWithoutUserInput_schema_1 = require("./SessionUpdateWithoutUserInput.schema");
const SessionUncheckedUpdateWithoutUserInput_schema_1 = require("./SessionUncheckedUpdateWithoutUserInput.schema");
const SessionCreateWithoutUserInput_schema_1 = require("./SessionCreateWithoutUserInput.schema");
const SessionUncheckedCreateWithoutUserInput_schema_1 = require("./SessionUncheckedCreateWithoutUserInput.schema");
exports.SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => SessionUpdateWithoutUserInput_schema_1.SessionUpdateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUncheckedUpdateWithoutUserInput_schema_1.SessionUncheckedUpdateWithoutUserInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => SessionCreateWithoutUserInput_schema_1.SessionCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUncheckedCreateWithoutUserInput_schema_1.SessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
