import { Service } from "typedi";
import { server_url } from "../../../common/varible";
import axios, { isAxiosError } from "axios";
import { AuthInputeSignUp } from "./AuthInpute";

@Service()
export class SignUpService {
  async SignUp(inpute: AuthInputeSignUp) {
    try {
      const res = await axios.post(
        server_url + "auth/signup",
        {
          email: inpute.email,
          password: inpute.password,
          phone: inpute.phone,
        },
        { withCredentials: true }
      );
      if (res.status < 400) return true;
      return false;
    } catch (err) {
      console.log(err);
    }
  }
}
