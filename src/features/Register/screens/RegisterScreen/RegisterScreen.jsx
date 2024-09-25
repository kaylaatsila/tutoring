import {TextInput,PasswordInput,Paper,Title,Text,Container,Button,Group,Flex,} from "@mantine/core";

export default function RegisterScreen() {
  return (
    <Container fluid h={100}>
      <Paper style={{ width: "900px", height: "100%", display: "flex" }}>
        <div style={{backgroundColor: "#161f6d",width: "100%",}}></div>

        <div style={{width: "100%",padding: "30px",}}>
          <div style={{width: "100%"}}>
            <Title style={{fontSize:"30pt", textAlign:"start"}}>Welcome, students!</Title>
            <Text size="md" style={{textAlign:"start"}} >How can we help you, today?</Text>
            <form style={{width:"100%", textAlign:"center"}}>
              <TextInput label="Email" placeholder="your@email.com" required mt="md"/>
              <PasswordInput label="Password" placeholder="Your password" required mt="md"/>
              <Button fullWidth > Login</Button>
            </form>

            <Group align="center"position="apart" mt="md" style={{ width: "100%" }}>
              <Text size="sm">
                Don’t have any account?{" "}
                <Text component="a" href="#" color="blue">
                  Sign up
                </Text>
              </Text>
              <Text size="sm">
                <Text component="a" href="#" color="blue">
                  Login as tutors
                </Text>
              </Text>
            </Group>
 
          </div>
        </div>

      </Paper>
    </Container>
  );
}

