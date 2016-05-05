import { extend, implementable } from 'strictduck'
import { depends, provides } from 'strictduck-control-inverted'
import { Domains } from './Domain'
import DomainDrivenClient from './client'
import DomainDrivenStorePersistencePlugin from './domainDrivenStorePersistencePlugin'

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
        dependencies: [Domains, DomainDrivenStorePersistencePlugin],
        constructor: ({Domains, server}) => server(Domains)
    }
)

export function implement({parent, constructor, provider, name, url, ...args}){
    return ( $ES.CONTEXT == 'NODE' ) ?
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
