import Button from "./Button_Dashboard";
import  "../styles/_form.styles.css";

const Form = () => {
  return (
     
    <form className="form_Dashboard">
      <div className="form_Dashboard_field">
        <label className="form_Dashboard_label" htmlFor="name">
          Full Name
        </label>
        <div className="form_Dashboard_inputbox">
          <input type="text" placeholder="Enter your full name" />
        </div>
      </div>
      <div className="form_Dashboard_field">
        <label className="form_Dashboard_label" htmlFor="route">
          Route of operation
        </label>
        <div className="form_Dashboard_inputbox">
          <select className="form_Dashboard_route">
            <option>select</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
          </select>
        </div>
      </div>
      <div className="form_Dashboard_field">
        <label className="form_Dashboard_label" htmlFor="phone">
          Phone number
        </label>
        <div className="form_Dashboard_inputbox">
          <input
            className="form_Dashboard_phone"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className="form_Dashboard_field">
        <label className="form_Dashboard_label" htmlFor="Account">
          Account Nnumber
        </label>
        <div className="form_Dashboard_inputbox">
          <input
            className="account"
            type="number"
            placeholder="Type your account number"
          />
        </div>
      </div>
      <div className="ID field">
        <label htmlFor="files">Upload valid ID</label>
        <div className="field1">
          <div className="photobox">
            <label htmlFor="files">Upload file</label>
            <input id="files" style={{ visibility: "hidden" }} type="file" />
          </div>
        </div>
      </div>
      <div className="pho field">
        <label htmlFor="files">Upload photo</label>
        <div className="field1">
          <div className="photobox">
            <label htmlFor="files" className="btn">
              Upload photo
            </label>
            <input id="files" style={{ visibility: "hidden" }} />
          </div>
        </div>
      </div>
      <Button bookTrip={""}  formText="Sign up driver" text={""}  />
          </form>  

  );
};

export default Form;
