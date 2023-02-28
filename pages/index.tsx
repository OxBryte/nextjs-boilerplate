import PageLayout from '../src/components/page-layout';
import ContainLayout from '../src/components/page-layout/container';
import { Box, Text } from '@chakra-ui/react';
import Waitlist from '../src/components/waitlist';

export default function Home() {
  return (
    <PageLayout title='Home' description='My Boilerplate'>
      <Waitlist />
    </PageLayout>
  );
}
