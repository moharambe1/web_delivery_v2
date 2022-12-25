import { Formik, Form } from 'formik'; //FormikHelpers
import { AuthInputeSignUp } from '../../dom/services/auth/AuthInpute';
import { useStoreon } from '../hooks/useStoreon';
import Style from "./signInPage.module.scss";
import * as Yup from 'yup';
import { PInputeWidget } from '../compontes/PInputWidget';



interface Values extends AuthInputeSignUp {
  confirmPassword: string;
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('ليس بريد الكتروني').required('يجب ملئ الخانة'),

  phone: Yup.string().required('يجب ملئ الخانة'),
  password: Yup.string().required('يجب ملئ الخانة'),
  confirmPassword: Yup.string().required('يجب ملئ الخانة').oneOf([Yup.ref('password'), null], "كلمة السر غير متطابقة")

})


export const SingUpPage = () => {

  const { dispatch } = useStoreon('counter');


  return (<div className="primary_container">
    <h3 className="title"> انشـاء حسـاب</h3>

    <Formik validationSchema={SignupSchema} initialValues={{ email: "mmm@gmail.com", phone: "777", password: "123456", confirmPassword: "123456" }}
      onSubmit={(values: Values) => {
        dispatch('signup', values);
      }}>

      {({ errors, touched }) => (

        <Form className={Style.form}>

          <PInputeWidget
            label="البريد الالكتروني "
            name="email"
            type="email"
            placeholder="ادخل البريد الالكتروني"
          />

          <PInputeWidget
            label="رقـم الهـاتـف "
            name="phone"
            type="text"
            placeholder="ادخل رقـم الهـاتـف"
          />

          <PInputeWidget
            label="كلمة السـر"
            name="password"
            type="password"
            placeholder="ادخل كلمة السـر"
          />
          <PInputeWidget
            label="تاكيد كلمة السـر"
            name="confirmPassword"
            type="password"
            placeholder="اعـادة كلمة السـر"
          />



          <div className={Style.form_group}>
            <button className={Style.button} type="submit">تـسجيـل</button>
          </div>

          <div className={Style.form_group}>
            <p className="text">او</p>
            <button className={Style.button} onChange={() => { }}>تـسجيـل الدخـول</button>
          </div>

        </Form>
      )}
    </Formik>
  </div>)
}