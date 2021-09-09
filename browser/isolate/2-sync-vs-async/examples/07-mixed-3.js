import { labeledLogger } from '/browser/lib/labeled-logger.js';
import { synchronousTimeout } from '/browser/lib/synchronous-timeout.js';

const log = labeledLogger();

log('+ schedule async 1000 ms');
setTimeout(log, 1000, '+ execute async  1000 ms');

log('- begin synchronous 500 ms');
synchronousTimeout(log, 500, '- end synchronous 500 ms');

log('+ schedule async 0 ms');
setTimeout(log, 0, '+ execute async  0 ms');

log('- begin synchronous 0 ms');
synchronousTimeout(log, 0, '- end synchronous 0 ms');

log('= = = =  the call stack is empty  = = = =');