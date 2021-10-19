import FadedText from 'faded-text';

export default function Title(){
    const FADED_TEXT = new FadedText('idElement');
    FADED_TEXT.charFadeIn()
    return (
        <div id="idElement">Hello world</div>
    )
}