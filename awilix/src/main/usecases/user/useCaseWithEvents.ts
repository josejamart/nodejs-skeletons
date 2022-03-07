import { UserRepository } from "@adapters/repositories/user-repository";
import { User } from "@domain/user";
import { withEvents } from "@adapters/metrics/withEvents";

export type useCaseWithEventRun = (entrada: string, salida: string) => Promise<User[]>;

interface UsersUseCaseProps {
    userRepository: UserRepository;
    withEvents: withEvents<useCaseWithEventRun>;
}

export const useCaseWithEvent = ({ userRepository, withEvents }: UsersUseCaseProps): useCaseWithEventRun => {
    const run = (entrada: string, salida: string) => {
        console.log("usecase", entrada, salida);
        return userRepository.findAll();
    };

    return withEvents("us-locallayer.userUseCase", run);
};