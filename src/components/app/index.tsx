import { Component, h, Host } from "@stencil/core"
import { Route } from "../route"

@Component({
    tag: "a-app",
    scoped: true,
    styleUrl: "style.css"
})
export class App {
    render() {
        return (
            <Host>
                <header>
                    <ul>
                        <li><a-link href="/">Home</a-link></li>
                        <li><a-link href="/foo">Foo</a-link></li>
                        <li><a-link href="/bar">Bar</a-link></li>
                    </ul>
                </header>
                <main>
                    <a-router>
                        <Route path="/">
                            <h1>Home</h1>
                        </Route>
                        <Route path="/foo">
                            <h1>foo</h1>
                        </Route>
                        <Route path="/bar">
                            <h1>bar</h1>
                        </Route>
                    </a-router>
                    <a-router>
                        <Route path="/">
                            <h2>home</h2>
                        </Route>
                    </a-router>
                </main>
                <footer>

                </footer>
            </Host>
        )
    }
}