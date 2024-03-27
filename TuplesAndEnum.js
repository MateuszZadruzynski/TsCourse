var PC;
PC = {
    ram: [3, "8GB"],
    gpu: [1, "RTX4040"],
    ssd: [2, "1T"],
    extensions: [4, ['Bluetooth', 'Sound card', 'USB port', 'WI-FI card']]
};
console.log(PC);
console.log("\nChanging RAM");
PC.ram[0] = 2;
PC.ram[1] = "16GB";
console.log("\n" + PC);
