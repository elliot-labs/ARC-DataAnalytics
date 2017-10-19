function AdminUI() {

    document.getElementById("toolbarText").innerText = "ARC Data Analytics - Admin";

    this.gridForm = new Grid();
    this.gridForm.ID = "formGrid";
    this.gridForm.ColumnCount = 4;
    this.gridForm.ColumnSize = [3,3,3,3];
    this.gridForm.Create();

    this.gridButton = new Grid();
    this.gridButton.ID = "buttonGrid";
    this.gridButton.ColumnCount = 4;
    this.gridButton.ColumnSize = [3,3,3,3];
    this.gridButton.Create();

    this.deleteTextField = new TextField();
    this.deleteTextField.Label = "Entry ID (see export left column)";
    this.deleteTextField.ParentID = "formGrid-2";
    this.deleteTextField.OnInput = "";
    this.deleteTextField.SpellCheck = false;
    this.deleteTextField.Create();

    this.collectionSelector = new SpinnerMenu();
    this.collectionSelector.SpinnerTitle = "Select the collection to export...";
    this.collectionSelector.ParentID = "formGrid-3"
    this.collectionSelector.Create();

    this.exportButton = new Button();
    this.exportButton.Text = "Export Selected Collection";
    this.exportButton.ParentID = "buttonGrid-3";
    this.exportButton.Create();

    this.deleteButton = new Button();
    this.deleteButton.Text = "Delete Specified Entry";
    this.deleteButton.ParentID = "buttonGrid-2";
    this.deleteButton.Create();

    this.Remove = function() {
        this.deleteTextField.Remove();
        this.collectionSelector.Remove();
        this.exportButton.Remove();
        this.deleteButton.Remove();
        this.gridForm.Remove();
        this.gridButton.Remove();

        document.getElementById("toolbarText").innerText = "ARC Data Analytics";   
    }
}