import Category from "../Category";
import Item from "../Item";
import { SimpleGrid } from "@chakra-ui/react";
import {
  FiCode,
  FiCpu,
  FiGlobe,
  FiUser,
  FiBox,
  FiGitBranch,
  FiSend,
  FiServer,
  FiActivity,
  FiShield,
  FiLock,
  FiEye,
} from "react-icons/fi";

export default function Products() {
  return (
    <SimpleGrid columns={3} gap={4}>
      <Category title="AI Cloud">
        <Item title="v0" desc="Build Aplications with AI" href="/v0" icon={FiCode} />
        <Item title="AI SDK" desc="The AI Toolkit for JavaScript" href="/ai" icon={FiCpu} />
        <Item title="AI Gateway" desc="One Endpoint, All yout Models" href="/ai/gateway" icon={FiGlobe} />
        <Item title="Vercel Agent" desc="An agent tha knows your stack" href="/agent" icon={FiUser} />
        <Item title="SandBox" desc="AI workflows in live enviroments" href="/sandbox" icon={FiBox} />
      </Category>

      <Category title="Core Platform">
        <Item title="CI/CD" desc="Helping teams ships 6x faster" href="/features/ci-cd" icon={FiGitBranch} />
        <Item title="Content Delivery" desc="Fast, scalable and reliable" href="/features/content-delivery" icon={FiSend} />
        <Item title="Fluid Compute" desc="Services, in serverless form" href="/features/fluid-compute" icon={FiServer} />
        <Item title="Observability" desc="Track every step" href="/features/observability" icon={FiActivity} />
      </Category>

      <Category title="Security">
        <Item title="Bot management" desc="Scalable bot protection" href="/features/bot-management" icon={FiShield} />
        <Item title="Bot ID" desc="Invisible CAPTCHA" href="/features/botid" icon={FiLock} />
        <Item title="Platform Secutiry" desc="DDos protection, firewall" href="/security" icon={FiShield} />
        <Item title="Web Aplication firewall" desc="Granular, custom protection" href="/security/firewall" icon={FiEye} />
      </Category>
    </SimpleGrid>
  );
}