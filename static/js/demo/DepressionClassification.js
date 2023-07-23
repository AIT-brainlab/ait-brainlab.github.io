var container = document.getElementById('fb-render');
var original_output = null;
jQuery(function ($) {
    var formData = `[
{
"type": "file",
"required": false,
"label": "File Upload",
"className": "form-control",
"name": "file",
"access": false,
"subtype": "file",
"multiple": false
},
{
"type": "button",
"label": "Submit",
"subtype": "button",
"className": "btn btn-primary",
"name": "button",
"access": false,
"style": "default"
},
{
"type": "paragraph",
"subtype": "output",
"label": "The result is: ",
"access": false
}
]`
    var formRenderOpts = {
        container,
        formData,
        dataType: 'json'
    };
    var formInstance = $(container).formRender(formRenderOpts);
    const submit = document.getElementById("button");
    submit.addEventListener(
        "click",
        async () => {
            const thisForm = document.getElementById('fb-render');
            var formData = new FormData(thisForm);
            var input_file = document.querySelectorAll('input[type=file]')[0].files[0];
            formData.append("file", input_file, input_file.name);
            console.log(formData)
            const response = await fetch('http://api-fastapi.ubuntu.proxmox.home/predict/', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if (original_output == null) {
                        original_output = $("output").text()
                    }
                    $("output").text(original_output + result.predict)
                })
        },
        false
    );
});