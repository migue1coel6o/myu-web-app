import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import withLayout from "../components/MyLayout";

const AddReceipt = () => {
  return (
    <>
      <div>
        <div className="add-input-image">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </div>
        <div className="add-input-form">
          <form>
            <TextField
              id="outlined-name"
              label="Title"
              // className={classes.textField}
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="standard-multiline-flexible"
              label="Description"
              multiline
              rows="4"
              rowsMax="auto"
              // value={this.state.multiline}
              // onChange={this.handleChange('multiline')}
              // className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </form>
        </div>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-flow: row;
          min-height: 500px;
        }

        .add-input-image {
          display: flex;
          flex: 1;
          align-items: center;
          place-content: center;
          border-right: 3px solid grey;
        }

        .add-input-image > input {
          display: none;
        }

        .add-input-form {
          margin: 20px;
          flex: 2;
        }

        form {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default withLayout(AddReceipt);
