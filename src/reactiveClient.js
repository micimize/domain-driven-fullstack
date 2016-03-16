import { extend, depends, implementable, provides } from 'strictduck'
import { DomainDrivenClient } from './client'
import Store from './clientStore'
import Domain from './Domain'

const implementDependent = implementable(
    depends,
    {
        name: 'DomainDrivenReactiveClient',
        parent: DomainDrivenClient,
        dependencies: [Domain, Store]
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

