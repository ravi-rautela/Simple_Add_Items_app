import React, { useState } from 'react';
import paper from './contract.png';
import write from './add.png';
import styled from 'styled-components';
import Delete from './cross.png';
import { ToastContainer, toast } from 'react-toastify';


function MainConatainer() {

    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        // console.log("i am clicked");
        if (!inputText) {
            toast.warn("Sorry! Please add some Item in the list.");
        }
        else {
            setItems([...items, inputText]);
            setInputText('');
            toast.success("Item Added Successfully!");
        }
    }
    const deleteItem = (id) => {

        const updatedItem = items.filter((ele, ind) => {
            return ind != id;
        });
        toast.success("Your Item is Deleted Successfully!");
        setItems(updatedItem);
    }
    const deleteAll = () => {
        setItems([]);
    }

    return <div className='container mt-5 text-center'>
        <div className="main ">
            <TotalArea>
                <img src={paper} alt="todo Note's here" />
                <p>✍ Add your items here ✍</p>
            </TotalArea>
            <TextItems>
                <input type="text" placeholder='Enter your Item ' autoComplete='off' required
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <img src={write} alt="write" onClick={addItem} />
            </TextItems>
            <ShowItems>
                {
                    items.map((ele, ind) => {
                        return (
                            <div className="eachColumn" key={ind} >
                                <h1>{ele}</h1>
                                <img src={Delete} alt="Deleter item " onClick={() => deleteItem(ind)} />
                            </div>
                        )
                    })
                }
            </ShowItems>
            <Button>
                <button onClick={deleteAll}><span> CHICK LIST </span></button>
            </Button>
            <ToastContainer />
        </div>
    </div>;
}

export default MainConatainer;

const TotalArea = styled.div`
    p{
        color:white;
        margin-top:5px;
    }   
`
const TextItems = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;  

    input{        
        width:50%;
        border-radius: 6px;
        padding: 4px 10px;
        border: none;         
    }
    img{        
        margin-left: -50px;
        height:20px;
        width:20px;      
     }

`
const ShowItems = styled(TextItems)`
     margin-top: 15px;
     width: 50%;
     cursor: pointer;
     display: inline-grid;
     grid-template-columns: auto ;       

     h1{
         color: white;
         background-color:  #5d40cf;
         width: 270px;
         border-radius: 6px;
         font-weight: normal;
         font-size: 28px;         
     } 
     h1: hover{
         color: black;
         background-color: white;
     }   
     

`
const Button = styled.div`   
    button{       
        border: none;
        outline: none;
        border-radius: 3px;
        cursor: pointer;
        color: black;
        margin-top: 15px;
        padding: 2px 15px;
    }
    button:hover span {
        display: none;        
    }
    button:hover:before{               
        background-color: #5d40cf;
        color: #ffffff;
        content: "REMOVE ALL";
        border: none;
    }  
    button:hover{
         background-color: #5d40cf;
         color: #ffffff;    
         border: none;    
    }
`