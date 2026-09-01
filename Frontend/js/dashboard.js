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
        status: "active",
        patrimony: "12-PP"
    },
    {
        id: 2,
        name: "Torno",
        local: "Algum lugar",
        status: "active",
        patrimony: "1-PP"
    },
    {
        id: 3,
        name: "Gerador",
        local: "Algum lugar diferente",
        status: "maintenance",
        patrimony: "12-PP"
    },
];

//for (let i = 0; i < equipments.length; i++){
//    console.log(equipments[i]);
//}

console.table(equipments);

const activeTotal = document.querySelector("#activesTotal");
const maintenanceEquipmentsTotal = document.querySelector("#maintenanceEquipmentsTotal");

console.log("activeTotal: " + activeTotal.textContent);
//activeTotal.textContent = 50;

console.log(5 == "5");
console.log(5 === "5");

function dashboardRefresh(){
    const actives = equipments.filter(
        equipment => equipment.status === "active"
    ).length;
    const inMaintenance = equipments.filter(
        equipment => equipment.status === "maintenance"
    ).length;

    activeTotal.textContent = actives;
    maintenanceEquipmentsTotal.textContent = inMaintenance;
    console.log("Dashboard atualizado");
}

dashboardRefresh();