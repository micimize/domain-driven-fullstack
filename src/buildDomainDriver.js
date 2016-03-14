import { extend } from 'strictduck'

export default function buildDomainDriver(parent){
    return extend({
        name: `${parent.name}DomainDriver`, 
        parent: parent, 
        methods: ['generateMiddleware']
    })
}
