const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons">
      <Button buttonText="Like" className="button-1" />
      <Button buttonText="Comment" className="button-2" />
      <Button buttonText="Share" className="button-3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
