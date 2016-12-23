sap.ui.define(["sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel",
               "webContent/modules/HelloDialog"],function(UIComponent, JSONModel, HelloDialog){
	"use strict";
	var IgorComponent = UIComponent.extend("webContent.Component", {
		init:function(){
			// Запускаем страндартный метод инициализации от класса родителя применительно к нашему компоненту
			UIComponent.prototype.init.apply(this, arguments);	
			var oModel = new JSONModel ();
			var oModel2 = new JSONModel();
			var oData = {
					developerName: "Igor",
					dialogIconName: "accelerated"
			};
			var oView = this.getAggregation("rootControl");
			
			oModel2.setJSON(JSON.stringify(oData));
			oModel.setData(oData);
			
			// this это ссылка на прототип класса webContent.Component
			this.setModel(oModel,"copmData");
			this.setModel(oModel2,"Data2")
			//создаем новое свойство компонента, в которое кладем ссылку на уже созданный класс HelloDialog
			this._helloDialog = new HelloDialog(oView); 
		},
		
		metadata: {
			manifest: "json"
		},
		
		openReuseHelloDialog: function(){
			this._helloDialog.open();
		}
	});
	return IgorComponent;
});