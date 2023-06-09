import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
  } from '@chakra-ui/react'

import bgImg from "../images/background.jpg";

export default function Login() {



    const submitHandler = function (e){
        e.preventDefault();
        //this function gets called on submit form
        console.log(e.target.username.value, e.target.password.value);

    }
    const bgStyles={
        backgroundImage:bgImg,
        h: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover"

    }

    const boxStyles={
      
        width: "400px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px"

    }





    return <Box {...bgStyles}>
            <Box {...boxStyles} >
            <form onSubmit={submitHandler}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' name="username" />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name="password"/>
                </FormControl>
                <FormControl mt="10px">
                <Input backgroundColor={"gray"} color="white" type="submit" value="Login"/>
                </FormControl>
            </form>
        </Box>
    </Box>
}