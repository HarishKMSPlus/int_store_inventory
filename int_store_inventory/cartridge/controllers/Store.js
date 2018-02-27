/**
 * Description of the Controller and the logic it provides
 *
 * @module  controllers/Store
 */
importPackage( dw.system );
importPackage( dw.object );
importPackage( dw.net );

exports.Start = function(){
	response.getWriter().println("hello");
	var customURL= dw.system.Site.getCurrent().getCustomPreferenceValue('customURL');
	response.getWriter().println("customURL : " +"   "+ customURL);

	var httpClient : HTTPClient = new HTTPClient();
	httpClient.open( "GET",customURL);
	httpClient.send();
	response.getWriter().println("statusCode : " +"   "+ httpClient.statusCode);

	if (httpClient.statusCode == 200) {

		var message = httpClient.text; 
		response.getWriter().println("message : " +"   "+ message);
	
	}else {
		response.getWriter().println("message : " +"   "+ "Something went Wrong..");
	}
};
exports.Start.public = true; 