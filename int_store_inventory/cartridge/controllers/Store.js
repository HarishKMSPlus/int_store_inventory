/**
 * Description of the Controller and the logic it provides
 * 
 * @module controllers/Store
 */

importPackage( dw.system );
importPackage( dw.object );
importPackage( dw.net );
importPackage( dw.util );
importPackage(dw.system);

exports.Start = function(){

	var customURL= dw.system.Site.getCurrent().getCustomPreferenceValue('customURL');

	var allCustomPreferences = dw.system.Site.getCurrent().getCustomPreferenceValue('intStoreInventoryEnabled'); 

	var userNamePreference  = dw.system.Site.getCurrent().getCustomPreferenceValue('userName'); 

	var customPass = dw.system.Site.getCurrent().getCustomPreferenceValue('password'); 

	response.getWriter().println("<h1></h1>");
	var httpClient : HTTPClient = new HTTPClient();
	httpClient.open( "GET",customURL);
	httpClient.send();
	// response.getWriter().println("statusCode : " +" "+ httpClient.statusCode);
	response.getWriter().println("<h1></h1>");
	if (httpClient.statusCode == 200) {
		var message = httpClient.text; 
	}else {
		message =  "Something went Wrong..";
	}
	var ISML = require('dw/template/ISML');
	ISML.renderTemplate(
			'storeDetails.isml', {
				customURL: customURL,  
				StoreInventoryEnabled : allCustomPreferences,
				userNamePreference : userNamePreference,  
				password : customPass,
				message : message
			}
	);	
};
exports.Start.public = true; 