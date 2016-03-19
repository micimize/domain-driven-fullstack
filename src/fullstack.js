import { Composit, resolve } from 'strictduck'
import { DomainDrivenClient as Client } from './client'
import { DomainDrivenServer as Server } from './server'
import { Domains } from './Domain'

export default class Fullstack extends Composit {
    constructor({ domains: domainsObj, server, client }){
        let domains = new Domains(domainsObj);
        let satisfied = {
            domains: resolve.satisfies({ provider: domains, dependency: Domains }) && true,
            Server : resolve.satisfies({ provider:  server, dependency: Server  }) && true,
            Client : resolve.satisfies({ provider:  client, dependency: Client  }) && true
        } 
        if(!Object.keys(satisfied).filter(v => !satisfied[v]).length) {
            super({main: {Class: Server, method: 'provide'}},  domains, server, client )
        } else {
            throw TypeError(`Fullstack composition requirements not satisfield: \n ${JSON.stringify(satisfied)}`)
        }
    }
}
