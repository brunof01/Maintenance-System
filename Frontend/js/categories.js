console.log("Carregou Categorias =) !!!");

const systemName = "Sistema de Controle de Manutenção";

console.log("Nome do sistema: " + systemName);

const categories = [
    {
        id: 1,
        name: "Elétrica",
        description: "Componentes e instalações elétricas"
    },
    {
        id: 2,
        name: "Mecânica",
        description: "Máquinas, motores e componentes mecânicos"
    },
    {
        id: 3,
        name: "Hidráulica",
        description: "Sistemas de bombas, tubulações e válvulas"
    },
    {
        id: 4,
        name: "Instrumentação",
        description: "Sensores, medidores e instrumentos de controle"
    }
];

console.table(categories);

const categoriesTable = document.querySelector("#categoriesTable");
const searchInput = document.getElementById("searchInput");
const btnNewCategory = document.getElementById("btnNewCategory");
const modalElement = document.getElementById("categoryModal");
const modal = new bootstrap.Modal(modalElement);

function categoriesTableRender(list) {
    categoriesTable.innerHTML = "";

    list.forEach(category => {
        const row = document.createElement("tr");

        row.innerHTML = `<td>${category.name}</td>
        <td>${category.description}</td>
        <td>
            <button class="btn btn-danger"
            onclick="categoryDelete(${category.id})"
            >Excluir</button>
        </td>`;

        categoriesTable.appendChild(row);
    });
}

categoriesTableRender(categories);

searchInput.addEventListener("input", function () {
    const term = searchInput.value.toLowerCase();

    const result = categories.filter(category =>
        category.name.toLowerCase().includes(term) ||
        category.description.toLowerCase().includes(term)
    );

    categoriesTableRender(result);
});

btnNewCategory.addEventListener("click", function(){
    modal.show();
});

const btnSave = document.getElementById("btnSaveCategory");
const categoryName = document.getElementById("categoryName");
const categoryDescription = document.getElementById("categoryDescription");

btnSave.addEventListener("click", function(){
    if (categoryName.value.trim() === "") {
        console.warn("Nome da categoria não informado");
        alert("Informe o nome da categoria.");
        return;
    }

    const newCategory = {
        id: categories.length + 1,
        name: categoryName.value.trim(),
        description: categoryDescription.value.trim()
    };

    categories.push(newCategory);
    categoriesTableRender(categories);

    modal.hide();
    categoryName.value = "";
    categoryDescription.value = "";
});

function categoryDelete(id){
    const index = categories.findIndex(
        category => category.id === id
    );

    if (index === -1) {
        console.error("Categoria não encontrada:", id);
        return;
    }

    categories.splice(index,1);
    categoriesTableRender(categories);

    console.log("Categoria removida",id);
}
