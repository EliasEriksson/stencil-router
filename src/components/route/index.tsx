import { Component, FunctionalComponent, h, Prop, VNode } from "@stencil/core";
import { router } from "../router/router"


export const Route: FunctionalComponent<{path: string}> = (props, children) => {
    router.add(props.path, children)
    return null as any as VNode[] 
}

@Component({
    tag: "a-route",
    scoped: true,
    styleUrl: "style.css"
})
export class R {
    @Prop() path: string
    render() { return null}
}