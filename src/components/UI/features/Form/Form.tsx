import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { useUsersStore } from "@Store/useUserStore";

interface IFormProps {
  isReg: boolean;
}

const FeatureForm: FC<IFormProps> = ({ isReg }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { users, registrationUser, loginUser } = useUsersStore();

  const onSubmit = (data: any) => {
    if (!isReg && (errors.email || errors.password)) return;
    if (
      isReg &&
      (errors.username ||
        errors.email ||
        errors.password ||
        errors.confirmPassword)
    )
      return;
    data.userID = users.length;
    console.table(data);
    if (isReg) {
      registrationUser(data.email, data.username, data.password, data.userID);
    } else {
      loginUser(data.email, data.password);
    }
  };

  return (
    <Box maxW="lg" mx="auto" mt="8" bgColor="#EEEFFF" p="8" borderRadius="30px">
      {isReg && (
        <FormControl mt="4" isInvalid={!!errors.username}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Enter your username"
            borderColor="black"
            _hover={{}}
            {...register("username", { required: "Username is required" })}
          />
          <FormErrorMessage>
            {typeof errors.username?.message === "string" &&
              errors.username.message}
          </FormErrorMessage>
        </FormControl>
      )}
      <FormControl mt="4" isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          borderColor="black"
          _hover={{}}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        <FormErrorMessage>
          {typeof errors.email?.message === "string" && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mt="4" isInvalid={!!errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          borderColor="black"
          _hover={{}}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
              message:
                "Password must contain at \
                least one uppercase letter, one lowercase letter, and one number",
            },
          })}
        />
        <FormErrorMessage>
          {typeof errors.password?.message === "string" &&
            errors.password.message}
        </FormErrorMessage>
      </FormControl>
      {isReg && (
        <FormControl mt="4" isInvalid={!!errors.confirmPassword}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your password"
            borderColor="black"
            _hover={{}}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === "" ||
                value === getValues().password ||
                "The passwords do not match",
            })}
          />
          <FormErrorMessage>
            {typeof errors.confirmPassword?.message === "string" &&
              errors.confirmPassword.message}
          </FormErrorMessage>
        </FormControl>
      )}
      <Box display="flex" justifyContent="center">
        <Button
          colorScheme="blue"
          mt="4"
          w="lg"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default FeatureForm;
