import { h, VNode } from "@stencil/core"

class Router {
    constructor(
        private routes: Record<string, VNode[]> = {}
    ){}

    add(path: string, jsx: VNode[]) {
        this.routes[path] = jsx
    }

    get(path: string) {
        if (Object.keys(this.routes).includes(path)) {
            return this.routes[path]
        } else {
            return <h1>404</h1>
        }
    }

    paths() {
        return Object.keys(this.routes)
    }
}

export const router = new Router()
