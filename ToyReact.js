export let ToyReact = {
    createElement(type, attributes, ...childrens) {
        console.log(arguments)
        debugger;
        return document.createElement(type)
    }
}