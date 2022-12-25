import { StoreonModule } from "storeon";
import Container from "typedi";
import { Accounts } from "../../models/accounts";
import { AuthInputeSignUp } from "../services/auth/AuthInpute";
import { UiRepistory } from "./repistory";
import { redirect } from "react-router-dom";
import { RouteManger } from "../../common/varible";

export class AuthRepistory {}
export enum AuthStateEname {
  isNotSignin,
  isSigned,
}

export interface AuthState {
  authState?: AuthStateEname;
  account?: Accounts;
}

interface account {
  email: string;
  password: string;
}
export interface authEvents {
  saveAuth: AuthState;
  signup: AuthInputeSignUp;
  signin: account;
}

export const authModule: StoreonModule<AuthState, authEvents> = (store) => {
  store.on("signin", async (state, event) => {
    try {
      const instance = Container.get(UiRepistory);
      const res = await instance.signIn.SignIn(event.email, event.password);
      if (res !== undefined) {
        store.dispatch("saveAuth", {
          authState: AuthStateEname.isSigned,
          account: res,
        });
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
    }
  });

  store.on("signup", async (state, event) => {
    try {
      const instance = Container.get(UiRepistory);
      const res = await instance.signUp.SignUp(event);

      if (res) RouteManger.go("/signin");
    } catch (err) {
      console.log(err);
    }
  });

  store.on("saveAuth", (_, event) => {
    return { ...event };
  });

  store.on("@init", (state) => ({
    authState: AuthStateEname.isNotSignin,
  }));
};
