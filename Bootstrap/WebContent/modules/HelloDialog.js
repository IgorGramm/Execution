sap.ui.define(["sap/ui/base/Object"],function(UI5Object){
	"use strict";
	return UI5Object.extend("webContent.modules.HelloDialog",{
		
		constructor : function(oView){
			this._oView = oView; 
		},
		
		open : function(){
			var oView = this._oView;
			var oDialog = oView.byId("helloDialog");
			var oData2Model = oView.getModel("Data2");
			
			if(!oDialog){
				var oFragmentController = {
						onCloseDialog : function(oEvent){
							oDialog.close();
						}
				};
				oDialog = sap.ui.xmlfragment(oView.getId(),"webContent.fragment.HelloDialog",oFragmentController);
				oDialog.setModel(oData2Model, "copmData");
				oView.addDependent(oDialog);
			}
			oDialog.open();
		}
	});
	
});