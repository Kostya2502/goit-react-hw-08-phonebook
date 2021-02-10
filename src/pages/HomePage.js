import { Button } from "@material-ui/core";
import React from "react";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
    }

    play = () => {
        this.setState({ play: true, pause: false })
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }

    render() {

        return (
            <div class='playMusic'>
                <Button style={{ marginRight: '50px' }} onClick={this.play} size='large' color="primary" variant="contained">TOUCH  ME</Button>
                <Button onClick={this.pause} size='large' color="primary" variant="contained">! ! STOP ! !</Button>
            </div>
        );
    }
}
