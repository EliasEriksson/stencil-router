import { Component, h, Prop } from "@stencil/core";

export function redirect(url: string) {
    return
}

@Component({
    tag: "a-foo",
})
export class Foo {
    @Prop() bar: string
    render() {
        return <h1>{this.bar}</h1>
    }
}