"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountWhereUniqueInput_schema_1 = require("./AccountWhereUniqueInput.schema");
const AccountUpdateWithoutUserInput_schema_1 = require("./AccountUpdateWithoutUserInput.schema");
const AccountUncheckedUpdateWithoutUserInput_schema_1 = require("./AccountUncheckedUpdateWithoutUserInput.schema");
const AccountCreateWithoutUserInput_schema_1 = require("./AccountCreateWithoutUserInput.schema");
const AccountUncheckedCreateWithoutUserInput_schema_1 = require("./AccountUncheckedCreateWithoutUserInput.schema");
exports.AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => AccountUpdateWithoutUserInput_schema_1.AccountUpdateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUncheckedUpdateWithoutUserInput_schema_1.AccountUncheckedUpdateWithoutUserInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => AccountCreateWithoutUserInput_schema_1.AccountCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUncheckedCreateWithoutUserInput_schema_1.AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
