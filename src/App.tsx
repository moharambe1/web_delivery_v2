import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.scss';
import { RouteManger } from './common/varible';
import { Layout } from './ui/compontes/Layout';
import { useStoreon } from './ui/hooks/useStoreon';
import { AddPackagePage } from './ui/pages/AddPackagePage';
import { SingInPage } from './ui/pages/SignInPage';
import { SingUpPage } from './ui/pages/SignUpPage';



function App() {
  const navigate = useNavigate();
  RouteManger.go = (path: string) => navigate(path);


  return (


    <div className="App">
      <header className="App-header">
        <Layout>
          <Routes>

            <Route path='/' element={<h1>الصفحة الرئسية</h1>} />
            <Route path='/addPackage' element={<AddPackagePage />} />
            <Route path='/signin' element={<SingInPage />} />
            <Route path='/signup' element={<SingUpPage />} />
            <Route path='/signout' element={<h1>صفحة تسجيل الخروج</h1>} />

          </Routes>
        </Layout>
      </header>
    </div>
  );
}

export default App;
