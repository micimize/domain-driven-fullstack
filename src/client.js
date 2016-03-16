import { extend, depends, implementable, provides } from 'strictduck'
import { Domain } from './Domain'

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
        dependencies: [Domain],
        constructor: ({Domain, client}) => client(Domain)
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
