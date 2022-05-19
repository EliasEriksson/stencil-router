import { Component, h, Listen} from "@stencil/core"

@Component({
    tag: "a-router",
})
export class Router {
    @Listen("redirected")
    async handleRedirected() {

    }
    render () {
        return <slot></slot>
    }
}