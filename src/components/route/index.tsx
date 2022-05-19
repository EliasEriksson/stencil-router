import { Component, h } from "@stencil/core";

@Component({
    tag: "a-route"
})
export class Route {
    render() {
        return <slot></slot>
    }
}