import { extend, depends, implementable, provides, typedMap } from 'strictduck'
import { Domains } from './Domain'

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

export function implement({parent, constructor, provider, name, ...args}){
    return provides(
        {
            parent: implementDependent({name: `${name}Dependent`, constructor}),
            name,
            provider,
            ...args
        }
    )
}

export default DomainDrivenServer
