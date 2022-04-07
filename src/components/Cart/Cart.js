import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    //condition rendering option
    // 1. element variable
    //2.ternary operator  condition ? true : false
    //3. && operator  (shorthand)
    //.4. || 
    let command;
    if(cart.length ===0){
        command = <p>please add at least one  items</p>
    }
    else if(cart.length === 1){
        command = <p>please add  more</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h1>item Slected : {cart.length}</h1>
            
           {
               cart.map(tShirt =><p>
                   {tShirt.name}
                   <button onClick={()=> handleRemoveCart(tShirt) }>X</button>
                   </p>)
           }
           {cart.length ===0 || <p className='orange'>YAY! You are buyging</p>}
           {cart.length ===3 && <div className='orange'>
               <h3>trigonal</h3>
               <p>tin jon ke ki gift diba?</p>
               </div>}
           {command}
           {cart.length !==4 ? <p>keep adding</p> : <button>remove all</button>}
           {cart.length ===4 &&  <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;