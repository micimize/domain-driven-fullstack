import { extend, depends, implementable, provides, typedMap } from 'strictduck'
import { Domains } from './Domain'
import DomainDrivenClient from './client'

const Server = extend({
    name: 'Server', 
    methods: ['use', 'listen'],
})

export const DomainDrivenServer = extend({
    name: 'DomainDrivenServer', 
    parent: Server, 
    methods: ['generateMiddleware']
})

const implementDependent = implementable(
    depends,
    {
        parent: DomainDrivenServer,
        dependencies: [Domains],
        constructor: ({Domains, server}) => server(Domains)
    }
)

export function implement({parent, constructor, provider, name, url, ...args}){
    return ( JAVASCRIPT.CONTEXT == 'NODE' ) ?
        provides(
            {
                parent: implementDependent({name: `${name}Dependent`, constructor}),
                dependencies: [DomainDrivenClient],
                name,
                provider,
                url,
                ...args
            }
        ) : {name, url}
}

export default DomainDrivenServer
