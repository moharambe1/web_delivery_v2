import Style from './PInputWidget.module.scss'
import { useField } from "formik";

export const PInputeWidget = ({ label, ...props }) => {

  const [field, meta] = useField(props as any);


  return (

    <div className={Style.form_group}>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input className="text-input" {...field} {...props} />

      {meta.touched && meta.error ? (

        <div className={Style.error}>{meta.error}</div>
      ) : null}
    </div>

  )
}