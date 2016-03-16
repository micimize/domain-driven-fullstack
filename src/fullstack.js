import { Composit, resolve } from 'strictduck'
import { DomainDrivenClient as Client } from './client'
import { DomainDrivenServer as Server } from './server'
import Domain from './Domain'

export default class Fullstack extends Composit {
    constructor({ domains, server, client }){
        let satisfied = {
            Domain: resolve.satisfies({ provider: domains, dependency: Domain }) && true,
            Server: resolve.satisfies({ provider: server,  dependency: Server }) && true,
            Client: resolve.satisfies({ provider: client,  dependency: Client }) && true
        } 
        if(!Object.keys(satisfied).filter(v => !satisfied[v]).length) {
            super( domains, server, client )
        } else {
            throw TypeError(`Fullstack composition requirements not satisfield: \n ${JSON.stringify(satisfied)}`)
        }
    }
}
