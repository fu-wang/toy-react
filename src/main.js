import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component  {
    render() {
        return (
            <div>
                <h1>MyComponent</h1>
               {this.children}
            </div>
        )
    }
}

ToyReact.render(<MyComponent id="myComponent">
    <span>abc</span>
    <span></span>
    <span></span>
</MyComponent>, document.body)