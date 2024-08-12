"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithWhereWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const AccountScalarWhereInput_schema_1 = require("./AccountScalarWhereInput.schema");
const AccountUpdateManyMutationInput_schema_1 = require("./AccountUpdateManyMutationInput.schema");
const AccountUncheckedUpdateManyWithoutUserInput_schema_1 = require("./AccountUncheckedUpdateManyWithoutUserInput.schema");
exports.AccountUpdateManyWithWhereWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => AccountScalarWhereInput_schema_1.AccountScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => AccountUpdateManyMutationInput_schema_1.AccountUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => AccountUncheckedUpdateManyWithoutUserInput_schema_1.AccountUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
