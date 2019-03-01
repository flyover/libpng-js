System.register(["./bind-libpng"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicG5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlicG5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBLG1CQUErQixLQUE0Qjs7WUFDekQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQW1CLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFrQixFQUFRLEVBQUU7b0JBQ3BELGtCQUFBLElBQUksR0FBRyxLQUFLLEVBQUM7b0JBQ2IsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTs7SUFJRCxTQUFnQix5QkFBeUI7UUFDdkMsT0FBTyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7SUFFRCxTQUFnQixNQUFNLENBQUMsVUFBcUI7UUFDMUMsTUFBTSxRQUFRLEdBQXVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0QsSUFBSSxRQUFRLFlBQVksS0FBSyxFQUFFO1lBQUUsTUFBTSxVQUFVLENBQUM7U0FBRTtRQUNwRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztJQUVELFNBQWdCLE1BQU0sQ0FBQyxRQUFvQjtRQUN6QyxNQUFNLFVBQVUsR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLFVBQVUsWUFBWSxLQUFLLEVBQUU7WUFBRSxNQUFNLFVBQVUsQ0FBQztTQUFFO1FBQ3RELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMifQ==