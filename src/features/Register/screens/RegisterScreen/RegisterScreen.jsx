import { TextInput, PasswordInput, Paper, Title, Text, Button, Stack } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

import './RegisterScreen.css';

export default function RegisterScreen() {
  const [visible, { toggle }] = useDisclosure(false);
  
  return (
    <Paper style={{ width: "900px", height: "70vh", display: "flex", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)", borderRadius: "20px" }}>
      <div style={{ backgroundColor: "#161f6d", width: "100%", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)", borderRadius: "20px" }}></div>

      <div style={{ width: "100%", padding: "30px", alignContent: "center" }}>
        <div style={{ width: "100%" }}>
          <Title style={{ fontSize: "30pt", textAlign: "start", marginBottom: "5px", color: "#161f6d" }}>Welcome!</Title>
          <Text size="md" style={{ textAlign: "start", marginTop: "3px" }} >How can we help you, today?</Text>

          <form style={{ width: "100%", textAlign: "center", marginBottom: "5px" }}>
            <TextInput placeholder="Email" required mt="md" style={{marginBottom:"15px"}} />
            <Stack>
              <PasswordInput
                placeholder="Password"
                visible={visible}
                onVisibilityChange={toggle}
              />
              <PasswordInput
                placeholder="Confirm Password"
                visible={visible}
                onVisibilityChange={toggle}
              />
            </Stack>
            <Button fullWidth style={{ backgroundColor: "#161f6d", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)" }}> Sign Up</Button>
          </form>

          <Text size="sm" style={{ textAlign: "center", marginTop: "10px" }}> Have Account?{" "}
            <Text component="a" href="#" color="#161f6d"> Sign In </Text>
          </Text>
          <Text size="sm" style={{ textAlign: "center" }}>
            <Text component="a" href="#" color="#161f6d">Login as tutors</Text>
          </Text>
        </div>
      </div>
    </Paper>
  );
}

