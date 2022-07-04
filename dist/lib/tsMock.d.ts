import * as TJS from "typescript-json-schema";
export declare class TsMocker {
    generator: TJS.JsonSchemaGenerator;
    program: TJS.Program;
    constructor(program?: TJS.Program);
    setProgram(program: TJS.Program): void;
    generateSchema(fullTypeName?: string, onlyIncludeFiles?: string[]): TJS.Definition;
    generateMock(fullTypeName: any, onlyIncludeFiles?: string[]): any;
}
export declare function tsMockService(files: string[], jsonCompilerOptions?: TJS.CompilerOptions, basePath?: string): TsMocker;
export declare function tsMock(files: string[], jsonCompilerOptions?: TJS.CompilerOptions, basePath?: string): TsMocker;
