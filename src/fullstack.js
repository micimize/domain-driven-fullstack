import { composit, implementable } from 'strictduck'
import { DomainDrivenClient as Client } from './client'
import { DomainDrivenServer as Server } from './server'
import { Domains } from './Domain'

export const implement = implementable(
    composit,
    {
        name: 'Fullstack',
        types: [ Domains, Server, Client ]
    }
)
