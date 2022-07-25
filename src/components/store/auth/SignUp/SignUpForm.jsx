import React from 'react';
import { useForm, useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
} from '@mantine/core';
import { useHistory } from 'react-router-dom';
import UserType from './UserType';

export default function SignUpForm(props) {
  const history = useHistory()
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });

  return (
    <Paper style={{width: '420px', textAlign: 'left'}} radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to MediStore, Register with
      </Text>

      {/* <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

      <form onSubmit={form.onSubmit(() => {})}>
        <Group direction="column" grow>
     
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            />

            <TextInput
              label="Store Code"
              placeholder="1234"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            />
  
            <UserType 
              onChange={(event) => form.setFieldValue('user_role', event.currentTarget.value)}
            />

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
          />

      
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
        </Group>

        <Group position="apart" mt="xl">
          <Anchor component="button" type="button" color="gray" onClick={() => history.push('/store/signin')} size="xs">
           Already have an account? Login
          </Anchor>
          <Button type="submit">{upperFirst('Register')}</Button>
        </Group>
      </form>
    </Paper>
  );
}