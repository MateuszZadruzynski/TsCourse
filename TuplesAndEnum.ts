// let PC:{
//     ram: [number, string,RAM_Type],
//     gpu: [number, string],
//     ssd: [number, string],
//     extensions: [number, string[]]
// }

enum RAM_Type {
    DDR3 = 3.0,
    DDR4 = 4.0,
    DDR5 = 5.0
}

 const PC = {
    ram: [3,"8GB",RAM_Type.DDR5],
    gpu: [1, "RTX4040"],
    ssd: [2, "1T"],
    extensions: [4, ['Bluetooth', 'Sound card', 'USB port', 'WI-FI card']]
}

console.log("\nChanging RAM\n");
PC.ram[0] = 2;
PC.ram[1] = "16GB";

console.log(PC);