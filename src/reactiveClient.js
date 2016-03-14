import { extend, depends, implementable, provides } from 'strictduck'
import { DomainDrivenClient } from './client'
import { Domains } from './Domain'

const implementDependent = implementable(
    depends,
    {
        name: 'DomainDrivenReactiveClient',
        parent: DomainDrivenClient,
        dependencies: [Domains, Store, routes],
        constructor: ({Domains, Client, Store, routes}) => Client({Domains, Store, routes})
    }
)

export function implement({parent, ...args}){
    return provides(
        {
            parent: implementDependent({parent, ...args}),
            ...args
        }
    )
}

