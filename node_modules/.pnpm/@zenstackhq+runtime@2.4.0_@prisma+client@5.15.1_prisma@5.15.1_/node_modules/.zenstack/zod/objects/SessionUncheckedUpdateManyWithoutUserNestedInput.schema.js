"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionCreateWithoutUserInput_schema_1 = require("./SessionCreateWithoutUserInput.schema");
const SessionUncheckedCreateWithoutUserInput_schema_1 = require("./SessionUncheckedCreateWithoutUserInput.schema");
const SessionCreateOrConnectWithoutUserInput_schema_1 = require("./SessionCreateOrConnectWithoutUserInput.schema");
const SessionUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./SessionUpsertWithWhereUniqueWithoutUserInput.schema");
const SessionCreateManyUserInputEnvelope_schema_1 = require("./SessionCreateManyUserInputEnvelope.schema");
const SessionWhereUniqueInput_schema_1 = require("./SessionWhereUniqueInput.schema");
const SessionUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./SessionUpdateWithWhereUniqueWithoutUserInput.schema");
const SessionUpdateManyWithWhereWithoutUserInput_schema_1 = require("./SessionUpdateManyWithWhereWithoutUserInput.schema");
const SessionScalarWhereInput_schema_1 = require("./SessionScalarWhereInput.schema");
exports.SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => SessionCreateWithoutUserInput_schema_1.SessionCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionCreateWithoutUserInput_schema_1.SessionCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => SessionUncheckedCreateWithoutUserInput_schema_1.SessionUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUncheckedCreateWithoutUserInput_schema_1.SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => SessionCreateOrConnectWithoutUserInput_schema_1.SessionCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionCreateOrConnectWithoutUserInput_schema_1.SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInput_schema_1.SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInput_schema_1.SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => SessionCreateManyUserInputEnvelope_schema_1.SessionCreateManyUserInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInput_schema_1.SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInput_schema_1.SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => SessionUpdateManyWithWhereWithoutUserInput_schema_1.SessionUpdateManyWithWhereWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUpdateManyWithWhereWithoutUserInput_schema_1.SessionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => SessionScalarWhereInput_schema_1.SessionScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => SessionScalarWhereInput_schema_1.SessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
