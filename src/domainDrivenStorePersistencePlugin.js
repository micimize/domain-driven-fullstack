import { extend, depends, provides, implementable } from 'strictduck'
import { Domains } from './Domain'

let FullstackPlugin = extend({
    name: 'FullstackPlugin', 
    methods: [],
})

let StorePersistencePlugin = extend({
    name: 'StorePersistencePlugin', 
    parent: FullstackPlugin, 
    methods: [],
})

let DomainDrivenStorePersistencePlugin = extend({
    name: 'DomainDrivenStorePersistencePlugin', 
    parent: StorePersistencePlugin, 
    methods: [/*'middlewareGenerator', 'configure'*/]
})

let implementDependent = implementable(
    depends,
    {
        parent: DomainDrivenStorePersistencePlugin,
        dependencies: [Domains],
        constructor: ({Domains}) => _
    }
)

export function implement({parent, constructor, provider, name, ...args}){
    return provides({
        parent: implementDependent({name: `${name}Dependent`, constructor}),
        name,
        provider,
        ...args
    })
}

export default DomainDrivenStorePersistencePlugin
