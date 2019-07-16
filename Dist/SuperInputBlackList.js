var SuperInput = {
    instance: {},
    objects: [],
    separator: "",
    initialize: function (customSeparator = "][") {
        this.separator = customSeparator;
        this.objects = document.querySelectorAll('input[SuperInput-blacklist]');
        for (let object of this.objects) {
            object.setAttribute('onkeyup', "SuperInput.SuperCleanInput(this)");
        }
        console.log(`Super Input (Built by SuperNova team) successfully initialized in ${this.objects.length} elements.`);
    },
    SuperCleanInput: function (obj) {

        let rawBlacklist = obj.getAttribute("SuperInput-blacklist");
        let sep = this.separator;
        //replacing default separator to use a custom one
        if (obj.getAttribute("SuperInput-sep") !== null) {
            sep = obj.getAttribute("SuperInput-sep");
        }
        //create a blacklist array
        let BlackList = rawBlacklist.split(sep);
        //here we can just replace characters indicators which cannot be placed in HTML like double quotes (*dq* = ")
        if (BlackList.indexOf("*dq*") > -1) {
            BlackList[BlackList.indexOf("*dq*")] = '"';
        }
        //here is where the magic starts, all black characters or words in blacklist are replaced
        for (let blackedWord of BlackList) {
            obj.value = obj.value.split(blackedWord).join("");
        }
    }
}