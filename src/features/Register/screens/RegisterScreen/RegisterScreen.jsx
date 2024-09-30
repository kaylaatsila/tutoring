import { TextInput, PasswordInput, Button, Container, Paper, Title, Stack, Anchor, Box, rem, } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Form, Link } from "react-router-dom";
import { IconAt, IconLock } from "@tabler/icons-react";

export default function RegisterScreen() {
  const [visible, { toggle }] = useDisclosure(false);
  const iconAt = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const iconLock = <IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;

  return (
    <Container fluid display="flex" h="100vh" w="100vw" p="0" bg="var(--mantine-color-blue-0)">
      <Box display="flex" w="50vw" h="100vh" justify="center" align="center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 540" fill="none" width="100%" height="100%" preserveAspectRatio="none">
          <path d="M369 0L361.7 18C354.3 36 339.7 72 349.8 108C360 144 395 180 403.3 216C411.7 252 393.3 288 379.5 324C365.7 360 356.3 396 365 432C373.7 468 400.3 504 413.7 522L427 540L0 540L0 522C0 504 0 468 0 432C0 396 0 360 0 324C0 288 0 252 0 216C0 180 0 144 0 108C0 72 0 36 0 18L0 0Z"
            fill="#E2E3F2" stroke-linecap="round" stroke-linejoin="miter" />
        </svg>
      </Box>
      
      <Paper display="flex" pos="relative" h="100vh" w="50vw" bg="var(--mantine-color-blue-0)" zIndex="1">
        <Container w="30vw" my="auto">
          <Title style={{ fontSize: "40pt", color: "var(--mantine-color-blue-6)" }}>
            Welcome New Comer!
          </Title>
          <Form>
            <Stack gap="sm" mt="xl" mb="md" align="flex-start" justify="center">
              <TextInput placeholder="Enter Your Email" size="md" w="100%" leftSection={iconAt} />
              <TextInput placeholder="Username" size="md" w="100%" leftSection={iconAt} />
              <PasswordInput placeholder="Password" size="md" w="100%" visible={visible} onVisibilityChange={toggle} leftSection={iconLock} />
              <PasswordInput placeholder="Confirm Password" size="md" w="100%" visible={visible} onVisibilityChange={toggle} leftSection={iconLock} />
              <Button fullWidth size="md" variant="filled"> Sign Up </Button>
            </Stack>
            <Link to={`/`} style={{ color: "var(--mantine-color-blue-0)" }}>
              <Anchor component="button" type="button" c="dimmed" size="sm">
                {"Have an account? Sign"}
              </Anchor>
            </Link>
          </Form>
        </Container>
      </Paper>
    </Container>
  );
}
