CkEditorOptions = function (language) {
  return {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "todoList",
        "highlight",
        "fontColor",
        "horizontalLine",
        "|",
        "outdent",
        "indent",
        "|",
        "imageUpload",
        "imageInsert",
        "blockQuote",
        "insertTable",
        "undo",
        "redo",
      ],
    },
    language: language.slice(0, 2),
    image: {
      toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
  };
};
