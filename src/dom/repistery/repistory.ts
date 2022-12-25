import { SignInService } from "../services/auth/SignInService";
import { createStoreon, StoreonModule } from "storeon";
import { Service, Inject } from "typedi";
import { authModule, authEvents, AuthState } from "./AuthRepistory";
import { SignUpService } from "../services/auth/SignUpService";

@Service()
export class UiRepistory {
  @Inject(() => SignInService)
  signIn!: SignInService;
  @Inject(() => SignUpService)
  signUp!: SignUpService;
}

// State structure
interface State extends AuthState {
  counter: number;
  routeMange: (string) => void;
}

// Events declaration: map of event names to type of event data
interface Events extends authEvents {
  // `inc` event which do not goes with any data
  inc: undefined;
  routeManger: (string) => void;
  changeRoute: string;

  // `set` event which goes with number as data
  set: number;
}

const counterModule: StoreonModule<State, Events> = (store) => {
  store.on("inc", (state) => {
    store.dispatch("changeRoute", "/");
  });

  store.on("@init", (state) => ({ counter: 0 }));
  store.on("set", (state, event) => ({ counter: event }));
  store.on("@changed", (state) => console.log(state));

  store.on("routeManger", (_, event) => ({ routeMange: event }));
  store.on("changeRoute", (state, event) => state.routeMange(event));
};

export const Repistory = createStoreon<State, Events>([
  counterModule,
  authModule,
]);
