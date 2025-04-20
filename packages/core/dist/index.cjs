'use strict';

var chunkP6KJ7FZZ_cjs = require('./chunk-P6KJ7FZZ.cjs');
var chunk3XWBNOSO_cjs = require('./chunk-3XWBNOSO.cjs');
var chunkH6SGDOA4_cjs = require('./chunk-H6SGDOA4.cjs');
var chunk63YK3N3V_cjs = require('./chunk-63YK3N3V.cjs');
var chunk7JBINHJX_cjs = require('./chunk-7JBINHJX.cjs');
var chunkFPM2XCMS_cjs = require('./chunk-FPM2XCMS.cjs');
var chunk4BBO7B7G_cjs = require('./chunk-4BBO7B7G.cjs');
var chunkM4GSRLB6_cjs = require('./chunk-M4GSRLB6.cjs');
var chunkRIBNDTA6_cjs = require('./chunk-RIBNDTA6.cjs');
var chunkKR6AYHNH_cjs = require('./chunk-KR6AYHNH.cjs');
var chunkRZCYBC7D_cjs = require('./chunk-RZCYBC7D.cjs');
var chunkD63P5O4Q_cjs = require('./chunk-D63P5O4Q.cjs');
var chunkO7IW545H_cjs = require('./chunk-O7IW545H.cjs');
var chunk3C6V2FEP_cjs = require('./chunk-3C6V2FEP.cjs');
var chunkST5RMVLG_cjs = require('./chunk-ST5RMVLG.cjs');

// src/agent/index.warning.ts
var Agent2 = class extends chunkM4GSRLB6_cjs.Agent {
  constructor(config) {
    super(config);
    this.logger.warn('Please import "Agent from "@mastra/core/agent" instead of "@mastra/core"');
  }
};

// src/base.warning.ts
var MastraBase2 = class extends chunkD63P5O4Q_cjs.MastraBase {
  constructor(args) {
    super(args);
    this.logger.warn('Please import "MastraBase" from "@mastra/core/base" instead of "@mastra/core"');
  }
};

// src/deployer/index.warning.ts
var MastraDeployer2 = class extends chunkRZCYBC7D_cjs.MastraDeployer {
  constructor(args) {
    super(args);
    this.logger.warn('Please import "MastraDeployer" from "@mastra/core/deployer" instead of "@mastra/core"');
  }
};

// src/storage/base.warning.ts
var MastraStorage2 = class extends chunkFPM2XCMS_cjs.MastraStorage {
  constructor({ name }) {
    super({
      name
    });
    this.logger.warn('Please import "MastraStorage" from "@mastra/core/storage" instead of "@mastra/core"');
  }
};

// src/integration/integration.warning.ts
var Integration2 = class extends chunk3XWBNOSO_cjs.Integration {
  constructor() {
    super();
    console.warn('Please import "Integration" from "@mastra/core/integration" instead of "@mastra/core"');
  }
};

// src/integration/openapi-toolset.warning.ts
var OpenAPIToolset2 = class extends chunk3XWBNOSO_cjs.OpenAPIToolset {
  constructor() {
    super();
    console.warn('Please import "OpenAPIToolset" from "@mastra/core/integration" instead of "@mastra/core"');
  }
};

// src/logger/index.warning.ts
function createLogger2(options) {
  console.warn('Please import "createLogger" from "@mastra/core/logger" instead of "@mastra/core"');
  return chunkO7IW545H_cjs.createLogger(options);
}

// src/memory/index.warning.ts
var MastraMemory2 = class extends chunk63YK3N3V_cjs.MastraMemory {
  constructor(_arg) {
    super({ name: `Deprecated memory` });
    this.logger.warn('Please import "MastraMemory" from "@mastra/core/memory" instead of "@mastra/core"');
  }
};

// src/tools/index.warning.ts
var Tool2 = class extends chunkKR6AYHNH_cjs.Tool {
  constructor(opts) {
    super(opts);
    console.warn('Please import "Tool" from "@mastra/core/tools" instead of "@mastra/core"');
  }
};

