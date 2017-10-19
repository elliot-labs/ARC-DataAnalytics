function DataUI() {
    
        document.getElementById("toolbarText").innerText = "ARC Data Analytics - Log In";
    
        this.gridForm = new Grid();
        this.gridForm.ID = "topGrid";
        this.gridForm.ColumnCount = 3;
        this.gridForm.ColumnSize = [4, 4, 4];
        this.gridForm.Create();
    
        this.gridButton = new Grid();
        this.gridButton.ID = "bottomGrid";
        this.gridButton.ColumnCount = 2;
        this.gridButton.ColumnSize = [6, 6];
        this.gridButton.Create();
    
        this.aGoodsModelSpinner = new SpinnerMenu();
        this.aGoodsModelSpinner.SpinnerTitle = "A Goods Model Number";
        this.aGoodsModelSpinner.ParentID = "topGrid-1";
        this.aGoodsModelSpinner.ComponentID = "aGoodsModelNumber";
        this.aGoodsModelSpinner.Create();

        this.serialNumberField = new TextField();
        this.serialNumberField.Label = "Unit S/N";
        this.serialNumberField.ParentID = "topGrid-2";
        this.serialNumberField.ID = "userName-Field";
        this.serialNumberField.SpellCheck = false;
        this.serialNumberField.Required = true;
        this.serialNumberField.OnInput = "";
        this.serialNumberField.Create();
    
        this.failCodeSpinner = new SpinnerMenu();
        this.failCodeSpinner.SpinnerTitle = "Fail Code";
        this.failCodeSpinner.ParentID = "topGrid-3";
        this.failCodeSpinner.ComponentID = "failCodeSpinner";
        this.failCodeSpinner.Create();

        this.repairActionSpinner = new SpinnerMenu();
        this.repairActionSpinner.SpinnerTitle = "Repair Action";
        this.repairActionSpinner.ParentID = "bottomGrid-1";
        this.repairActionSpinner.ComponentID = "repairActionSpinner";
        this.repairActionSpinner.Create();

        this.switch1 = new Switch();
        this.switch1.ParentID = "bottomGrid-2";
        this.switch1.SwitchID = "switch1";
        this.switch1.Label = "Power Cord";
        this.switch1.Create();

        this.switch2 = new Switch();
        this.switch2.ParentID = "bottomGrid-2";
        this.switch2.SwitchID = "switch2";
        this.switch2.Label = "Circuit Board";
        this.switch2.Create();

        this.switch3 = new Switch();
        this.switch3.ParentID = "bottomGrid-2";
        this.switch3.SwitchID = "switch3";
        this.switch3.Label = "Power Switch";
        this.switch3.Create();

        this.Remove = function() {
            this.uNameField.Remove();
            this.passField.Remove();
            this.loginButton.Remove();
            this.adminMenuItem.Remove();
            this.dataEntryMenuItem.Remove();
            this.gridForm.Remove();
            this.gridButton.Remove();
    
            document.getElementById("toolbarText").innerText = "ARC Data Analytics";
            
        }
    }