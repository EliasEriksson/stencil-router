import { Component, h, Host } from "@stencil/core";

@Component({
    tag: "a-app",
})
export class App {
    render() {
        return (
            <Host>
                <a-router>
                    <a-route>
                        <a-foo bar="First"></a-foo>
                    </a-route>
                    <a-route>
                        <a-foo bar="Second"></a-foo>
                    </a-route>
                </a-router>
            </Host>
        )
    }
}