import { Component, h, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
    tag: "a-link",
    scoped: true,
    styleUrl: "style.css"
})
export class Link {
    @Prop() href: string
    @Event() redirected: EventEmitter
    render() {
        return (
            <a href={this.href} onClick={e => {
                e.preventDefault()
                window.history.pushState("", "", this.href)
                this.redirected.emit()
            }}><slot></slot></a>
        )
    }
}