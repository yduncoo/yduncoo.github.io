const Button = (props) => {
    const url = props.url.replace(/.+\/\/|www.|\..+/g, '')
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer"><button>{url}</button></a>
    );
  };
  
  export default Button;