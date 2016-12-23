sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.view.App", {
      onInit : function () {
    	  var oView = this.getView();
    	  var oModel =	new JSONModel();
    	  oModel.loadData("./list.json","",false);
    	  oView.setModel(oModel, "data");
       
    	  // Привязываем данные к селекту From
    	  var oSelect = oView.byId("selectFrom");
    	  var oItemTemplate = new sap.ui.core.Item({ text:"{data>year}"});
    	  oSelect.bindItems("data>/listYearsLeft", oItemTemplate);
       
    	  // Привязываем данные к селекту To
    	  var oSelect = oView.byId("selectTo");
    	  var oItemTemplate = new sap.ui.core.Item({ text:"{data>year}"});
    	  oSelect.bindItems("data>/listYearsRight", oItemTemplate);
    	  
    	  
      },
      
      // Получение значения селекта From	 
      onChangeSelectFrom: function (oEvent){
    	  var oSelectFrom = oEvent.getSource();					// Получили тот селект, где было событие
    	  var oItemFrom	= oSelectFrom.getSelectedItem();		// Получили выбранный объект
    	  var oTextFrom	= oItemFrom.getText();					// Получиил выбранное значение 
      },
	
	  /*// Получение значения селекта To   	 
	  onChangeSelectTo: function (oEvent){
		  var oSelectTo = oEvent.getSource();					// Получили тот селект, где было событие
		  var oItemTo	= oSelectTo.getSelectedItem();			// Получили выбранный объект
		  var oTextTo	= oItemTo.getText();					// Получиил выбранное значение
		  this._comparisonValue();
	  },*/
		   
	  
	
	/*// Сравнение двух значений
	_comparisonValue : function(){
		
			alert("fff");
	
	},
	*/
	
	  
	
   });
});