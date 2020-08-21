import React from 'react';
import './PopUp.scss';

class PopUp extends React.Component {

    state = {
        open: true
    }

    closeModal = () => {
        this.setState({open: false});
    }

    render() {
        if (this.props.firstRender || !this.state.open)
            return (null);
        else if (this.props.won) {
            console.log("you won");
            return (
                <div className="modal-container">
                <div className="modal">
                    <div className="modal__text">
                        <h1 className="modal__heading">Congrats you won!</h1>
                    </div>
                    <div className="close">
                        <button className="close__button" onClick={this.closeModal}>CLOSE</button>
                    </div>
                </div>
            </div>
            );
        } else {
            console.log("you lost");
            return (
                <div className="modal-container">
                <div className="modal">
                    <div className="modal__text">
                        <h1 className="modal__heading">Not quite! You have some errors:</h1>
                        <ul className="modal__ul">
                            {this.props.errorLi.map(item => <li className="modal__li">{item}</li>)}
                        </ul>
                    </div>
                    <div className="close">
                        <button className="close__button" onClick={this.closeModal}>CLOSE</button>
                    </div>
                </div>
            </div>
            );
        }
    }

}

export default PopUp;