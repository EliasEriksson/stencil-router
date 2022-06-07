import { Component, h, Host, Listen, State } from "@stencil/core"
import { router } from "./router"

@Component({
    tag: "a-router",
    scoped: true,
})
export class Router {
    @State() path: string
    @Listen("redirected", { target: "document"})
    redirectedHandler() {
        this.path = window.location.pathname
    }
    render(){
        return (
            <Host>
                { router.get(window.location.pathname) }
            </Host>
        )
    }
}

