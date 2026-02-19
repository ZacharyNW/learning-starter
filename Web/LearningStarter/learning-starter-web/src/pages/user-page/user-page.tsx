import { Container, Divider, Flex, Text } from "@mantine/core";
import { useUser } from "../../authentication/use-auth";
import { createStyles } from "@mantine/emotion";

export const UserPage = () => {
  const user = useUser();
  const { classes } = useStyles();
  return (
    <Container>
      <Container>
        <Text size="lg" ta="center">
          User Information
        </Text>
        <Container className={classes.textAlignLeft}>
          <Flex direction="row">
            <Text size="md" className={classes.labelText}>
              First Name:
            </Text>
            <Text size="md">{user.firstName}</Text>
          </Flex>
          <Divider />
          <Flex direction="row">
            <Text size="md" className={classes.labelText}>
              Last Name:
            </Text>
            <Text size="md">{user.lastName}</Text>
          </Flex>
        </Container>
      </Container>
    </Container>
  );
};

const useStyles = createStyles(() => {
  return {
    textAlignLeft: {
      textAlign: "left",
    },

    labelText: {
      marginRight: "10px",
    },

    userPageContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };
});
