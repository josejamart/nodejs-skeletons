import { withMetrics } from "@adapters/metrics/withMetrics";

interface WithMetricsProps {
    logger: any;
}

export const WithMetrics = <T>({ logger }: WithMetricsProps) => {
    return (texto: string, func: Function): withMetrics<T> => {
        return (...args: any):T => {
            const startTime = new Date();
            logger.debug(`Starting: ${texto}`, args);

            const result = func.apply(null, args);


            Promise.resolve(result).then(() => {
                const endTime = new Date();
                const duration = endTime.getTime() - startTime.getTime();
                logger.debug(`Ending: ${texto} ${duration}`);
            });

            return result;
        }
    };
};