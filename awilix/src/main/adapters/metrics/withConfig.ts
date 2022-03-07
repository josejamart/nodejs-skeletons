export interface Config{
    metrics?: Object;
};

export type withCoinfig<T> = (config: Config, func: Function) => T;