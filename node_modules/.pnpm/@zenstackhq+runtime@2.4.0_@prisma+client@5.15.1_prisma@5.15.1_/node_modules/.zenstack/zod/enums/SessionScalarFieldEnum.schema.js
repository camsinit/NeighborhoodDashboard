"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SessionScalarFieldEnumSchema = zod_1.z.enum(["id", "sessionToken", "userId", "expires"]);
