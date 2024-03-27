import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Navbar} from '@/components/Navbar/Navbar';
import { AppShell } from '@mantine/core';
import { BasicAppShell } from '@/components/AppShell/BasicAppShell';

export function HomePage() {
  return (
    <>
    <BasicAppShell/>
      {/* <Welcome />
      <ColorSchemeToggle /> */}
    </>
  );
}
