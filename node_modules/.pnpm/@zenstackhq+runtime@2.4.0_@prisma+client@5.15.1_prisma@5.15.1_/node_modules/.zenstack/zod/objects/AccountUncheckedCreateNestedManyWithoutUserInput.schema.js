"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountCreateWithoutUserInput_schema_1 = require("./AccountCreateWithoutUserInput.schema");
const AccountUncheckedCreateWithoutUserInput_schema_1 = require("./AccountUncheckedCreateWithoutUserInput.schema");
const AccountCreateOrConnectWithoutUserInput_schema_1 = require("./AccountCreateOrConnectWithoutUserInput.schema");
const AccountCreateManyUserInputEnvelope_schema_1 = require("./AccountCreateManyUserInputEnvelope.schema");
const AccountWhereUniqueInput_schema_1 = require("./AccountWhereUniqueInput.schema");
exports.AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => AccountCreateWithoutUserInput_schema_1.AccountCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountCreateWithoutUserInput_schema_1.AccountCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => AccountUncheckedCreateWithoutUserInput_schema_1.AccountUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUncheckedCreateWithoutUserInput_schema_1.AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => AccountCreateOrConnectWithoutUserInput_schema_1.AccountCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountCreateOrConnectWithoutUserInput_schema_1.AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => AccountCreateManyUserInputEnvelope_schema_1.AccountCreateManyUserInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
