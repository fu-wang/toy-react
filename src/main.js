/*
 * @Descripttion: 
 * @Author: wangfu
 * @Date: 2020-09-07 10:16:36
 */
import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component  {

    constructor() {
        super();
        this.state = {
            a: '1'
        }
    }

    render() {
        return (
            <div>
               <button onclick={() => {this.setState({a: this.state.a + 1})}}>add</button>
               <p>{this.state.a.toString()}</p>
            </div>
        )
    }
}

ToyReact.render(<MyComponent id="myComponent">
<span>abc</span>
<span></span>
<span></span>
</MyComponent>, document.body)