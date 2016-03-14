import { extend, depends, implementable, provides } from 'strictduck'

export const Domain = extend({
    name: 'Domain', 
    methods: ['withPrefix', 'withoutPrefix', 'register', 'get']
})

export const Domains = extend({
    name: 'Domains', 
    parent: 'Domain'
})
