function LogonUI() {

    document.getElementById("toolbarText").innerText = "ARC Data Analytics - Log In";

    this.gridForm = new Grid();
    this.gridForm.ID = "formGrid";
    this.gridForm.ColumnCount = 4;
    this.gridForm.ColumnSize = [3,3,3,3];
    this.gridForm.Create();

    this.gridButton = new Grid();
    this.gridButton.ID = "buttonGrid";
    this.gridButton.ColumnCount = 1;
    this.gridButton.ColumnSize = [12];
    this.gridButton.Create();

    this.uNameField = new TextField();
    this.uNameField.Label = "User Name";
    this.uNameField.ParentID = "formGrid-2";
    this.uNameField.ID = "userName-Field";
    this.uNameField.SpellCheck = false;
    this.uNameField.Required = true;
    this.uNameField.OnInput = "";
    this.uNameField.Create();

    this.passField = new TextField();
    this.passField.Label = "Password";
    this.passField.ParentID = "formGrid-3";
    this.passField.ID = "pass-Field";
    this.passField.SpellCheck = false;
    this.passField.Required = true;
    this.passField.OnInput = "";
    this.passField.Create();

    this.loginButton = new Button();
    this.loginButton.Text = "Log In";
    this.loginButton.ParentID = "buttonGrid-1";
    this.loginButton.Create();

    this.Remove = function() {
        this.uNameField.Remove();
        this.passField.Remove();
        this.grid.Remove();
    }
}