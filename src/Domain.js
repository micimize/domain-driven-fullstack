import StrictDuck, { typedMap, extend, implement, resolve } from 'strictduck'

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
        Object.keys(domain).forEach(
            key => this.register(name, key, domain[key])
        )
    }

    get(type) {
        return this[type] || {}
    }
}

export default Domain
export const implementation = implement({strictduck: DomainType, withClass: Domain})

export const Domains = typedMap({name: 'Domains', strictduck: Domain})
