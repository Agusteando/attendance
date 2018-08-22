$( document ).ready(function( $ ) {
 $("#form").submit(function(event){

                var $form = $(this);

                var $inputs = $form.find("input, select, button, textarea");

                var serializedData = $form.serialize();
				

                $('h1').text('Estamos enviando tu pase de lista...');
       
                request = $.ajax({
                        url: "https://script.google.com/macros/s/AKfycbzk1AhV8XyG3mvnZJAN4XCpQZiMVEDe8jv-H0Hr81iBJzdm73Zm/exec",
						type: "post",
                        data: serializedData
                });
        

                request.done(function (response, textStatus, jqXHR){
                        // log a message to the console
$('h1').html('¡Muchas gracias ya se envió tu registro¡</br> Es todo puedes cerrar la app.');
                });
        

                request.fail(function (jqXHR, textStatus, errorThrown){
                        // log the error to the console
                        console.error(
                                "The following error occured: "+
                                textStatus, errorThrown
                        );
                });
        


                request.always(function () {
                        // reenable the inputs

                });
        
                // prevent default posting of form
                event.preventDefault();
        });
});