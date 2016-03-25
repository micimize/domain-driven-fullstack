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

export default DomainDrivenStorePersistencePlugin = extend({
    name: 'DomainDrivenStorePersistencePlugin', 
    parent: StorePersistencePlugin, 
    methods: ['middlewareGenerator', 'configure']
})
