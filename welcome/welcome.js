// $(document).ready(function () {


var addButton = document.getElementById("addWordsBulk");
var lessonDropdown = document.getElementById("lessonDropdown")

// addButton.addEventListener("click", function () {
//     window.open("../add-csv/manage-words.html");
// });

addButton.addEventListener("click", function () {
    window.open("../add-csv/manage-words.html", "_self");
});

document.addEventListener('DOMContentLoaded', function () {
    $('#lessonDropdown').select2({
        tags: true,
        createTag: function (params) {
            return {
                id: params.term,
                text: params.term,
                isNew: true
            };
        },
        placeholder: "Select an option or type your own",
        allowClear: true
    });
});


// })