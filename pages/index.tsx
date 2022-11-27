import PageLayout from '../src/components/page-layout';
import ContainLayout from '../src/components/page-layout/container';
import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <PageLayout title='Home' description='My Boilerplate'>
      <ContainLayout>
        <Text>Hello</Text>
      </ContainLayout>
    </PageLayout>
  );
}
