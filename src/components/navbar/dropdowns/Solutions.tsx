import Category from "../Category";
import Item from "../Item";
import { SimpleGrid } from "@chakra-ui/react";
import {
  FiCpu,
  FiShoppingBag,
  FiLayout,
  FiLayers,
  FiMonitor,
  FiGrid,
  FiFileText,
  FiUsers,
  FiTool,
  FiPenTool,
} from "react-icons/fi";

export default function Solutions() {
  return (
    <SimpleGrid columns={3} gap={4}>
      <Category title="Use cases">
        <Item title="AI apps" desc="Deploy in speed of AI" href="/ai" icon={FiCpu} />
        <Item title="Composable commerce" desc="Power storefonts that converts" href="/solutions/composable-commerce" icon={FiShoppingBag} />
        <Item title="Marketing sites" desc="Launch campaings faster" href="/solutions/marketing-sites" icon={FiLayout} />
        <Item title="Multi-tenant platform" desc="Scale apps with one codebase" href="/solutions/multi-tenant-saas" icon={FiLayers} />
        <Item title="Web apps" desc="Ship features, not infrastructure" href="/solutions/web-apps" icon={FiMonitor} />
      </Category>

      <Category title="Tools">
        <Item title="Marketplace" desc="Extend and automate workflows" href="/marketplace" icon={FiGrid} />
        <Item title="Templates" desc="Jumpstart app development" href="/templates" icon={FiFileText} />
        <Item title="Partner Finder" desc="Get help from solution partners" href="/partners/solution-partners" icon={FiUsers} />
      </Category>

      <Category title="Users">
        <Item title="Platform Engineers" desc="Automate away repetition" href="/solutions/platform-engineers" icon={FiTool} />
        <Item title="Design Engineers" desc="Deploy from every idea" href="/solutions/design-engineers" icon={FiPenTool} />
      </Category>
    </SimpleGrid>
  );
}