(function() {
    const elementsWithChoicesJs = document.querySelectorAll('[data-choicesjs]');
    if (elementsWithChoicesJs.length >= 1) {
        import('choices.js').then(({ default: Choices }) => {
            elementsWithChoicesJs.forEach(function (element) {
                const options = element.dataset.choicesjs ? JSON.parse(element.dataset.choicesjs) : {};
                new Choices(element, options);
            });
        }).catch(error => 'An error occurred while loading the choices component');
    }
})();
