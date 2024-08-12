"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateOrConnectWithoutUserInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SessionWhereUniqueInput_schema_1 = require("./SessionWhereUniqueInput.schema");
const SessionCreateWithoutUserInput_schema_1 = require("./SessionCreateWithoutUserInput.schema");
const SessionUncheckedCreateWithoutUserInput_schema_1 = require("./SessionUncheckedCreateWithoutUserInput.schema");
exports.SessionCreateOrConnectWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => SessionCreateWithoutUserInput_schema_1.SessionCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => SessionUncheckedCreateWithoutUserInput_schema_1.SessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
