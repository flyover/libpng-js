all: start-example-node

start: start-example-html

build: build-bind-libpng build-libpng build-example

clean: clean-bind-libpng clean-libpng clean-example

# bind-libpng

# LIBPNG_PATH = libpng
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/png.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/pngconf.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/pngdebug.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/pnginfo.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/pngpriv.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/pngstruct.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/gregbook/readpng.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/gregbook/readpng2.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/gregbook/writepng.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/libtests/pngstest-errors.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/pngminim/decoder/pngusr.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/pngminim/encoder/pngusr.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/pngminim/preader/pngusr.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/tools/sRGB.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/visupng/cexcept.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/visupng/PngFile.h
# LIBPNG_SOURCE_HXX += $(LIBPNG_PATH)/contrib/visupng/resource.h
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/png.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngerror.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngget.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngmem.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngpread.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngread.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngrio.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngrtran.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngrutil.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngset.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngtest.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngtrans.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngwio.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngwrite.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngwtran.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/pngwutil.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/example.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/arm/arm_init.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/arm/filter_neon_intrinsics.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/arm/palette_neon_intrinsics.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/arm-neon/android-ndk.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/arm-neon/linux-auxv.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/arm-neon/linux.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/examples/iccfrompng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/examples/pngpixel.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/examples/pngtopng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/examples/simpleover.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/readpng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/readpng2.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/readppm.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/rpng-win.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/rpng-x.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/rpng2-win.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/rpng2-x.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/wpng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/gregbook/writepng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/fakepng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/makepng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/pngimage.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/pngstest.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/pngunknown.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/pngvalid.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/readpng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/tarith.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/libtests/timepng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/mips-msa/linux.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/pngminus/png2pnm.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/pngminus/pnm2png.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/powerpc-vsx/linux_aux.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/powerpc-vsx/linux.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/tools/checksum-icc.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/tools/cvtcolor.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/tools/genpng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/tools/makesRGB.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/tools/png-fix-itxt.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/tools/pngcp.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/tools/pngfix.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/visupng/PngFile.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/visupng/VisualPng.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/intel/filter_sse2_intrinsics.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/intel/intel_init.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/mips/filter_msa_intrinsics.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/mips/mips_init.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/powerpc/filter_vsx_intrinsics.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/powerpc/powerpc_init.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/scripts/intprefix.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/scripts/prefix.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/scripts/sym.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/scripts/symbols.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/scripts/vers.c
# LIBPNG_SOURCE_CXX += $(LIBPNG_PATH)/contrib/oss-fuzz/libpng_read_fuzzer.cc
# LIBPNG_OUTPUT_BC = $(LIBPNG_SOURCE_CXX:%.c=%.bc)

BIND_LIBPNG_SOURCE_D_TS = bind-libpng.d.ts
BIND_LIBPNG_SOURCE_CXX = bind-libpng.cpp
BIND_LIBPNG_OUTPUT_BC = bind-libpng.bc
BIND_LIBPNG_OUTPUT_JS = bind-libpng.js

# debug flags
# FLAGS += -g4
# FLAGS += -O0
# FLAGS += --source-map-base http://127.0.0.1:8080/
# FLAGS += -s ASSERTIONS=1
# FLAGS += -s DEMANGLE_SUPPORT=1
# FLAGS += -s SAFE_HEAP=1

FLAGS += -Os
FLAGS += -s NO_FILESYSTEM=1
# FLAGS += -s WASM=1
FLAGS += -s MODULARIZE=1
# FLAGS += -s EXPORT_NAME=\"NVG\"
FLAGS += -s EXPORT_BINDINGS=1
# FLAGS += -s EXPORT_ALL=1
# FLAGS += -s MEM_INIT_METHOD=0
# FLAGS += --memory-init-file 0
FLAGS += -s SINGLE_FILE=1
# FLAGS += -s BINARYEN_ASYNC_COMPILATION=0
# FLAGS += -s BINARYEN_METHOD=\"native-wasm,asmjs\"
# FLAGS += -s BINARYEN_METHOD=\"interpret-asm2wasm,asmjs\"
# FLAGS += -s TOTAL_MEMORY=4194304
# FLAGS += -s ALLOW_MEMORY_GROWTH=1
# FLAGS += -DHAVE_CONFIG_H
# FLAGS += -I $(LIBPNG_PATH)/include
FLAGS += -s USE_LIBPNG=1

build-bind-libpng: bind-libpng.js

clean-bind-libpng:
	rm -f $(LIBPNG_OUTPUT_BC)
	rm -f $(BIND_LIBPNG_OUTPUT_BC)
	rm -f bind-libpng.js bind-libpng.js.*
	rm -f bind-libpng.wasm bind-libpng.wasm.*

%.bc: %.c $(LIBPNG_SOURCE_HXX)
	emcc $(FLAGS) -c $< -o $@

%.bc: %.cpp $(LIBPNG_SOURCE_HXX)
	emcc $(FLAGS) -c $< -o $@

bind-libpng.bc: bind-libpng.cpp # $(LIBPNG_SOURCE_HXX)
	emcc $(FLAGS) --bind -c $< -o $@

bind-libpng.js: $(BIND_LIBPNG_OUTPUT_BC) # $(LIBPNG_OUTPUT_BC)
	emcc $(FLAGS) --bind $^ -o $@

# libpng

build-libpng:
	npm run build-libpng

clean-libpng:
	npm run clean-libpng

# example

build-example:
	npm run build-example

clean-example:
	npm run clean-example

start-example: start-example-node

start-example-node:
	npm run start-example-node

start-example-html:
	npm run start-example-html
