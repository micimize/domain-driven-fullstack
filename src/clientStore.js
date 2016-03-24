import { extend, depends, provides, implementable } from 'strictduck'
import { Domains } from './Domain'
import buildDomainDriver from './buildDomainDriver'

let ClientStore = extend({
    name: 'ClientStore', 
    methods: ['getState', 'dispatch', 'subscribe', 'replaceReducer'],
})

export const DomainDrivenClientStore = extend({
    name: 'DomainDrivenClientStore', 
    parent: ClientStore, 
    methods: [/*'generateMiddleware'*/]
})

const implementDependent = implementable(
    depends,
    {
        parent: DomainDrivenClientStore,
        dependencies: [Domains]
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

export default DomainDrivenClientStore
