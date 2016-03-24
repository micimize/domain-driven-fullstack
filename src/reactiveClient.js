import { extend, depends, implementable, provides } from 'strictduck'
import { DomainDrivenClient } from './client'
import Store from './clientStore'
import { Domains } from './Domain'

const implementDependent = implementable(
    depends,
    {
        name: 'DomainDrivenReactiveClient',
        parent: DomainDrivenClient,
        dependencies: [Domains, Store]
    }
)

export function implement({parent, constructor, ...args}){
    return provides(
        {
            parent: implementDependent({constructor}),
            ...args
        }
    )
}

