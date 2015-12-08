$(function() {
	//important set up for import Parse
	Parse.$ = jQuery;
	Parse.initialize("dhymIKr5ubNifHO8nnNOLiA2IQe1I9qIuq7Tv9FL", "hzMjPDXhaJ91HE0xbUDt0opgqiTt9FodPe1eZUgl");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();

	testObject.save(
	{
		foo:"bar"
	}).then(function(Object) {
		alert("Welcome to Billbo!!");
	}
	);


	$('.form-log').on('submit',function(login) {
		
		login.preventDefault();

		var data = $(this).serializeArray();
		username = data[0].value;
		password = data[1].value;

		Parse.User.logIn(username, password, {
			success: function(user) {
				alert('Hello! It is a great time to manage your account!');
				//do something if user logged in correctly
				//var query = new Parse.Query("Instachecks");

				window.location = "index2.html";
			},

			error: function(object, error) {
				alert('Oops! Something goes wrong. Please check your user name or password again!');
			}
		});

	});
	
});