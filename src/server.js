import Duckface from 'Duckface/src/duckface'
import server from 'strictduck-server'

const Interface = new Duckface('DDServer', ['generateMiddleware']);

export default class DomainDrivenServer extends Server {
    constructor(server){
        super(server)
        Duckface.ensureImplements(this, Interface);
    }
}
