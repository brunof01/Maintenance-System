console.log("Deu boa");

const systemName = "Sistema de Controle de Manutanção";

let activeEquipments = 48;
let maintenanceEquipmens = 5;
let preventiveMaintenance = 10;

console.log("Nome do sistema: " + systemName);
console.info("Em manutenção: " + maintenanceEquipmens);

const equipments = [
    {
        id: 1,
        name: "Compressor",
        local: "Algum lugar",
        status: true,
        patrimony: "12-PP"
    },
    {
        id: 2,
        name: "Torno",
        local: "Algum lugar",
        status: true,
        patrimony: "1-PP"
    },
    {
        id: 3,
        name: "Gerador",
        local: "Algum lugar diferente",
        status: false,
        patrimony: "12-PP"
    },
];

//for (let i = 0; i < equipments.length; i++){
//    console.log(equipments[i]);
//}

console.table(equipments);

const activeTotal = document.querySelector("#activesTotal");
console.log("activeTotal: " + activeTotal.textContent);
activeTotal.textContent = 50;