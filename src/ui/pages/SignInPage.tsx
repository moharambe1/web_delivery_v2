import { Formik, Form } from 'formik'; //FormikHelpers
import { PInputeWidget } from '../compontes/PInputWidget';
import { useStoreon } from '../hooks/useStoreon';
import Style from "./signInPage.module.scss";

interface Values {
  email: string;
  password: string;
}

export const SingInPage = () => {

  const { dispatch } = useStoreon('counter');

  return (<div className="primary_container">
    <h3 className="title"> تسجيل الدخول</h3>

    <Formik initialValues={{ email: "m@gmail.com", password: "123456" }}
      onSubmit={(values: Values) => {
        dispatch('signin', { email: values.email, password: values.password });
      }}>

      <Form className={Style.form}>
        <PInputeWidget
          label="البريد الالكتروني "
          name="email"
          type="email"
          placeholder="ادخل البريد الالكتروني"
        />

        <PInputeWidget
          label="كلمة السـر"
          name="password"
          type="password"
          placeholder="ادخل كلمة السـر"
        />


        <div className={Style.form_group}>
          <button className={Style.button} type="submit">دخـول</button>
        </div>

        <div className={Style.form_group}>
          <p className="text">او</p>
          <button className={Style.button} onChange={() => { }}>انشاء حساب</button>
        </div>

      </Form>

    </Formik>
  </div>)
}