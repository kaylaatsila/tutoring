import { TextInput, PasswordInput, Button, Container, Paper, Title, Stack, Anchor, Box, rem } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Form, Link } from "react-router-dom";
import { IconAt, IconLock } from '@tabler/icons-react';

export default function LoginScreen() {
  const [visible, { toggle }] = useDisclosure(false);
  const iconAt = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const iconLock = <IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;

  return (
    <Container fluid display="flex" h="100vh" w="100vw" p="0" bg="var(--mantine-color-blue-1)">
      <Box display="flex" pos="absolute" right="0" top="0" zIndex="-999">
        <svg width="818" height="549" viewBox="0 0 818 549" fill="none" overflow="hidden" preserveAspectRatio="none"  xmlns="http://www.w3.org/2000/svg">
          <path d="M565.286 239.324C587.358 336.656 526.347 433.451 429.015 455.523C331.683 477.595 234.887 416.584 212.816 319.252C190.744 221.919 251.755 125.124 349.087 103.052C446.419 80.9807 543.215 141.991 565.286 239.324Z"
            stroke="#161F6D" strokeWidth="35" />
          <path d="M202.879 348.915C142.899 372.368 30.6225 464.185 82.3621 487.564C165.967 525.341 751.417 199.69 760.932 139.721C771.422 73.5997 563.564 176.487 563.564 176.487"
            stroke="#161F6D" strokeWidth="45" />
        </svg>
      </Box>

      <Paper display="flex" pos="relative" h="100vh" w="50vw" bg="var(--mantine-color-blue-0)" zIndex="1">
        <Container w="30vw" my="auto">
          <Title style={{ fontSize: "40pt", color: "var(--mantine-color-blue-6)" }}>
            Welcome back!
          </Title>
          <Form >
            <Stack gap="sm" mt="xl" mb="md" align="flex-start" justify="center">
              <TextInput placeholder="Username" size="md" w="100%" leftSection={iconAt} />
              <PasswordInput placeholder="Password" size="md" w="100%" visible={visible} onVisibilityChange={toggle} leftSection={iconLock} />
              <Button fullWidth size="md" variant="filled" >Sign In</Button>
            </Stack>
            <Link to={`register`} style={{ color: "var(--mantine-color-blue-0)" }}>
              <Anchor component="button" type="button" c="dimmed" size="sm">
                {"Don't have an account? Register"}
              </Anchor>
            </Link>
          </Form>
        </Container>
      </Paper>

      <Box display="flex" pos="relative" zIndex="1">
        <svg viewBox="0 0 900 600" width="600" height="100vh" overflow="hidden" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path d="M270 0L266.2 14.3C262.3 28.7 254.7 57.3 241.3 85.8C228 114.3 209 142.7 186.2 171.2C163.3 199.7 136.7 228.3 147.7 257C158.7 285.7 207.3 314.3 214.8 343C222.3 371.7 188.7 400.3 190.7 428.8C192.7 457.3 230.3 485.7 249.3 514.2C268.3 542.7 268.7 571.3 268.8 585.7L269 600L0 600L0 585.7C0 571.3 0 542.7 0 514.2C0 485.7 0 457.3 0 428.8C0 400.3 0 371.7 0 343C0 314.3 0 285.7 0 257C0 228.3 0 199.7 0 171.2C0 142.7 0 114.3 0 85.8C0 57.3 0 28.7 0 14.3L0 0Z"
            fill="#F3F4F8">
          </path>
        </svg>
      </Box>

    </Container>
  );
}