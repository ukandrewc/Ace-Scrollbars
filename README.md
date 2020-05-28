# Ace Editor Scrollbars
CSS Scrollbars for [Ace Editor](https://github.com/ajaxorg/ace)

Simple to use CSS styled scrollbars:

Just link to two files then initialise the scrollbars after initialising Ace.

    <link rel="stylesheet" type="text/css" href="ext-scrollbar.min.css">
    <script src="ext-scrollbar.min.js"></script>

    <script>
    // Ace initialisation
    var editor = ace.edit("editor")
    // Create new scrollbars
    new AceScrollbars(editor)
    ...
    </script>
### Added search/occurance map

<img src="./screenshot.png">
