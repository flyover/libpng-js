import * as Bind from "./bind-libpng";
export { Bind };

let bind: Bind.Module;
export default async function (value?: Partial<Bind.Module>): Promise<void> {
  return new Promise<void>((resolve: () => void) => {
    Bind.default(value).then((value: Bind.Module): void => {
      bind = value;
      resolve();
    });
  });
}
export { bind };

export { png_access_version_number as access_version_number };
export function png_access_version_number(): number {
  return bind.png_access_version_number();
}

export function encode(image_data: ImageData): Uint8Array {
  const png_file: Uint8Array | Error = bind.encode(image_data);
  if (png_file instanceof Error) { throw image_data; }
  return png_file;
}

export function decode(png_file: Uint8Array): ImageData {
  const image_data: ImageData | Error = bind.decode(png_file);
  if (image_data instanceof Error) { throw image_data; }
  return image_data;
}
