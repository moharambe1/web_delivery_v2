import { Service } from "typedi";
import { server_url } from "../../../common/varible";
import axios from "axios";
import { Accounts } from "../../../models/accounts";

@Service()
export class SignInService {
  async SignIn(p_email: String, p_password: string) {
    try {
      const res = await axios.post(
        server_url + "auth/signin",
        {
          email: p_email,
          password: p_password,
        },
        { withCredentials: true }
      );
      const { id, role } = res.data;
      if (id !== undefined) {
        return new Accounts(id, role);
      }
      return undefined;
    } catch (err) {
      console.log(err);
    }
  }
}
