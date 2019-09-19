import * as Emscripten from "./emscripten";

// emcc -s MODULARIZE=0
// declare const Module: Module; export default Module;

// emcc -s MODULARIZE=1
export default function Module(Module?: Partial<Module>): Promise<Module>;

export interface mallinfo {
  arena: number;
  ordblks: number;
  smblks: number;
  hblks: number;
  hblkhd: number;
  usmblks: number;
  fsmblks: number;
  uordblks: number;
  fordblks: number;
  keepcost: number;
}

export interface Module extends Emscripten.EmscriptenModule {

  mallinfo(): mallinfo;

  PNG_LIBPNG_VER_STRING: string;
  PNG_LIBPNG_VER_MAJOR: number;
  PNG_LIBPNG_VER_MINOR: number;
  PNG_LIBPNG_VER_RELEASE: number;
  PNG_LIBPNG_VER: number;
  png_access_version_number(): number;

  encode(image_data: ImageData): Uint8Array | Error;
  decode(png_file: Uint8Array): ImageData | Error;

}
