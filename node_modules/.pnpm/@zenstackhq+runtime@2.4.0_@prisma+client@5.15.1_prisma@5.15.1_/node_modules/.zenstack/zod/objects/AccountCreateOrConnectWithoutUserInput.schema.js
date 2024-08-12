"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateOrConnectWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountWhereUniqueInput_schema_1 = require("./AccountWhereUniqueInput.schema");
const AccountCreateWithoutUserInput_schema_1 = require("./AccountCreateWithoutUserInput.schema");
const AccountUncheckedCreateWithoutUserInput_schema_1 = require("./AccountUncheckedCreateWithoutUserInput.schema");
exports.AccountCreateOrConnectWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => AccountCreateWithoutUserInput_schema_1.AccountCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUncheckedCreateWithoutUserInput_schema_1.AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
