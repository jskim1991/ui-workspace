import {Component} from "react";
import {inject, observer} from "mobx-react";
import autobind from "autobind-decorator";
import PostListView from "../views/PostListView";
import axios from "axios";

@inject('postStore', 'userStore')
@autobind
@observer
class PostContainer extends Component {

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts() {
        const id = this.props.match.params.id;

        axios.get('/api/post/all/' + id)
            .then(response => {
                this.props.postStore.setPosts(response.data);
                // this.props.history.push('/posts/' +  id);
            })
            .catch(error => console.log(error));
    }

    findCurrentUser() {
        const {user} = this.props.userStore;
        return user;
    }

    hidePost(post) {
        const id = post.id;
        axios.delete('/api/post/' + id)
            .then(response => this.loadPosts())
            .catch(error => console.log(error))
    }

    render() {

        const { posts } = this.props.postStore;

        return(
            <PostListView posts={posts}
                          findCurrentUser={this.findCurrentUser}
                          hidePost={this.hidePost}
            />
        )
    }
}
export default PostContainer;