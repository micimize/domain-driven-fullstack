import { extend, depends, implementable, provides } from 'strictduck'

const Server = extend({
    name: 'Server', 
    methods: ['use', 'listen'],
})

const DomainDrivenServer = extend({
    name: 'DomainDrivenServer', 
    parent: Server, 
    methods: ['generateMiddleware']
})

const implementDependent = implementable(
    depends,
    {
        parent: DomainDrivenServer,
        dependencies: [Domains],
        constructor: ({Domains, server}) => server(Domains)
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

export default DomainDrivenServer
