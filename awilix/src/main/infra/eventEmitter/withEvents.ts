import { withEvents } from "@adapters/metrics/withEvents";
import { EventEmitter2, Listener } from 'eventemitter2';

const eventEmitter = new EventEmitter2({
    wildcard: true,
    delimiter: '.', 
});


export const WithEvents = <T>() => {
    return (eventName: string, func: Function): withEvents<T> => {
        return (...args: any): T => {
            const startTime = new Date();

            const result = func.apply(null, args);

            const endTime = new Date();

            Promise.resolve(result).then(() => {
                const duration = endTime.getTime() - startTime.getTime();
                console.log('emito', eventName)
                eventEmitter.emit(eventName, duration);
            });

            return result;
        }
    };
};

export const getEventEmitter = () => eventEmitter;


eventEmitter.on('us-locallayer.*', function(value1, value2) {
    console.log((eventEmitter as any).event, "evenrto", value1, value2);
  })