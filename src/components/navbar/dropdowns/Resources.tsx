import Category from "../Category";
import Item from "../Item";
import { SimpleGrid } from "@chakra-ui/react";
import {
  FiUsers,
  FiBookOpen,
  FiClock,
  FiMic,
  FiCalendar,
  FiFileText,
  FiAward,
  FiHelpCircle,
  FiMessageCircle,
  FiTriangle,
  FiGlobe,
  FiZap,
  FiPackage,
} from "react-icons/fi";

export default function Resources() {
  return (
    <SimpleGrid columns={3} gap={4}>
      <Category title="Company">
        <Item title="Customers" desc="Trusted by de best teams" href="/customers" icon={FiUsers} />
        <Item title="Blod" desc="The latesst posts and changes" href="/blog" icon={FiBookOpen} />
        <Item title="Changelog" desc="see what shipped" href="/changelog" icon={FiClock} />
        <Item title="Press" desc="Read the latest news" href="/press" icon={FiMic} />
        <Item title="Events" desc="Join us at an event" href="/events" icon={FiCalendar} />
      </Category>

      <Category title="Learn">
        <Item title="Docs" desc="Vercel Documents" href="/docs" icon={FiFileText} />
        <Item title="Academy" desc="Linear courses to level up" href="/academy" icon={FiAward} />
        <Item title="Knowledge base" desc="Find help quiclky" href="/help" icon={FiHelpCircle} />
        <Item title="Comunity" desc="Join the conversation" href="/community" icon={FiMessageCircle} />
      </Category>

      <Category title="Open Source">
        <Item title="Next.js" desc="The native Next.js platform" href="/frameworks/nextjs" icon={FiTriangle} />
        <Item title="Nuxt" desc="The progressive web framework" href="/frameworks/nuxt" icon={FiGlobe} />
        <Item title="Sveltle" desc="The web efficient UI framework" href="/frameworks/sveltekit" icon={FiZap} />
        <Item title="Turbo repo" desc="Speed with Enterprise scale" href="/templates/turborepo" icon={FiPackage} />
      </Category>
    </SimpleGrid>
  );
}