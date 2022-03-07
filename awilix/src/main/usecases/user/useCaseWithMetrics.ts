import { withMetrics } from "@adapters/metrics/withMetrics";
import { UserRepository } from "@adapters/repositories/user-repository";
import { User } from "@domain/user";

export type useCaseRun = (entrada: string, salida: string) => Promise<User[]>;

interface UsersUseCaseProps {
    userRepository: UserRepository;
    withMetrics: withMetrics<useCaseRun>;
}

export type useCaseFactory = (props: UsersUseCaseProps) => useCaseRun;

export const useCase = ({ userRepository, withMetrics }: UsersUseCaseProps): useCaseRun => {
    const run = (entrada: string, salida: string) => {
        console.log("usecase", entrada, salida);
        return userRepository.findAll();
    };

    return withMetrics("us-locallayer", run);
};
