# SuperBlacklist
## Index
 * [1 - Getting started](#getting-started)
 * [2 - Limitations](#limitations)
 * [3 - Updates](#updates)
   * [3.1 - Update 07/21/2019](#07212019)
 * [Authors](#authors)
 * [License](#license)

A simple library to create a HTML input blacklist

This library was built in JavaScript and is used to clear from the input target the words in blacklist

## Getting Started
First of all you need to clone this repository (or [download a release .js file](https://github.com/hfabio/SuperBlacklist/releases/download/v0.0.0.0.0.2/SuperBlacklist.rar)).

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
If you know any limitation, please create a issue, we'll be very happy to help!

~~We developed using the HTML onkeyup attribute, so you will lose this attribute for another purposes~~

## Updates

### 07/21/2019
Now you can add an OnKeyUp event using lib's attribute called SuperInput-onkeyup, so you can pass parameters, the element reference (this or this.value) and also the event itself (event for key events like enter or escape) just like this:
```
    <input SuperInput-onkeyup="myCustomKeyUpFunction(this.value, 'xyz', event)" id="input3" SuperInput-blacklist="a][b][x][test][dq][*dq*" type="text">
```
It will be executed after the blacklist cleanup like a callback function.

## Authors
#### We are SuperNova team
 [<img src="https://avatars1.githubusercontent.com/u/15989467?s=180&v=4"><br><sub>@hfabio</sub>](https://github.com/hfabio) | [<img src="https://avatars0.githubusercontent.com/u/1203362?s=180&v=4"><br><sub>@irahe</sub>](https://github.com/Irahe) |
 | :---: | :---: |
* **Helton Fábio** - *Built this project, in code and example* - [Helton Fábio](https://github.com/hfabio/)
* **José Irahe** - *Built this project, in code and example* - [José Irahe](https://github.com/Irahe)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
