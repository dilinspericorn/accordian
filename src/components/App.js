import react from 'react';
import Accordian from './Accordian';

const data = [
    {
        buttonLabel:"item One",
        content:`This is the first item\'s accordion body.It is
        shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It\'s also worth noting that just
        about any HTML can go within the .accordion-body,
        though the transition does limit overflow.`
    },
    {
        buttonLabel:"item Two",
        content:`This is the first item\'s accordion body.It is
        shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It\'s also worth noting that just
        about any HTML can go within the .accordion-body,
        though the transition does limit overflow.`
    }
]


const App= ()=>{
const renderAccordian = data.map((d,index)=>{
    <Accordian item={d} key={index}/>
})


    return(
        <div>
            {renderAccordian}
        </div>
    )
}

 


export default App
