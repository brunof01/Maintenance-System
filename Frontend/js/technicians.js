const techniciansTable = document.getElementById("techniciansTable");

techniciansTable.addEventListener("click", function(event){
    const deleteButton = event.target.closest(".btnDeleteTechnician");

    if (!deleteButton) {
        return;
    }

    const technicianRow = deleteButton.closest("tr");
    technicianRow.remove();
});