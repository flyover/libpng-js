System.register(["./bind-libpng"], function (exports_1, context_1) {
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
    var Bind, bind;
    var __moduleName = context_1 && context_1.id;
    function default_1(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                Bind.default(value).then((value) => {
                    exports_1("bind", bind = value);
                    resolve();
                });
            });
        });
    }
    exports_1("default", default_1);
    function png_access_version_number() {
        return bind.png_access_version_number();
    }
    exports_1("png_access_version_number", png_access_version_number);
    exports_1("access_version_number", png_access_version_number);
    function encode(image_data) {
        const png_file = bind.encode(image_data);
        if (png_file instanceof Error) {
            throw image_data;
        }
        return png_file;
    }
    exports_1("encode", encode);
    function decode(png_file) {
        const image_data = bind.decode(png_file);
        if (image_data instanceof Error) {
            throw image_data;
        }
        return image_data;
    }
    exports_1("decode", decode);
    return {
        setters: [
            function (Bind_1) {
                Bind = Bind_1;
            }
        ],
        execute: function () {
            exports_1("Bind", Bind);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicG5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlicG5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFJQSxtQkFBK0IsS0FBNEI7O1lBQ3pELE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFtQixFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBa0IsRUFBUSxFQUFFO29CQUNwRCxrQkFBQSxJQUFJLEdBQUcsS0FBSyxFQUFDO29CQUNiLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7O0lBSUQsU0FBZ0IseUJBQXlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDMUMsQ0FBQzs7O0lBRUQsU0FBZ0IsTUFBTSxDQUFDLFVBQXFCO1FBQzFDLE1BQU0sUUFBUSxHQUF1QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksUUFBUSxZQUFZLEtBQUssRUFBRTtZQUFFLE1BQU0sVUFBVSxDQUFDO1NBQUU7UUFDcEQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7SUFFRCxTQUFnQixNQUFNLENBQUMsUUFBb0I7UUFDekMsTUFBTSxVQUFVLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxVQUFVLFlBQVksS0FBSyxFQUFFO1lBQUUsTUFBTSxVQUFVLENBQUM7U0FBRTtRQUN0RCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDIn0=