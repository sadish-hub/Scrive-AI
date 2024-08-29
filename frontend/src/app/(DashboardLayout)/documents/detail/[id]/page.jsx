'use client';
import Grid from '@mui/material/Grid';

import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';

// import ProductCarousel from '@/app/components/apps/ecommerce/productDetail/ProductCarousel';
// import ProductDetail from '@/app/components/apps/ecommerce/productDetail/ProductDetail';
// import ProductDesc from '@/app/components/apps/ecommerce/productDetail/ProductDesc';
// import ProductRelated from '@/app/components/apps/ecommerce/productDetail/ProductRelated';

import ProductDesc from '@/app/components/documents/productDetail/ProductDesc';
import ProductRelated from '@/app/components/documents/productDetail/ProductRelated';
import AppCard from '@/app/components/shared/AppCard';
import ProductDetail from '@/app/components/documents/productDetail/ProductDetail';
import ChatContent from '@/app/components/documents/productDetail/ChatContent';
import ChatMsgSent from '@/app/components/documents/productDetail/ChatMsgSent';
import { useState } from 'react';
import { Box, Divider } from '@mui/material';
import ChatSidebar from '@/app/components/documents/productDetail/ChatSidebar';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'documents',
    to: '/documents',
  },
  {
    title: 'detail',
  },
];

const EcommerceDetail = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <PageContainer
      title="Documents Detail"
      description="this is eCommerce Detail"
    >
      {/* breadcrumb */}
      <Breadcrumb title="Chat with your contract & document" items={BCrumb} />
      <AppCard>
        <ChatSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        <Box flexGrow={1}>
          <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
          <Divider />
          <ChatMsgSent />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default EcommerceDetail;
