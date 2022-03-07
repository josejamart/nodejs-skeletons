import { UserRepository } from "@adapters/repositories/user-repository";
import { User } from "@domain/user";
import { withCoinfig } from "@adapters/metrics/withConfig";

export type useCaseRun = (entrada: string, salida: string) => Promise<User[]>;

interface UsersUseCaseProps {
    userRepository: UserRepository;
    withConfig: withCoinfig<useCaseRun>;
}

export const useCaseWithEvent = ({ userRepository, withConfig }: UsersUseCaseProps): useCaseRun => {
    const run = (entrada: string, salida: string) => {
        console.log("usecase", entrada, salida);
        return userRepository.findAll();
    };

    return withConfig({
        metrics: "lkasjdfñlksdjf"
    }, run);
};