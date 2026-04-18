//----Types OF PRIMITIVE AND NON-PRIMITIVE TYPES


typeof "hello"      // "string"
typeof 10           // "number"
typeof 10n          // "bigint"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof Symbol("x")  // "symbol"
typeof null         // "object"  // historical bug


typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"
typeof new Date()    // "object"
typeof /abc/         // "object"
typeof new Map()     // "object"
typeof new Set()     // "object"
