import {TextInput,PasswordInput,Paper,Title,Text,Container,Button,Group,Flex,} from "@mantine/core";

export default function RegisterScreen() {
  return (
    <Container fluid h={100}>
      <Paper style={{ width: "900px", height: "100%", display: "flex", boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)", borderRadius:"20px" }}>
        <div style={{backgroundColor: "#161f6d",width: "100%",boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)", borderRadius:"20px"}}></div>

        <div style={{width: "100%",padding: "30px"}}>
          <div style={{width: "100%"}}>
            <Title style={{fontSize:"30pt", textAlign:"start", marginBottom:"5px"}}>Welcome, students!</Title>
            <Text size="md" style={{textAlign:"start", marginTop:"3px"}} >How can we help you, today?</Text>

            <form style={{width:"100%", textAlign:"center", marginBottom:"5px"}}>
              <TextInput placeholder="Email" required mt="md"/>
              <TextInput placeholder="Password" required mt="md"/>
              <Button fullWidth> Login</Button>
            </form>

            <Text size="sm">Don’t have any account?{" "}
              <Text component="a" href="#" color="blue"> Sign up </Text>
            </Text>
            <Text size="sm">
              <Text component="a" href="#" color="blue">Login as tutors</Text>
            </Text>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

