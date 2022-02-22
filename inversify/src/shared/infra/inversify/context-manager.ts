import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";


export const container = new Container();

const buidl = buildProviderModule();

container.load(buidl);
  
