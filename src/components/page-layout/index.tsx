import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';
import Footer from '../footer';
import Navbar from '../navbar';
import ContainLayout from './container';

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: boolean;
};

const PageLayout = ({ title, description, children, footer = true }: PageProps) => {
  return (
    <>
      <NextSeo
        title={title + ' | Boilerplate'}
        description={description}
      />
        <Box
          mx="auto"
          // py={{ base: '4', md: '6', lg: '8' }}
        >
          {/* <ContainLayout> */}
            <Navbar />
          {/* </ContainLayout> */}
          {children}
          {footer && <Footer/>}
        </Box>
    </>
  );
};

export default PageLayout;
