import { Composit, resolve } from 'strictduck-control-inverted'
import { DomainDrivenClient as Client } from './client'
import { DomainDrivenServer as Server } from './server'
import Persister from './domainDrivenStorePersistencePlugin'
import { Domains } from './Domain'

export default class Fullstack extends Composit {
    constructor({ domains: domainsObj, server, client, persister, context = 'NODE' }){

        if(!resolve.satisfies({ provider: persister, dependency: Persister })){
            console.log(`Persister spec not satisfield by ${persister.name || persister.constructor.name}, dropping optional component from composition`)
            persister = undefined
        }

        let domains = new Domains(domainsObj);

        let satisfied = {
            domains: resolve.satisfies({ provider: domains, dependency: Domains }) && true,
            Server : resolve.satisfies({ provider:  server, dependency: Server  }) && true,
            Client : resolve.satisfies({ provider:  client, dependency: Client  }) && true
        } 

        if(!Object.keys(satisfied).filter(v => !satisfied[v]).length) {

            let main = ( context == 'NODE' ) ?
                { Class: Server, method: 'provide' } :
                { Class: Client, method: 'provide' }

            super(
                { main },
                {dependency: Domains, provider: domains},
                ...(persister ? [{dependency: Persister, provider: persister}] : []),
                {dependency: Server, provider: server},
                {dependency: Client, provider: client}
            )
        } else {
            throw TypeError(`Fullstack composition requirements not satisfield: \n ${JSON.stringify(satisfied)}`)
        }
    }
}
