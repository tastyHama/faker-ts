import * as ts from 'typescript';
import * as TJS from "typescript-json-schema";

export function getTsOptions(
  jsonCompilerOptions: TJS.CompilerOptions = {},
  basePath: string = "./"
) {
  const compilerOptions = ts.convertCompilerOptionsFromJson(
    jsonCompilerOptions,
    basePath
  ).options;

  return {
    noEmit: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    allowUnusedLabels: true,
    ...compilerOptions,
  };
}
