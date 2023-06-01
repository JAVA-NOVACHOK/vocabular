document.addEventListener('DOMContentLoaded', function () {
    $('#lessonDropdown').select2({
        tags: true,
        placeholder: "Select lesson or type your own",
        createTag: function (params) {
            return {
                id: params.term,
                text: params.term,
                isNew: true
            };
        },
        allowClear: true
    });
  });