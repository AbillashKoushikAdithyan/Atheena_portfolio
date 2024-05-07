function copyContent(iconId, contentId) {
    var icon = document.getElementById(iconId);
    var content = document.getElementById(contentId);
    icon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        var contentText = content.innerText;
        navigator.clipboard.writeText(contentText); // Copy the content to clipboard
    });
}

copyContent('emailIcon', 'emailAddress');
copyContent('telephoneIcon', 'number');
