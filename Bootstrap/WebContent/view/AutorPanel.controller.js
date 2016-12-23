sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast"],  													// Запросили библиотеки нужных классов
				function(Controller, MessageToast){ 									// Передаем нужные классы в функцию
	"use strict";
	var IgorController = Controller.extend("webContent.view.AutorPanel",{				// Объявляем новую переменную и расширяем стандартный класс контролллера
		onInit:function(){
			var oView = this.getView();
		},
		
		/**
		 * @description Обработать событие нажатия на кнопку "Новая кнопка"
		 * @param {sap.ui.base.Event} - oEvent объект с данными о событии
		 * @param {sap.ui.base.EventProvider} - oEvent.getSource объект источник события
		 * @param {object} - oEvent.getParaments объект с параметрами события
		 * @returns{undefined}
		 */
		onPress:function(oEvent){
			var i18nModel = this.getView().getModel("i18n");
			var oDataModel = this.getView().getModel("copmData");
			var sAutorName = oDataModel.getProperty("/developerName");
			var oResBundle = i18nModel.getResourceBundle();
			var sText = oResBundle.getText("hello",[sAutorName]);
			
			
			MessageToast.show(sText);
		},
		
		/**
		 * @description Обработать событие нажатия на кнопку "Открыть Reuse диалог"
		 * @param {sap.ui.base.Event} - oEvent объект с данными о событии
		 * @param {sap.ui.base.EventProvider} - oEvent.getSource объект источник события
		 * @param {object} - oEvent.getParaments объект с параметрами события
		 * @returns{undefined}
		 */
		onOpenDialog : function (oEvent) {
			this.getOwnerComponent().openReuseHelloDialog();
		}
	});
	return IgorController;															// Возвращаем контроллер, расширенный пользовательсикими функциями
});