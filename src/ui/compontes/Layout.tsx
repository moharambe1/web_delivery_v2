import './Layout.scss';
import { SideNavBar } from './SideNavBar';

type Props = {
  children?: React.ReactNode;
}


export const Layout = ({ children }: Props) => {


  return (<div className='layout'>



    <SideNavBar></SideNavBar>


    <div className='contents'>
      {children}
    </div>
  </div>)
}