// src/tts/index.warning.ts
var MastraTTS2 = class extends chunkP6KJ7FZZ_cjs.MastraTTS {
  constructor(args) {
    super(args);
    this.logger.warn('Please import "MastraTTS" from "@mastra/core/tts" instead of "@mastra/core"');
  }
};

// src/vector/index.warning.ts
var MastraVector2 = class extends chunk7JBINHJX_cjs.MastraVector {
  constructor() {
    super();
    this.logger.warn('Please import "MastraVector" from "@mastra/core/vector" instead of "@mastra/core"');
  }
};

// src/workflows/workflow.warning.ts
var Workflow2 = class extends chunkM4GSRLB6_cjs.Workflow {
  constructor(args) {
    super(args);
    this.logger.warn('Please import "Workflow" from "@mastra/core/workflows" instead of "@mastra/core"');
  }
};

Object.defineProperty(exports, "Mastra", {
  enumerable: true,
  get: function () { return chunkH6SGDOA4_cjs.Mastra; }
});
Object.defineProperty(exports, "MemoryProcessor", {
  enumerable: true,
  get: function () { return chunk63YK3N3V_cjs.MemoryProcessor; }
});
Object.defineProperty(exports, "CohereRelevanceScorer", {
  enumerable: true,
  get: function () { return chunk4BBO7B7G_cjs.CohereRelevanceScorer; }
});
Object.defineProperty(exports, "MastraAgentRelevanceScorer", {
  enumerable: true,
  get: function () { return chunk4BBO7B7G_cjs.MastraAgentRelevanceScorer; }
});
Object.defineProperty(exports, "createSimilarityPrompt", {
  enumerable: true,
  get: function () { return chunk4BBO7B7G_cjs.createSimilarityPrompt; }
});
Object.defineProperty(exports, "Step", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.Step; }
});
Object.defineProperty(exports, "WhenConditionReturnValue", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.WhenConditionReturnValue; }
});
Object.defineProperty(exports, "agentToStep", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.agentToStep; }
});
Object.defineProperty(exports, "createStep", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.createStep; }
});
Object.defineProperty(exports, "getActivePathsAndStatus", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.getActivePathsAndStatus; }
});
Object.defineProperty(exports, "getResultActivePaths", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.getResultActivePaths; }
});
Object.defineProperty(exports, "getStepResult", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.getStepResult; }
});
Object.defineProperty(exports, "getSuspendedPaths", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.getSuspendedPaths; }
});
Object.defineProperty(exports, "isAgent", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isAgent; }
});
Object.defineProperty(exports, "isConditionalKey", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isConditionalKey; }
});
Object.defineProperty(exports, "isErrorEvent", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isErrorEvent; }
});
Object.defineProperty(exports, "isFinalState", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isFinalState; }
});
Object.defineProperty(exports, "isLimboState", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isLimboState; }
});
Object.defineProperty(exports, "isTransitionEvent", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isTransitionEvent; }
});
Object.defineProperty(exports, "isVariableReference", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isVariableReference; }
});
Object.defineProperty(exports, "isWorkflow", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.isWorkflow; }
});
Object.defineProperty(exports, "mergeChildValue", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.mergeChildValue; }
});
Object.defineProperty(exports, "recursivelyCheckForFinalState", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.recursivelyCheckForFinalState; }
});
Object.defineProperty(exports, "resolveVariables", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.resolveVariables; }
});
Object.defineProperty(exports, "updateStepInHierarchy", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.updateStepInHierarchy; }
});
Object.defineProperty(exports, "workflowToStep", {
  enumerable: true,
  get: function () { return chunkM4GSRLB6_cjs.workflowToStep; }
});
Object.defineProperty(exports, "InstrumentClass", {
  enumerable: true,
  get: function () { return chunkRIBNDTA6_cjs.InstrumentClass; }
});
Object.defineProperty(exports, "OTLPStorageExporter", {
  enumerable: true,
  get: function () { return chunkRIBNDTA6_cjs.OTLPTraceExporter; }
});
Object.defineProperty(exports, "Telemetry", {
  enumerable: true,
  get: function () { return chunkRIBNDTA6_cjs.Telemetry; }
});
Object.defineProperty(exports, "hasActiveTelemetry", {
  enumerable: true,
  get: function () { return chunkRIBNDTA6_cjs.hasActiveTelemetry; }
});
Object.defineProperty(exports, "withSpan", {
  enumerable: true,
  get: function () { return chunkRIBNDTA6_cjs.withSpan; }
});
Object.defineProperty(exports, "checkEvalStorageFields", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.checkEvalStorageFields; }
});
Object.defineProperty(exports, "createMastraProxy", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.createMastraProxy; }
});
Object.defineProperty(exports, "createTool", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.createTool; }
});
Object.defineProperty(exports, "deepMerge", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.deepMerge; }
});
Object.defineProperty(exports, "delay", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.delay; }
});
Object.defineProperty(exports, "ensureAllMessagesAreCoreMessages", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.ensureAllMessagesAreCoreMessages; }
});
Object.defineProperty(exports, "ensureToolProperties", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.ensureToolProperties; }
});
Object.defineProperty(exports, "isVercelTool", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.isVercelTool; }
});
Object.defineProperty(exports, "jsonSchemaPropertiesToTSTypes", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.jsonSchemaPropertiesToTSTypes; }
});
Object.defineProperty(exports, "jsonSchemaToModel", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.jsonSchemaToModel; }
});
Object.defineProperty(exports, "makeCoreTool", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.makeCoreTool; }
});
Object.defineProperty(exports, "maskStreamTags", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.maskStreamTags; }
});
Object.defineProperty(exports, "resolveSerializedZodOutput", {
  enumerable: true,
  get: function () { return chunkKR6AYHNH_cjs.resolveSerializedZodOutput; }
});
Object.defineProperty(exports, "LogLevel", {
  enumerable: true,
  get: function () { return chunkO7IW545H_cjs.LogLevel; }
});
Object.defineProperty(exports, "Logger", {
  enumerable: true,
  get: function () { return chunkO7IW545H_cjs.Logger; }
});
Object.defineProperty(exports, "LoggerTransport", {
  enumerable: true,
  get: function () { return chunkO7IW545H_cjs.LoggerTransport; }
});
Object.defineProperty(exports, "MultiLogger", {
  enumerable: true,
  get: function () { return chunkO7IW545H_cjs.MultiLogger; }
});
Object.defineProperty(exports, "RegisteredLogger", {
  enumerable: true,
  get: function () { return chunkO7IW545H_cjs.RegisteredLogger; }
});
Object.defineProperty(exports, "combineLoggers", {
  enumerable: true,
  get: function () { return chunkO7IW545H_cjs.combineLoggers; }
});
Object.defineProperty(exports, "noopLogger", {
  enumerable: true,
  get: function () { return chunkO7IW545H_cjs.noopLogger; }
});
Object.defineProperty(exports, "Metric", {
  enumerable: true,
  get: function () { return chunk3C6V2FEP_cjs.Metric; }
});
Object.defineProperty(exports, "evaluate", {
  enumerable: true,
  get: function () { return chunk3C6V2FEP_cjs.evaluate; }
});
Object.defineProperty(exports, "AvailableHooks", {
  enumerable: true,
  get: function () { return chunkST5RMVLG_cjs.AvailableHooks; }
});
Object.defineProperty(exports, "executeHook", {
  enumerable: true,
  get: function () { return chunkST5RMVLG_cjs.executeHook; }
});
Object.defineProperty(exports, "registerHook", {
  enumerable: true,
  get: function () { return chunkST5RMVLG_cjs.registerHook; }
});
exports.Agent = Agent2;
exports.Integration = Integration2;
exports.MastraBase = MastraBase2;
exports.MastraDeployer = MastraDeployer2;
exports.MastraMemory = MastraMemory2;
exports.MastraStorage = MastraStorage2;
exports.MastraTTS = MastraTTS2;
exports.MastraVector = MastraVector2;
exports.OpenAPIToolset = OpenAPIToolset2;
exports.Tool = Tool2;
exports.Workflow = Workflow2;
exports.createLogger = createLogger2;
