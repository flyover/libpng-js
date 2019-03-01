System.register(["libpng-js"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRUEsU0FBOEIsSUFBSTs7WUFDaEMsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQywrQkFBK0I7WUFFcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztZQUVuRjtnQkFDRSw4REFBOEQ7Z0JBQzlELE1BQU0sVUFBVSxHQUFjO29CQUM1QixLQUFLLEVBQUUsQ0FBQztvQkFDUixNQUFNLEVBQUUsQ0FBQztvQkFDVCxJQUFJLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxDQUFFLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBRSxDQUFDO2lCQUN4RixDQUFDO2dCQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDckI7YUFDRjtZQUVEO2dCQUNFLElBQUk7b0JBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyx1QkFBdUIsRUFBRTt3QkFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDckI7aUJBQ0Y7YUFDRjtZQUVEO2dCQUNFLE1BQU0sT0FBTyxHQUFXLGFBQWEsQ0FBQztnQkFDdEMsTUFBTSxRQUFRLEdBQWUsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDeEYsTUFBTSxVQUFVLEdBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxLQUFLLEdBQVcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDdkMsTUFBTSxNQUFNLEdBQVcsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsTUFBTSxJQUFJLEdBQXNCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQzdDLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQztvQkFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUM5QixNQUFNLENBQUMsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzlELElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQzFDO29CQUNELElBQUksSUFBSSxLQUFLLENBQUM7aUJBQ2Y7Z0JBQ0QsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7b0JBQ25DLE1BQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzlGLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQTtvQkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFBO29CQUNuRCxNQUFNLEdBQUcsR0FBb0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckUsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO3dCQUFFLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztxQkFBRTtvQkFDeEMscUVBQXFFO29CQUNyRSxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO29CQUNsQyxNQUFNLEVBQUUsR0FBRyx1QkFBYSxJQUFJLENBQUMsQ0FBQztvQkFDOUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxRTthQUNGO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTs7SUFFRCxTQUFTLE9BQU8sQ0FBQyxDQUFZLEVBQUUsQ0FBWTtRQUN6QyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFBRSxPQUFPLEVBQUUsQ0FBQzthQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFBRSxPQUFPLEdBQUcsQ0FBQzthQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUMvQztRQUNELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQyJ9