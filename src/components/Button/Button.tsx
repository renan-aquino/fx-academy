import s from './button.module.css';

interface buttonProps{
    text: string;
}

export function Button(props: buttonProps){
    return(
        <button className={s.btn}>{props.text}</button>
    )
}