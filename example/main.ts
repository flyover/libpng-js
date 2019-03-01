import * as PNG from "libpng-js";

export default async function main(): Promise<void> {
  await PNG.default(); // initialize Emscripten module

  console.log(PNG.bind.mallinfo().uordblks);

  console.log("libpng", PNG.bind.PNG_LIBPNG_VER_STRING, PNG.access_version_number());

  {
    // encoded image_data only needs to follow ImageData interface
    const image_data: ImageData = {
      width: 2,
      height: 2,
      data: new Uint8ClampedArray([ 255,0,0,255, 0,255,0,255, 0,0,255,255, 255,255,255,255 ])
    };
  
    if (!compare(image_data, PNG.decode(PNG.encode(image_data)))) {
      console.error("Error: data mismatch");
    } else {
      console.log("pass");
    }
  }

  {
    try {
      PNG.decode(new Uint8Array(1024));
    } catch (e) {
      if (e.toString() !== "Error: Not a PNG file") {
        console.error(e.toString());
      } else {
        console.log("pass");
      }
    }  
  }

  {
    const png_url: string = "pngtest.png";
    const png_file: Uint8Array = new Uint8Array(await (await fetch(png_url)).arrayBuffer());
    const image_data: ImageData = PNG.decode(png_file);
    const width: number = image_data.width;
    const height: number = image_data.height;
    const data: Uint8ClampedArray = image_data.data;
    console.log(`${png_url} ${width}x${height}`);
    let text: string = "";
    text += "╔" + "═".repeat(width) + "╗\n";
    for (let y = 0; y < height; ++y) {
      text += "║";
      for (let x = 0; x < width; ++x) {
        const i: number = 4 * (y * width + x);
        const r: number = data[i + 0];
        const g: number = data[i + 1];
        const b: number = data[i + 2];
        const l: number = (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
        text += " ░▒▓█"[Math.floor(l * 5 / 256)];
      }
      text += "║\n";
    }
    text += "╚" + "═".repeat(width) + "╝\n";
    console.log(text);
    if (typeof document !== "undefined") {
      const canvas: HTMLCanvasElement = document.body.appendChild(document.createElement("canvas"));
      canvas.style.width = `${canvas.width = width}px`
      canvas.style.height = `${canvas.height = height}px`
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (ctx === null) { throw new Error(); }
      // decoded image_data will use the ImageData constructor if available
      ctx.putImageData(image_data, 0, 0);
    }
    if (typeof process !== "undefined") {
      const fs = await import("fs");
      fs.writeFileSync("pngtest-out.png", Buffer.from(PNG.encode(image_data)));
    }
  }

  console.log(PNG.bind.mallinfo().uordblks);
}

function compare(a: ImageData, b: ImageData): boolean {
  if (a.width !== b.width || a.height !== b.height) {
    return false;
  }
  for (let i = 0; i < a.data.length; ++i) {
    if (a.data[i] !== b.data[i]) {
      return false;
    }
  }
  return true;
}

function rgb_to_ansi256(r: number, g: number, b: number): number {
  if (r === g && g === b) {
    if (r < 8) { return 16; }
    if (r > 248) { return 231; }
    return Math.round(((r - 8) / 247) * 24) + 232;
  }
  return 16 + 36 * Math.round(r * 5) + 6 * Math.round(g * 5) + Math.round(b * 5);
}
