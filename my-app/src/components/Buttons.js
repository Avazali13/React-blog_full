import{Button} from "./Button"
export function Buttons(props){

    return(
        <div className={props.class}>
             <Button class="about">About me</Button>
        <Button class="lets">😮 Let's see portfolios</Button>

        </div>
       
    )
}
