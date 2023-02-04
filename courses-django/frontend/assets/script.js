$(document).ready(function(){
    $("form").submit(function(){
        var formData = {
            "student": {
                    "Sid": $('input[name=sid]').val(),
                    "FirstName": $('input[name=firstName]').val(),
                    "LastName": $('input[name=lastName]').val()
            }
        };
        var jsonData = JSON.stringify(formData);

        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8000/register/students/",
            data: jsonData,
            contentType: "application/json",
            dataType: "json",
            error: function(jqXhr, textStatus, errorThrown){
                console.log(errorThrown);
            },
            success: function(data, textStatus, jqXhr){
                console.log(data);
            }
        });
    });
});