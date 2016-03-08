import { extend } from 'strictduck'

let ClientStore = extend({
    name: 'ClientStore', 
    methods: ['getState', 'dispatch', 'subscribe', 'replaceReducer'],
})

export default extend({
    name: 'DomainDrivenClientStore', 
    parent: 'ClientStore', 
    methods: ['generateMiddleware']
})

