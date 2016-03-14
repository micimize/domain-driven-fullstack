import { extend, depends, implementable, provides } from 'strictduck'
import { Domains } from './Domain'

const Client = extend({
    name: 'Client', 
    methods: ['render'],
})

export const DomainDrivenClient = extend({
    name: 'DomainDrivenClient', 
    parent: Client, 
    methods: ['generateMiddleware']
})

const implementDependent = implementable(
    depends,
    {
        parent: DomainDrivenClient,
        dependencies: [Domains],
        constructor: ({Domains, client}) => client(Domains)
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

export default DomainDrivenClient
