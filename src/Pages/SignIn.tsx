import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import img from "../Assets/Teal.webp";
import img1 from "../Assets/signUpImg.webp";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "../Utils/authAPI";
import { signUserGlobal } from "../Component/Global/globalState";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = handleSubmit(async (res: any) => {
    signIn(res).then((res: any) => {
      console.log("show: ", res);
      dispatch(signUserGlobal(res));
      navigate("/");
    });
  });

  return (
    <div>
      <Container></Container>
      <BackDrop>
        <Main onSubmit={onSubmit}>
          <LeftSide>
            <BgImage src={img} />
          </LeftSide>
          <RightSide>
            <RightSideMain>
              <TopText>Signin account</TopText>
              <SignInDivHolder>
                <Text>Don't have an account?</Text>
                <Link
                  to="/signup"
                  style={{
                    color: "white",
                    marginLeft: "2px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                  }}
                >
                  <SignInDiv>Sign up</SignInDiv>
                </Link>
              </SignInDivHolder>
              <Input placeholder="Email" {...register("email")} />
              {errors.email && <Error>input email</Error>}
              <Input placeholder="Password" {...register("password")} />
              {errors.password && <Error>input password</Error>}
              <Button type="submit" style={{border:"none"}}>Submit</Button>
            </RightSideMain>
          </RightSide>
        </Main>
      </BackDrop>
    </div>
  );
};

export default SignUp;

const Error = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #4d2121; */
`;
const Main = styled.form`
  width: 800px;
  height: 650px;
  /* background-color: white; */
  border-radius: 5px;
  display: flex;
`;
const LeftSide = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 5px 0 0 5px;
  /* background-color: brown; */
`;
const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
`;
const RightSide = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 0 5px 5px 0;
  border-right: 3px solid white;
  background-color: rgb(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopText = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: white;
`;
const SignInDiv = styled.div`
  margin-top: 2px;
`;
const Button = styled.button`
  width: 343px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #2b0c07;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;
const Input = styled.input`
  width: 330px;
  height: 40px;
  outline: none;
  border: 1px solid rgb(141, 60, 73, 0.7);
  margin-top: 20px;
  padding-left: 10px;
  border-radius: 3px;
  :focus {
    border: 1px solid #ef3340;
  }
  ::placeholder {
    font-size: 17px;
    color: #989898;
    font-family: Garamond;
  }
`;
const SignInDivHolder = styled.div`
  display: flex;
  margin-top: 10px;
  color: grey;
`;
const Text = styled.div`
  color: white;
`;
const RightSideMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* background-color: blue; */
`;

const BackDrop = styled.div`
  height: 780px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0. ); */
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  /* border: 1px solid rgba( 255, 255, 255, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
`;
