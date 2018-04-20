class Photo {
  constructor(props) {
    this.id = props.id;
    this.description = props.description;
    this.color = props.color;
    this.width = props.width;
    this.height = props.height;
    this.url = props.links.html;
    this.src = props.urls.small;
    this.fullsrc = props.urls.regular;
    this.user = {
      id: props.user.id,
      name: props.user.name,
      username: props.user.username,
    };
  }
}

export default Photo;
