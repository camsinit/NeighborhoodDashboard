"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountWhereUniqueInput_schema_1 = require("./AccountWhereUniqueInput.schema");
const AccountUpdateWithoutUserInput_schema_1 = require("./AccountUpdateWithoutUserInput.schema");
const AccountUncheckedUpdateWithoutUserInput_schema_1 = require("./AccountUncheckedUpdateWithoutUserInput.schema");
exports.AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => AccountWhereUniqueInput_schema_1.AccountWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => AccountUpdateWithoutUserInput_schema_1.AccountUpdateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => AccountUncheckedUpdateWithoutUserInput_schema_1.AccountUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
