import { extend, implementable } from 'strictduck'
import { depends, provides } from 'strictduck-control-inverted'
import { Domains } from './Domain'

const Client = extend({
    name: 'Client', 
    methods: [/*'render'*/],
})

export const DomainDrivenClient = extend({
    name: 'DomainDrivenClient', 
    parent: Client, 
    methods: [/*'generateMiddleware'*/]
})

const implementDependent = implementable(
    depends,
    {
        parent: DomainDrivenClient,
        dependencies: [Domains],
        constructor: ({Domains, client}) => client(Domains)
    }
)

export function implement({parent, name, ...args}){
    return provides(
        {
            parent: implementDependent(args),
            name,
            ...args
        }
    )
}

export default DomainDrivenClient
