"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedsModule = void 0;
const common_1 = require("@nestjs/common");
const feeds_controller_1 = require("./feeds.controller");
const feeds_service_1 = require("./feeds.service");
const prisma_module_1 = require("../prisma/prisma.module");
const trpc_module_1 = require("../trpc/trpc.module");
let FeedsModule = class FeedsModule {
};
exports.FeedsModule = FeedsModule;
exports.FeedsModule = FeedsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, trpc_module_1.TrpcModule],
        controllers: [feeds_controller_1.FeedsController],
        providers: [feeds_service_1.FeedsService],
    })
], FeedsModule);
//# sourceMappingURL=feeds.module.js.map