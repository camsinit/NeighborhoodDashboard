"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithoutUserNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountCreateWithoutUserInput_schema_1 = require("./AccountCreateWithoutUserInput.schema");
const AccountUncheckedCreateWithoutUserInput_schema_1 = require("./AccountUncheckedCreateWithoutUserInput.schema");
const AccountCreateOrConnectWithoutUserInput_schema_1 = require("./AccountCreateOrConnectWithoutUserInput.schema");
const AccountUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./AccountUpsertWithWhereUniqueWithoutUserInput.schema");
const AccountCreateManyUserInputEnvelope_schema_1 = require("./AccountCreateManyUserInputEnvelope.schema");
const AccountWhereUniqueInput_schema_1 = require("./AccountWhereUniqueInput.schema");
const AccountUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./AccountUpdateWithWhereUniqueWithoutUserInput.schema");
const AccountUpdateManyWithWhereWithoutUserInput_schema_1 = require("./AccountUpdateManyWithWhereWithoutUserInput.schema");
const AccountScalarWhereInput_schema_1 = require("./AccountScalarWhereInput.schema");
exports.AccountUpdateManyWithoutUserNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => AccountCreateWithoutUserInput_schema_1.AccountCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountCreateWithoutUserInput_schema_1.AccountCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => AccountUncheckedCreateWithoutUserInput_schema_1.AccountUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUncheckedCreateWithoutUserInput_schema_1.AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => AccountCreateOrConnectWithoutUserInput_schema_1.AccountCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountCreateOrConnectWithoutUserInput_schema_1.AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInput_schema_1.AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInput_schema_1.AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => AccountCreateManyUserInputEnvelope_schema_1.AccountCreateManyUserInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInput_schema_1.AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInput_schema_1.AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => AccountUpdateManyWithWhereWithoutUserInput_schema_1.AccountUpdateManyWithWhereWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUpdateManyWithWhereWithoutUserInput_schema_1.AccountUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => AccountScalarWhereInput_schema_1.AccountScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => AccountScalarWhereInput_schema_1.AccountScalarWhereInputObjectSchema).array()]).optional()
}).strict();
