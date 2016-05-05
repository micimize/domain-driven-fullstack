import { extend, implementable } from 'strictduck'
import { depends, provides } from 'strictduck-control-inverted'
import { Domains } from './Domain'

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
