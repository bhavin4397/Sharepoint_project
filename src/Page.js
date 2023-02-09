import Form from "./Form/Form";
import "./App.css";
const Page = () => {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">
          <h1>Registration</h1>
        </div>
        <div class="card-body backgroundStyle">
          <Form />
        </div>
        <div class="card-footer text-muted ">CopyRight@2023</div>
      </div>
    </div>
  );
};

export default Page;
