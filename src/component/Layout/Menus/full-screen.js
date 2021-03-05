import React, { Component } from 'react';

class FullScreen extends Component {

    toggleFullscreen() {
        if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                    <div className="dropdown d-none d-lg-inline-block">
                        <button onClick={this.toggleFullscreen} type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                            <i className="mdi mdi-fullscreen font-size-24"></i>
                        </button>
                    </div>
            </React.Fragment>
        );
    }
}

export default FullScreen;