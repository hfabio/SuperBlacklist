# SuperBlacklist

A simple library to create a HTML input blacklist

This library was built in JavaScript and is used to clear from the input target the words in blacklist

## Getting Started
First of all you need to fork this repository (or download a release .js file).

```
    git clone https://github.com/hfabio/SuperBlacklist.git
```
Then you just need to put the lib in your js folder and import in your HTML file

```
    <script src="./js/SuperInputBlackList.min.js"></script>
```
Afterall you have to just initializate the lib, in your HTML just call the initialize function:
```
    <script>
        SuperInput.initialize();
    </script>
```
Ok, now your lib is initialized, you can configure your inputs a individual blacklist each.
To do it you have to add the HTML attribute SuperInput-blacklist and pass the characters/words with the default separator (][).
Then you will get something like this:
```
    <input  SuperInput-blacklist="foo][bar" type="text">
```
Note:. You don't need to use the separator at the end of the blacklist, but will work fine if you do.

Don't like the default separator? you can change the separator inserting a SuperInput-sep HTML attribute, like this:
```
    <input  SuperInput-blacklist="foo*#*bar" SuperInput-sep="*#*" type="text">
```
Note:. Of course you'll need to change the separator on black-list declaration

### Limitations
We developed using the HTML onkeyup attribute, so you will lose this attribute for another purposes

## Authors
#### We are SuperNova team
 [<img src="https://avatars1.githubusercontent.com/u/15989467?s=180&v=4"><br><sub>@hfabio</sub>](https://github.com/hfabio) | [<img src="https://avatars0.githubusercontent.com/u/1203362?s=180&v=4"><br><sub>@irahe</sub>](https://github.com/Irahe) |
 | :---: | :---: |
* **Helton Fábio** - *Built this project, in code and example* - [Helton Fábio](https://github.com/hfabio/)
* **José Irahe** - *Built this project, in code and example* - [José Irahe](https://github.com/Irahe)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
