import { extend, implementable } from 'strictduck'
import { depends, provides } from 'strictduck-control-inverted'
import { DomainDrivenClient } from './client'
import Store from './clientStore'
import { Domains } from './Domain'
import DomainDrivenStorePersistencePlugin from './domainDrivenStorePersistencePlugin'

const implementDependent = implementable(
    depends,
    {
        name: 'DomainDrivenReactiveClient',
        parent: DomainDrivenClient,
        dependencies: [Domains, Store, DomainDrivenStorePersistencePlugin]
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

