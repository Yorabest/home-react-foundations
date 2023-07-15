import { Greeting } from "./Greeting/Greeting";
import { Message } from "./Message/Message";
import { Button } from "./Button/Button";

export const App = () => {
    return <>
        <Greeting name='найкращий викладач!' />
        <Message text='Сподіваюсь, що у тебе все good' />
        <Button onClick={() => {
            console.log('Click');
        }}/>
    </>
}
///