import StrictDuck, { extend, implement, utils } from 'strictduck'
import { typedMap, resolve } from 'strictduck-control-inverted'

const DomainType = extend({
    name: 'Domain', 
    methods: ['withPrefix', 'withoutPrefix', 'register', 'get']
})

class Domain {

    constructor({name="", ...subdomains}) {
        this.prefix = name
        Object.keys(subdomains).forEach(
            subName => this.registerSubdomain({name: subName, domain: subdomains[subName]})
        )
    }

    withPrefix(name) {
        return (this.prefix == "" ? "" : this.prefix + "/") + name
    }

    withoutPrefix(name) {
        return name.replace(new RegExp(`^${this.prefix}\/`),'')
    }

    register(type, name, value) {
        this[type] = this[type] || {}
        this[type][name] = value
    }

    registerSubdomain({name, domain}) {
        if(typeof(domain) == 'object' && !Array.isArray(domain)) {
            Object.keys(domain).forEach(
                key => this.register(name, key, domain[key])
            )
        } else {
            this[name] = domain
        }
    }

    get(type) {
        return this[type] || {}
    }
}

export default Domain
export const implementation = implement({strictduck: DomainType, withClass: Domain})

export const Domains = typedMap({name: 'Domains', strictduck: implementation})
