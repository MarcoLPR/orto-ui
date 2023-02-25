import * as React from "react";
import { useStyletron } from "baseui";
import { Card, StyledAction, StyledBody } from "baseui/card";

const StyledCard = ({ children, actions, ...rest }: any) => {
  const [css] = useStyletron();
  return (
    <Card
      {...rest}
      className={css({
        width: "400px",
        height: "500px",
        padding: "25px auto",
      })}
    >
      <StyledBody className={css({
        height: "135px",
      })}>{children}</StyledBody>
      <StyledAction>{actions}</StyledAction>
    </Card>
  );
};

export default StyledCard;
