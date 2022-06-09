import jsf from 'json-schema-faker';
import * as TJS from "typescript-json-schema";
import { generateSchema } from 'typescript-json-schema';

export function tsMock(
  symbol,
  file: string,
  compilerOptions: TJS.CompilerOptions
) {
  const program = TJS.getProgramFromFiles([file], compilerOptions);
  const schema = generateSchema(program, symbol);
  return jsf.generate(schema, []);
}
