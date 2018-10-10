import React from "react";
import { firebase } from "../firebase/firebase";
import FileUploader from "react-firebase-file-uploader";
import { connect } from 'react-redux';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        };
    }
    handleChangeUsername = event => this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
    };

    render() {
        return (
            <div>
            <form>
                <label>Username:</label>
                <input type="text" value={this.state.username} name="username" onChange={this.handleChangeUsername} />
                <label>Avatar:</label>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.avatarURL && <img src={this.state.avatarURL} />}
                <FileUploader
                    accept="image/*"
                    filename={this.props.loginUser.id}
                    storageRef={firebase.storage().ref("profile-images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                />
            </form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginUser: state.loginUser
    };
};

export default connect(mapStateToProps)(ProfilePage);
