import Koa from 'koa';
import * as TJS from "typescript-json-schema";
export declare function createServer(files: string[], jsonCompilerOptions?: TJS.CompilerOptions, basePath?: string): Koa<Koa.DefaultState, Koa.DefaultContext>;
