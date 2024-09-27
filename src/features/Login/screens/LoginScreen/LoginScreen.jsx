import {
  TextInput, PasswordInput, Button,
  Container, Paper, Title,
  Stack, Anchor, Box,
  rem
} from "@mantine/core";

import { useDisclosure } from '@mantine/hooks';
import { IconAt, IconLock } from '@tabler/icons-react';

export default function LoginScreen() {
  const [visible, { toggle }] = useDisclosure(false);
  const iconAt = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const iconLock = <IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;

  return (
    <Container fluid  display="flex" h="100vh" w="100vw" p="0" bg="var(--mantine-color-blue-1)">
      <Paper display="flex" h="100vh" w="45vw" bg="var(--mantine-color-blue-0)">
        <Container w="30vw" my="auto">
          <Title style={{fontSize: "40pt", color: "var(--mantine-color-blue-9)"}}>
            Welcome back!
          </Title>
          <form>
            <Stack gap="sm" mt="xl" mb="md" align="flex-start" justify="center">
              <TextInput placeholder="Username" size="md" w="100%" leftSection={iconAt} />
              <PasswordInput placeholder="Password" size="md" w="100%" visible={visible} onVisibilityChange={toggle} leftSection={iconLock} />
              <PasswordInput placeholder="Confirm Password" size="md" w="100%" visible={visible} onVisibilityChange={toggle} leftSection={iconLock} />
              <Button fullWidth size="md" variant="filled" >Sign In</Button>
            </Stack>
            <Anchor component="button" type="button" c="dimmed" size="sm">
              {"Don't have an account? Register"}
            </Anchor>
          </form>
        </Container>
      </Paper>

      <Box display="flex">
        <svg viewBox="0 0 900 600" width="400" height="100vh" overflow="hidden" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1">
          <path
            d="M256 0L250.8 20C245.7 40 235.3 80 246.2 120C257 160 289 200 289.3 240C289.7 280 258.3 320 237.2 360C216 400 205 440 215.2 480C225.3 520 256.7 560 272.3 580L288 600L0 600L0 580C0 560 0 520 0 480C0 440 0 400 0 360C0 320 0 280 0 240C0 200 0 160 0 120C0 80 0 40 0 20L0 0Z"
            fill="#F3F4F8">
          </path>
        </svg>
      </Box>
    </Container>
  );
}