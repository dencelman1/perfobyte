
// REPLACEMENTS:

// ALLOC:

/*

let:
    - number;
    - link (buffer, function)
    - arrays; // arrays always typed

    - buffer's subarray // link to part of buffer

var:
    - buffer (from number, arrays, buffer)
    - function (all buffers inside it) (variable of function = link)

*/

// GPR - for operations (hot data);

// [!!!!] SUBREGISTERS of GPR;

// GPR = 8b / 1 cycle (rax);
// SIMD:
//     SSE = 16b / 1 (xmm);
//     AVX = 32b / 1-2 (ymm);
//     AVX-512 = 32b / 1-2 (zmm); for hot storaging;

// cr0-4, xcr0 - for settings of Architecture;


// (arab, hex) numbers, Buffer (cache line, block), function, Array (for assembling (on compiler lever));


// [!!!!!!!!] LANGUAGE HAS ONLY 1 PROCESSOR-LEVEL TYPE = BLOCK (CACHE LINE) (Buffer);

// RULES:
// a % 8 = 0;
// a % 16 = 0;
// cache_line = Buffer = 64 bytes;
// SEQUENTIAL memory access, NOT RANDOM;

// let - links;
// var - allocations;


let
    i = 0,
    j = 0xFFFF,

    ARRAY = Array(64, 0), // Array(length, value)
    ARRAY_2 = [0,0,0,0,0],
    
    ARRAY_3 = "abcdefg", // only utf-8 yet

    // Buffer.property, Buffer.property = read-only;
    ARRAY_SIZE = Buffer.size // 64, 32 replacement
;

var
    f = 0, // uint8 ( Buffer )
    d = 0xFFFF, // hex value ( uint8 - uint128 )

    size_b = Buffer.size, // uint to cache line;
    
    b = Buffer(),  // with trash data
    c = Buffer(ARRAY_3), // fill each byte = 0 (extra operation)
    
    source = Buffer(ARRAY_2), // 64 but first 5 is zero

    target = c, // copy

    v = () => 0,
    func_copy = v // another_copied_function
;

// links:
let
    copy_v = v,
    target2 = c,

    load = Buffer.load,
    push = Buffer.push,

    source_copy = source.copy,

    updates = [ b, target ] // Array
;

b[0] = 1 // updates 2 bytes in RAM;

load([ c, b, source, target ]);

// then updates in CPU:

// b[index: (only uint8)] -> uint8;
// b[index] = uint8;

b[ f ] = 1; // return what is after "=" (uint8)
b[1] = f;
b[2] = c[2];

// b = uint8; (write number to register); (uint8 from (hex,arab) to hex)
// b = another_block (copy full block from another_block);

// source.copy(target) - particular copy from source to target;
// array.fill( value, from, to )

b = 10; // return b;

b = c;
source_copy(target, targetStart, sourceStart, sourceEnd);

b.fill(0,  0, 10);


[
    1,2,3,4,5,6
]
.includes(degree) = 1;

source.subarray(index, degree); // subarray

push( updates );


// from RAM here because 

console.log(f); // as number (uint512);
console.dir(b); // as bytes (array of uint8);
