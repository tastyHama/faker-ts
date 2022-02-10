import * as ts from 'typescript';
import { JsonSchemaGenerator } from 'typescript-json-schema';
export declare class TsMocker {
    generator: JsonSchemaGenerator;
    program: ts.Program;
    constructor(program?: ts.Program);
    setProgram(program: ts.Program): void;
    generateSchema(fullTypeName?: string, onlyIncludeFiles?: string[]): import("typescript-json-schema").Definition;
    generateMock(fullTypeName: any, onlyIncludeFiles?: string[]): any;
}
export declare function tsMockService(files: string[], jsonCompilerOptions?: ts.CompilerOptions, basePath?: string): TsMocker;
export declare function tsMock(files: string[], jsonCompilerOptions?: ts.CompilerOptions, basePath?: string): TsMocker;
