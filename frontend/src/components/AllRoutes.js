import { Routes, Route} from 'react-router-dom';

export const AllRoutes = ({allRoutes}) => {

    return(
        <div className='mainview'>
            <Routes>
            {allRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
            </Routes>
        </div>
    );
    
}