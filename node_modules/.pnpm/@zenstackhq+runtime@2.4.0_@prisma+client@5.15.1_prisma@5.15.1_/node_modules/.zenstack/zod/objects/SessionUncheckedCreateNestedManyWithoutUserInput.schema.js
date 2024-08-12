"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionCreateWithoutUserInput_schema_1 = require("./SessionCreateWithoutUserInput.schema");
const SessionUncheckedCreateWithoutUserInput_schema_1 = require("./SessionUncheckedCreateWithoutUserInput.schema");
const SessionCreateOrConnectWithoutUserInput_schema_1 = require("./SessionCreateOrConnectWithoutUserInput.schema");
const SessionCreateManyUserInputEnvelope_schema_1 = require("./SessionCreateManyUserInputEnvelope.schema");
const SessionWhereUniqueInput_schema_1 = require("./SessionWhereUniqueInput.schema");
exports.SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SessionCreateWithoutUserInput_schema_1.SessionCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionCreateWithoutUserInput_schema_1.SessionCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => SessionUncheckedCreateWithoutUserInput_schema_1.SessionUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUncheckedCreateWithoutUserInput_schema_1.SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => SessionCreateOrConnectWithoutUserInput_schema_1.SessionCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionCreateOrConnectWithoutUserInput_schema_1.SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => SessionCreateManyUserInputEnvelope_schema_1.SessionCreateManyUserInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
