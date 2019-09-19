System.register(["libpng-js"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var PNG;
    var __moduleName = context_1 && context_1.id;
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            yield PNG.default(); // initialize Emscripten module
            console.log(PNG.bind.mallinfo().uordblks);
            console.log("libpng", PNG.bind.PNG_LIBPNG_VER_STRING, PNG.access_version_number());
            {
                // encoded image_data only needs to follow ImageData interface
                const image_data = {
                    width: 2,
                    height: 2,
                    data: new Uint8ClampedArray([255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255])
                };
                if (!compare(image_data, PNG.decode(PNG.encode(image_data)))) {
                    console.error("Error: data mismatch");
                }
                else {
                    console.log("pass");
                }
            }
            {
                try {
                    PNG.decode(new Uint8Array(1024));
                }
                catch (e) {
                    if (e.toString() !== "Error: Not a PNG file") {
                        console.error(e.toString());
                    }
                    else {
                        console.log("pass");
                    }
                }
            }
            {
                const png_url = "pngtest.png";
                const png_file = new Uint8Array(yield (yield fetch(png_url)).arrayBuffer());
                const image_data = PNG.decode(png_file);
                const width = image_data.width;
                const height = image_data.height;
                const data = image_data.data;
                console.log(`${png_url} ${width}x${height}`);
                let text = "";
                text += "╔" + "═".repeat(width) + "╗\n";
                for (let y = 0; y < height; ++y) {
                    text += "║";
                    for (let x = 0; x < width; ++x) {
                        const i = 4 * (y * width + x);
                        const r = data[i + 0];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        const l = (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
                        text += " ░▒▓█"[Math.floor(l * 5 / 256)];
                    }
                    text += "║\n";
                }
                text += "╚" + "═".repeat(width) + "╝\n";
                console.log(text);
                if (typeof document !== "undefined") {
                    const canvas = document.body.appendChild(document.createElement("canvas"));
                    canvas.style.width = `${canvas.width = width}px`;
                    canvas.style.height = `${canvas.height = height}px`;
                    const ctx = canvas.getContext("2d");
                    if (ctx === null) {
                        throw new Error();
                    }
                    // decoded image_data will use the ImageData constructor if available
                    ctx.putImageData(image_data, 0, 0);
                }
                if (typeof process !== "undefined") {
                    const fs = yield context_1.import("fs");
                    fs.writeFileSync("pngtest-out.png", Buffer.from(PNG.encode(image_data)));
                }
            }
            console.log(PNG.bind.mallinfo().uordblks);
        });
    }
    exports_1("default", main);
    function compare(a, b) {
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
    function rgb_to_ansi256(r, g, b) {
        if (r === g && g === b) {
            if (r < 8) {
                return 16;
            }
            if (r > 248) {
                return 231;
            }
            return Math.round(((r - 8) / 247) * 24) + 232;
        }
        return 16 + 36 * Math.round(r * 5) + 6 * Math.round(g * 5) + Math.round(b * 5);
    }
    return {
        setters: [
            function (PNG_1) {
                PNG = PNG_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUVBLFNBQThCLElBQUk7O1lBQ2hDLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsK0JBQStCO1lBRXBELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7WUFFbkY7Z0JBQ0UsOERBQThEO2dCQUM5RCxNQUFNLFVBQVUsR0FBYztvQkFDNUIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsTUFBTSxFQUFFLENBQUM7b0JBQ1QsSUFBSSxFQUFFLElBQUksaUJBQWlCLENBQUMsQ0FBRSxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUUsQ0FBQztpQkFDeEYsQ0FBQztnQkFFRixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM1RCxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3JCO2FBQ0Y7WUFFRDtnQkFDRSxJQUFJO29CQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFB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Q0FBQztJQUVELFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQUUsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQUUsT0FBTyxHQUFHLENBQUM7YUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDL0M7UUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUMifQ==