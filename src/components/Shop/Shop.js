import React, {useState} from 'react';
import Data from '../../Data/Data.json';
import './Shop.css'
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const Shop = () => {
    const first10 = Data.slice(0,12);
    const [courses,setCourses] = useState(first10);
    const [cart,setCart] = useState([]);
    
const handleAddCourse =  (course) =>{
    console.log('course added', course)
    const newCart = [...cart,course];
    setCart(newCart);
}
    return (
        <div className ="shop-container">
            <div className="course-container">                                  
                {
                    courses.map(course => <Course 
                        handleAddCourse = {handleAddCourse}
                        course ={course} 
                        
                        ></Course>)
                }                                 
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
                    
        </div>
    );
};

export default Shop;






