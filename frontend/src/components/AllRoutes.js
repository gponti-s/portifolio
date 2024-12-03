import { Routes, Route} from 'react-router-dom';

export const AllRoutes = ({allRoutes}) => {

    return(
        <div className=''>
            <Routes>
            {allRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
            </Routes>
        </div>
    );
    
}