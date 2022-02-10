import Koa from 'koa';
import * as ts from 'typescript';
export declare function createServer(files: string[], jsonCompilerOptions?: ts.CompilerOptions, basePath?: string): Koa<Koa.DefaultState, Koa.DefaultContext>;
