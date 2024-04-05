"use strict";
// let PC:{
//     ram: [number, string,RAM_Type],
//     gpu: [number, string],
//     ssd: [number, string],
//     extensions: [number, string[]]
// }
var RAM_Type;
(function (RAM_Type) {
    RAM_Type[RAM_Type["DDR3"] = 3] = "DDR3";
    RAM_Type[RAM_Type["DDR4"] = 4] = "DDR4";
    RAM_Type[RAM_Type["DDR5"] = 5] = "DDR5";
})(RAM_Type || (RAM_Type = {}));
const PC = {
    ram: [3, "8GB", RAM_Type.DDR5],
    gpu: [1, "RTX4040"],
    ssd: [2, "1T"],
    extensions: [4, ['Bluetooth', 'Sound card', 'USB port', 'WI-FI card']]
};
console.log("\nChanging RAM\n");
PC.ram[0] = 2;
PC.ram[1] = "16GB";
console.log(PC);
//# sourceMappingURL=TuplesAndEnum.js.map