sap.ui.define(["sap/ui/core/mvc/Controller"],  									// Запросили библиотеки нужных классов
				function(Controller){ 											// Передаем нужные классы в функцию
	"use strict";
	var IgorController = Controller.extend("webContent.view.App",{				// Объявляем новую переменную и расширяем стандартный класс контролллера
		
		onPressDialog : function(oEvent){
			var oView = this.getView();
			var oDialog = sap.ui.xmlfragment("webContent.fragment.HelloDialog",this);
			//oDialog.attachAfterClose(null, this.onAfterCloseDialog, this);
			oView.addDependent(oDialog);
			oDialog.open();
		},
		onCloseDialog : function(oEvent){
			var oButton = oEvent.getSource();
			var oDialog = oButton.getParent();
			oDialog.close();
		},
		onAfterCloseDialog : function(oEvent){
			var oDialog = oEvent.getSource();
			oDialog.destroy();
		}
		
	});
	return IgorController;															// Возвращаем контроллер, расширенный пользовательсикими функциями
});