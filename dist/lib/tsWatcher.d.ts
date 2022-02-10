/// <reference types="node" />
import EventEmitter from 'events';
import ts from 'typescript';
export declare function tsWatcher(configFileName: string, optionsToExtend: ts.CompilerOptions | undefined): EventEmitter;
export declare function tsWatcher(rootFiles: string[], options: ts.CompilerOptions): EventEmitter;
