var SuperInput = {
    instance: {},
    objects: [],
    separator: "",
    initialize: function(customSeparator = "][") {
        this.separator = customSeparator;
        this.objects = document.querySelectorAll('input[SuperInput-blacklist]');
        for (let object of this.objects) {
            if (object.getAttribute('SuperInput-onkeyup') === null) {
                object.setAttribute('onkeyup', "SuperInput.SuperCleanInput(this)");
            } else {
                object.setAttribute('onkeyup', "SuperInput.SuperCleanInputWithCallback(this)");
            }
        }
        console.log(`Super Input (Built by SuperNova team) successfully initialized in ${this.objects.length} elements.`);
    },
    SuperCleanInput: function(obj) {

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
    },

    SuperCleanInputWithCallback: function(obj) {

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
        let callback = obj.getAttribute('SuperInput-onkeyup')
        if (obj.getAttribute('SuperInput-onkeyup').includes('this.')) {
            let attribute = obj.getAttribute('SuperInput-onkeyup').split('this.')[1];

            attribute = attribute.split(')').join('').split(',')[0];
            //console.log(attribute);
            callback = obj.getAttribute('SuperInput-onkeyup').split('this.' + attribute).join('"' + obj[attribute] + '"');
            //console.log(callback);
        }


        return eval(callback);
    }


}