import { extend, depends, provides, implementable } from 'strictduck'
import { Domain } from './Domain'
import buildDomainDriver from './buildDomainDriver'

let ClientStore = extend({
    name: 'ClientStore', 
    methods: ['getState', 'dispatch', 'subscribe', 'replaceReducer'],
})

const ClientStoreDomainDriver = buildDomainDriver(ClientStore)

const implementDependent = implementable(
    depends,
    {
        parent: ClientStoreDomainDriver,
        dependencies: [Domain/*, Store, routes*/]
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

export default ClientStoreDomainDriver
