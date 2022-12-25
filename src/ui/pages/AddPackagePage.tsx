import { Formik, Form } from "formik"; // <== this correct import

import { PInputeWidget } from "../compontes/PInputWidget";
import * as Yup from 'yup';

import Style from "./addPackagePage.module.scss";

interface Values {
  sender_name: string;
  sender_phone: string;
  sender_addrass?: string;
  reciver_name?: string;
  reciver_phone: string;
  reciver_addrass?: string;
}

const SignupSchema = Yup.object().shape({


})


export const AddPackagePage = () => {
  return (<div className="primary_container">
    <h3 className="title"> اضافة طـرد</h3>

    <Formik validationSchema={SignupSchema} initialValues={{ sender_name: "", sender_phone: "", reciver_phone: "", }}
      onSubmit={(values: Values) => {

      }}>

      {({ errors, touched }) => (

        <Form >
          <PInputeWidget
            label="اسـم المرسل"
            name="sender_name"
            type="text"
            placeholder="ادخل اسـم المرسل"
          />
          <PInputeWidget
            label="هاتـف المرسل"
            name="sender_phone"
            type="text"
            placeholder="ادخل هاتـف المرسل"
          />
          <PInputeWidget
            label="عنـوان المرسل"
            name="sender_addrass"
            type="text"
            placeholder="اخـتيـاري"
          />

          <div className=""></div>

          <PInputeWidget
            label="اسـم المستلم"
            name="reciver_name"
            type="text"
            placeholder="ادخل اسـم  المستلم"
          />
          <PInputeWidget
            label="هاتـف المستلم"
            name="reciver_phone"
            type="text"
            placeholder="ادخل هاتـف المستلم"
          />
          <PInputeWidget
            label="عنـوان المستلم"
            name="reciver_addrass"
            type="text"
            placeholder="اخـتيـاري"
          />

          <div >
            <button className={Style.button} type="submit">اضافة طـرد</button>
          </div>



        </Form>)}
    </Formik>

  </div>)
}