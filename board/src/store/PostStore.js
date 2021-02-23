import {action, makeObservable, observable, toJS} from "mobx";

class PostStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _post = {};

    @observable
    _posts = [];

    get post() {
        return this._post;
    }

    get posts() {
        return this._posts;
    }

    @action
    selectPost(post) {
        this._post = post;
    }

    @action
    setPosts(posts) {
        this._posts = posts;
        console.log(toJS(this._posts));
    }
}

export default new PostStore();