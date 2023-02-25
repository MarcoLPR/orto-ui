import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Card, StyledBody } from "baseui/card";
import { Input } from "baseui/input";
import { DisplayXSmall } from "baseui/typography";
import Page from "../components/layout/Page";
import CopyButton from "../components/shared/buttons/CopyButton";
import { useReferrerInfo } from "../hooks/useReferrerInfo";

const Referral = () => {
  const { account } = useWeb3React();
  const [numberOfReferrals, amountGainedFromReferrals] = useReferrerInfo();
  const [referralLink, setReferralLink] = React.useState("");

  React.useEffect(() => {
    if (account) {
      setReferralLink(`https://orto.finance/?ref=${account}`);
    }
  }, [account]);

  return (
    <Page>
      <Input
        value={referralLink}
        clearOnEscape
        endEnhancer={<CopyButton text={referralLink} />}
        readOnly
      />
      <Card>
        <StyledBody>
          <DisplayXSmall>{`Referrals: ${numberOfReferrals}`}</DisplayXSmall>
          <DisplayXSmall>{`ORTO gained from referrals: ${amountGainedFromReferrals}`}</DisplayXSmall>
        </StyledBody>
      </Card>
    </Page>
  );
};

export default Referral;
